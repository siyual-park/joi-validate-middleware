const Joi = require('@hapi/joi');
const joiValidateMiddleware = require('../lib');

const schema = {
  params: Joi.object({
    id: Joi.number().required(),
  }).required(),
  body: Joi.object({
    content: Joi.string().required(),
  }).required()
};

const validator = joiValidateMiddleware.create(schema);

const successRequest = {
  params: {
    id: 1,
  },
  body: {
    content: 'test',
  }
};

validator(successRequest);
console.log('success');

const errorRequest = {
  params: {
    id: 'other',
  },
};

try {
  validator(errorRequest);
  console.log('fail');
} catch (e) {
  console.log('success');
}
