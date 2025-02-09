import { db } from "../../config/db";
import { Contact } from "../models/contacts.model";

export class ContactsRepository {
  static async findByEmailOrPhone(
    email?: string,
    phonenumber?: string
  ): Promise<Contact[]> {
    return db.any(
      `SELECT * FROM contacts 
         WHERE email = $1 OR phonenumber = $2 
         OR id IN (SELECT linkedid FROM contacts WHERE email = $1 OR phonenumber = $2 AND linkedid IS NOT NULL)
         OR linkedid IN (SELECT id FROM contacts WHERE email = $1 OR phonenumber = $2)
         OR linkedid IN (SELECT linkedid FROM contacts WHERE email = $1 OR phonenumber = $2 AND linkedid IS NOT NULL)`,
      [email, phonenumber]
    );
  }

  static async createPrimary(
    email: string,
    phonenumber: string
  ): Promise<Contact> {
    return db.one(
      `INSERT INTO contacts (email, phonenumber, linkprecedence       , createdat, updatedat) 
             VALUES ($1, $2, 'primary', NOW(), NOW()) 
             RETURNING *`,
      [email, phonenumber]
    );
  }

  static async createSecondary(
    email: string,
    phonenumber: string,
    primary_id: number
  ): Promise<Contact> {
    return db.one(
      `INSERT INTO contacts (email, phonenumber, linkedid, linkprecedence       , createdat, updatedat) 
             VALUES ($1, $2, $3, 'secondary', NOW(), NOW()) RETURNING *`,
      [email, phonenumber, primary_id]
    );
  }

  static async updateToSecondary(
    contact_id: number,
    primary_id: number
  ): Promise<void> {
    await db.none(
      `UPDATE contacts 
             SET linkedid = $1, linkprecedence        = 'secondary', updatedat = NOW() 
             WHERE id = $2`,
      [primary_id, contact_id]
    );
  }

  static async findByPrimaryId(primaryId: number): Promise<Contact[]> {
    return db.any(`SELECT * FROM contacts WHERE id = $1 OR linkedid = $1`, [
      primaryId,
    ]);
  }

  static async findAll(): Promise<Contact[]> {
    return db.any(`SELECT * FROM contacts ORDER BY createdat ASC`);
}

}
