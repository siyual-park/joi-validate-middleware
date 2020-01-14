# Joi Validate Middleware

**Validate middleware generator using *[Joi](https://www.npmjs.com/package/@hapi/joi)(^17.0.2)***

​    

## Install

```shell
$ npm i joi-validate-middleware
```

​    

## Use

```js
const Joi = require('@hapi/joi');
const joiValidateMiddleware = require('joi-validate-middleware');

const schema = {
  params: Joi.object({
    id: Joi.number().required(),
  }).required(),
  body: Joi.object({
    content: Joi.string().required(),
  }).required()
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
```

