import { ContactsRepository } from "../Repositories/contacts.repository";
import { Contact } from "../models/contacts.model";

export class ContactsService {
  static async identifyOrCreateContact(email?: string, phonenumber?: string) {
    const existingContacts: Contact[] =
      await ContactsRepository.findByEmailOrPhone(email, phonenumber);

    if (existingContacts.length === 0) {
      const newPrimary = await ContactsRepository.createPrimary(
        email ?? "",
        phonenumber ?? ""
      );
      return {
        primaryContactId: newPrimary.id,
        emails: newPrimary.email ? [newPrimary.email] : [],
        phoneNumbers: newPrimary.phonenumber ? [newPrimary.phonenumber] : [],
        secondaryContactIds: [],
      };
    }

    const primaryContacts: Contact[] = existingContacts.filter(
      (c) => c.linkprecedence === "primary"
    );

    let primary: Contact = primaryContacts.reduce((a, b) =>
      a.createdat < b.createdat ? a : b
    );

    const toConvert: Contact[] = primaryContacts.filter(
      (c) => c.id !== primary.id
    );
    if (toConvert.length > 0) {
      await Promise.all(
        toConvert.map((c) =>
          ContactsRepository.updateToSecondary(c.id, primary.id)
        )
      );
    }

    const updatedContacts: Contact[] = await ContactsRepository.findByPrimaryId(
      primary.id
    );

    const secondaryContacts: Contact[] = updatedContacts.filter(
      (c) => c.linkedid === primary.id
    );

    const emails = Array.from(
      new Set(
        [primary.email, ...secondaryContacts.map((c) => c.email)].filter(
          Boolean
        )
      )
    );

    const phoneNumbers = Array.from(
      new Set(
        [
          primary.phonenumber,
          ...secondaryContacts.map((c) => c.phonenumber),
        ].filter(Boolean)
      )
    );

    return {
      primaryContactId: primary.id,
      emails,
      phoneNumbers,
      secondaryContactIds: secondaryContacts.map((c) => c.id),
    };
  }

  static async getAllContactsRaw() {
    return await ContactsRepository.findAll();
}

static async clearAllContacts(): Promise<{ message: string }> {
  await ContactsRepository.clearAllContacts();
  return { message: 'All contacts have been cleared successfully.' };
}
}
