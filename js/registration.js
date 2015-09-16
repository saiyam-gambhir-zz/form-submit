var RegistrationForm = function(form) {
  this.form         = form;
  this.inpuTypeText = new InpuTypeText(document.getElementsByClassName('text-field'));
  this.textArea     = new TextArea(document.getElementById('text-area'));
  this.checkBox     = new CheckBox(document.getElementById('check'));
}

RegistrationForm.prototype.submitAndValidate = function() {
  var _this = this;
  this.checkBox.confirmation();
  this.form.onsubmit = function() {
    if(_this.inpuTypeText.validate() & _this.textArea.validate()) {
      alert('Form Submitted');
      return true;
    }
    return false;
  }
}

RegistrationForm.prototype.bind = function() {
  this.submitAndValidate();
}

window.onload = function() {
  var registrationForm = new RegistrationForm(document.getElementById('reg-form'));
  registrationForm.bind();
}