var InputTypeTextField = function(field) {
  this.field = field;
};

var TextArea = function(field) {
  this.field = field;
};

InputTypeTextField.prototype = new FormField();
TextArea.prototype = new FormField();