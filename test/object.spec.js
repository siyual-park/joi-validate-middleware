const Joi = require('@hapi/joi');
const joiValidateMiddleware = require('../lib');

const schema = {
  params: {
    id: Joi.number().required(),
  },
  body: {
    content: Joi.string().required(),
  }
};

const validate = joiValidateMiddleware.create(schema);

const successRequest = {
  params: {
    id: 1,
  },
  body: {
    content: 'test',
  }
};

validate(successRequest);
console.log('success');

const errorRequest = {
  params: {
    id: 'other',
  },
};

try {
  validate(errorRequest);
  console.log('fail');
} catch (e) {
  console.log('success');
}
