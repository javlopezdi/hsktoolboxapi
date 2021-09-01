const baseJoi = require("joi");
const sanitizeHtml = require("sanitize-html");

const extension = (joi) => ({
  type: "string",
  base: joi.string(),
  messages: {
    "string.escapeHtml": "{{#label}} must not include HTML!",
  },
  rules: {
    escapeHtml: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });
        if (clean != value)
          return helpers.error("string.escapeHtml", { value });
        return clean;
      },
    },
  },
});

const Joi = baseJoi.extend(extension);

module.exports.newUserSchema = Joi.object({
  firstName: Joi.string().required().escapeHtml(),
  lastName: Joi.string().required().escapeHtml(),
  email: Joi.string().email().required().escapeHtml(),
  password: Joi.string().escapeHtml().required(),
});

module.exports.userSchema = Joi.object({
  email: Joi.string().email().required().escapeHtml(),
  password: Joi.string().escapeHtml().required(),
});
