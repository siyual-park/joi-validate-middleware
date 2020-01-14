function validateSchema(request, scheme) {
  return () => {
    if (scheme) {
      const {error} = scheme.validate(request);
      if (error) throw error;
    }
  };
}

module.exports = validateSchema;
