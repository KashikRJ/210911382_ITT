function validate() {
    let val = new Date(document.getElementById("Date").value);
    let curr = new Date(); // Use current date for validation

    if (val < curr) {
        alert(`Date is incorrect! : ${val.toDateString()}`); // Show a more user-friendly date
    } else {
        // Save selected mode to localStorage
        let selectedMode = document.getElementById("Mode").value;
        localStorage.setItem("selectedMode", selectedMode);

        alert("Form Submitted!");
        window.location.href = "page2.html";
    }
}

document.addEventListener('DOMContentLoaded', function() {
   
    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener('click', validate);

});