
function validateForm() {
    let x = document.forms["LoginForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
