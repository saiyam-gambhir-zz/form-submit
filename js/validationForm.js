const RECIEVENOTIFICATION = "Are you sure you want to recieve notifications for comments";
const DONOTRECIEVENOTIFICATION = "Are you sure you dont't want to recieve notifications for comments";

var ValidationForm = function(validationForm, notificationCheckbox) {
  this.validationForm = validationForm;
  this.inputTypeTextField = new InputTypeTextField(this.validationForm.getElementsByClassName('text'));
  this.textArea = new InputTypeTextField(this.validationForm.getElementsByClassName('text-area'));
  this.fields = [this.inputTypeTextField, this.textArea];
  this.notificationCheckbox = notificationCheckbox;
};

ValidationForm.prototype.validateFields = function() {
  var isValid = true;
  for(var index = 0, length = this.fields.length; index < length; index++) {
    isValid = (this.fields[index].validate() && isValid);
  }
  return isValid;
};

ValidationForm.prototype.checkConfirmation = function(message) {
  return confirm(message);
};

ValidationForm.prototype.showConfirmation = function() {
  return this.notificationCheckbox.checked ? this.checkConfirmation(RECIEVENOTIFICATION) : this.checkConfirmation(DONOTRECIEVENOTIFICATION);
};

ValidationForm.prototype.validateForm = function() {
  return this.validateFields() && this.showConfirmation();
};

ValidationForm.prototype.submitAfterValidate = function() {
  var _this = this;
  this.validationForm.addEventListener('submit', function(event) {
    if(!_this.validateForm())  { event.preventDefault() }
  });
};

window.onload = function() {
  var validationForm = new ValidationForm(document.getElementById('reg-form'), document.querySelector(".confirm"));
  validationForm.submitAfterValidate();
};