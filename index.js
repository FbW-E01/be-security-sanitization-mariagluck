import express from 'express';
import config from './config.js';
import connect from './database.js';
import errorController from "./controllers/errorController.js";
import contactController from "./controllers/contactController.js";
import contactRules from './validation/contactRules.js';
import Contact from './models/contact.js';
import { validationResult } from 'express-validator';
import errorCheck from './validation/errorCheck.js';

const server = express();
config(server);
await connect();

// What do you think, is /contact better or /contacts?
// Research opinions about this after you are done with the task
server.use("/contact", contactController);
server.use(errorController);

server.get("/", async (req, res) => {
    res.json(await Contact.find());
  });

server.get("/:contactId/contacts", async (req, res) => {
  const contactId = req.params.contactId;
  const contacts = await Contact.find({ contactId: contactId });

  res.json(contacts);
});


server.post("/", errorCheck(contactRules), async (req, res) => {
    console.log(req.body);
    const contacts = await Contact.findById(req.params.contactId);
  
    if (!contacts) {
      res.status(404);
      res.json({ error: "Contact not found" });
}
  
    try {
      const contact = new Contact({
        country: req.body.country,
        email: req.body.email,
        message: req.body.message,
        name: req.params.name,
        telephone: req.params.telephone,
      });
      await contacts.addComment(contact);
      res.json(contact);
    } catch (error) {
      res.status(400);
      res.json({ error });
      return;
    }
  });

  server.use((req, res) => {
    res.status(404); 
    res.json({ error: "I don't have what you seek" });
  });

server.listen(process.env.PORT, () => {
    console.log(`Listening to http://localhost:${process.env.PORT}`);
});