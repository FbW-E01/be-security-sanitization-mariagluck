import { body } from "express-validator";

// These validators and sanitizers are for creating new comments
const contactRules = [
  body("name").exists().withMessage("name-required"),  
  body("name").isLength({min:3, max: 30}).withMessage("name-too-short"),
  body("name").isAlphanumeric().withMessage("letters-and-numbers-only"),
  body("message").isLength({min:1, max: undefined}).withMessage("author-email"),
  body("message").isAlphanumeric().withMessage("letters-and-numbers-only"),
  body("telephone").exists().withMessage("phone-required"),
  body("telephone").isMobilePhone([{strictMode: true}]).withMessage("mobile-number-required"),
  body("country").exists().withMessage("country-required"),
  body("country").isAlpha().withMessage("letters-only"),
  body("message").trim().blacklist('\\[\\]'), // Sanitizes content, no validation message!
  body("email").isEmail().withMessage("must-be-email")
];

export default contactRules;