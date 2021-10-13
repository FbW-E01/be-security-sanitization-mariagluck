import mongoose from "mongoose";

// Which syntax do you like; destructuring or no?
//ANSWER: Either way works for me, perhaps I like more to write everytime mongoose.Schema
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const contactSchema = new Schema({
    country: String,
    email: String,
    message: String,
    name: String,
    telephone: String,
});

const Contact = mongoose.model("contacts", contactSchema);

export default Contact;