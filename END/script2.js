function page2(){
    let dob=localStorage.getItem("dob");
    let radio=localStorage.getItem("radio");
    let chk= localStorage.getItem("chk");

    document.getElementById("1").innerText=dob;
    document.getElementById("2").innerText=radio;
    document.getElementById("3").innerText=chk;
}


document.addEventListener('DOMContentLoaded',function(){
    page2();

});