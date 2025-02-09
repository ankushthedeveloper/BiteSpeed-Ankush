import { Request, Response } from 'express';
import { ContactsService } from '../Services/contacts.service';

export class ContactsController {
    static async identify(req: Request, res: Response) {
      
            const { email, phoneNumber } = req.body;
            const contact = await ContactsService.identifyOrCreateContact(email, phoneNumber);
            res.status(200).json({ contact });
       
    }
    static async getAllContactsRaw(req: Request, res: Response) {
      try {
          const contacts = await ContactsService.getAllContactsRaw();
          res.json({ contacts });
      } catch (error) {
          console.error("Error fetching all contacts:", error);
          res.status(500).json({ message: "Internal Server Error" });
      }
  }
}
