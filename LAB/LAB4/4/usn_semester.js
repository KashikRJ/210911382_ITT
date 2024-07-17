function validateForm() {
    let usn = document.getElementById("usn").value;
    let semester = document.getElementById("semester").value;
    let usnRegex = /^[1-4][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;

    if (!usnRegex.test(usn)) {
        alert("Invalid USN format.");
        return false;
    }

    if (semester < 1 || semester > 8) {
        alert("Invalid semester. Enter a value between 1 and 8.");
        return false;
    }

    alert("Form submitted successfully.");
    return true;
}
