function extractPhoneNumber() {
    let input = document.getElementById('phoneNumber').value;
    let areaCode = input.substring(1, 4);
    let numberPart = input.substring(6).replace('-', '');

    document.getElementById('areaCode').value = areaCode;
    document.getElementById('phone').value = numberPart;
}
