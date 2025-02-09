import { Router } from 'express';
import { validateContact } from '../Repositories/contacts.dto';
import { validationMiddleware } from '../Middlewares/validationMiddleware';
import { ContactsController } from '../Controllers/contacts.controllers';


const router = Router();

router.post('/identify', validateContact, validationMiddleware, ContactsController.identify);
router.get('/all-contacts',ContactsController.getAllContactsRaw);

export default router;
