var Validations = {
  checkMinimumCharacters: function(field, minCharactersLength) {
    return field.trim().length > minCharactersLength;
  },
  checkBlankField: function(field) {
    return !!field.trim();
  },
  getErrorMessage: function(field, validationType) {
    switch(validationType) {
      case 'minimum-length-required': return field.getAttribute('data-name') + ' is too short. Must be atleast ' + field.getAttribute('data-minimum-length') + ' characters';
      case 'presence-required': return field.getAttribute('data-name') + ' can"t be empty';
    };
  },
  validate: function(field, validationType) {
    switch(validationType) {
      case 'minimum-length-required': return this.checkMinimumCharacters(field.value, field.getAttribute('data-minimum-length')); 
      case 'presence-required': return this.checkBlankField(field.value);
    }
  }
}