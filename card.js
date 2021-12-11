function validateForm() {
    var exMonth = document.getElementById('mm-card').value;
    var exYear = document.getElementById('year-card').value;
    var date = new Date();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var twoDigitYear = year.toString().substr(-2);
    console.log(exMonth);
    console.log(exYear);
    console.log(month);
    console.log(twoDigitYear);
    console.log(year);
    if (twoDigitYear > exYear || (twoDigitYear === exYear && month >= exMonth)) {
        alert("The expiry date is before today's date. Please select a valid expiry date");
        return false;
    }
    else{
        alert("Thank you for your submission");
        return true;
    }
    
}
