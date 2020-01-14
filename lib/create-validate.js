const compose = require('./compose');
const validateSchema = require('./validate-schema');

function createValidate(schema) {
  return function validate(request) {
    const validators = [];

    for (const [key, value] of Object.entries(schema)) {
      validators.push(validateSchema(request[key], value));
    }

    const validateSchemas = compose(...validators);
    validateSchemas();
  };
}

module.exports = createValidate;
