import express from 'express';
import Contact from "../models/contact.js";
import errorCheck from '../validation/errorCheck.js';
import contactRules from '../validation/contactRules.js';

const router = express.Router();

// Besides adding validation and sanitation
// feel free to improve these in other ways!

router.post("/",  errorCheck(contactRules), async (request, response) => {
    response.json(await Contact.create(request.body));
});

router.get("/", async (request, response) => {
    response.json(await Contact.find({}));
});

export default router;