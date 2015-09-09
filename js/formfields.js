var FormFields = function() {
}

FormFields.prototype.showMessage = function(message) {
  alert(message);
}

var InpuTypeText = function(inputField) {
  this.inputField = inputField;
}

var TextArea = function(textField) {
  this.textField = textField;
}

var CheckBox = function(checkBox) {
  this.checkBox = checkBox;
}

InpuTypeText.prototype = new FormFields();
TextArea.prototype     = new FormFields();

InpuTypeText.prototype.validate = function() {
  var flag = true;
  for(index = 0; index < this.inputField.length; index++) {
    if(this.inputField[index].value.trim().length <= 0) {
      this.showMessage(this.inputField[index].getAttribute("data-name") + " can't be empty.");
      flag = false;
    }
  }
  return flag;
}

TextArea.prototype.validate = function() {
  if(this.textField.value.trim().length <= 49) {
    this.showMessage('Please Enter Atleast 50 Characters in comments');
    return false;
  }
  return true;
}

CheckBox.prototype.confirmation = function() {
  this.checkBox.onchange = function() {
    if(this.checked == true) {
     if(confirm("Are You Sure you want to recieve notification ?")) {
      this.checked = true;
     }
     else {
      this.checked = false;
     }
    }
  }
}