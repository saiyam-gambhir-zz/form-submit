var FormField = function() {
};

FormField.prototype.showMessage = function(message) {
  alert(message);
};

FormField.prototype.validate = function() {
  var isValid = true;
  for(var i = 0; i < this.field.length; i++) {
    var fieldValidations = this.field[i].getAttribute('data-validation').split(' ');  
    for(var j = 0, length = fieldValidations.length; j < length; j++) {
      if(!Validations.validate(this.field[i], fieldValidations[j])) {
        isValid = false;
        this.showMessage(Validations.getErrorMessage(this.field[i], fieldValidations[j]));
      }
    }
  }
  return isValid;
};