function validate(request, scheme) {
  if (scheme) {
    if (typeof scheme.validate === 'function') {
      const {error} = scheme.validate(request);
      if (error) throw error;
    } else {
      for (let [key, value] of Object.entries(scheme)) {
        validate(request[key], value);
      }
    }
  }
}

function validateSchema(request, scheme) {
  return () => validate(request, scheme);
}

module.exports = validateSchema;
