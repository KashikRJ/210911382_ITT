function page2() {
    
    let mode = localStorage.getItem("selectedMode");
    document.getElementById("textoutput").innerText = `Mode of Transport: ${mode}`;
    
}

function calcfare() {
    var person = parseInt(document.getElementById("person").value) || 0;
    var cost = parseFloat(document.getElementById("cost").value) || 0;
    let total = person * cost;
    document.getElementById("output").innerText = `Total cost: ${total}`;
}

function retfare() {
    var isChecked = document.getElementById("return").checked;
    var person = parseInt(document.getElementById("person").value) || 0;
    var cost = parseFloat(document.getElementById("cost").value) || 0;
    let total;

    if (isChecked) {
        total = person * cost * 2;
        document.getElementById("output2").innerText = `Total cost with return: ${total}`;
    } else {
        document.getElementById("output2").innerText = "";
    }
}


document.addEventListener('DOMContentLoaded', function() {
     page2();
     let costElement = document.getElementById("cost");
    let personElement = document.getElementById("person");
     if (costElement && personElement) {
        costElement.addEventListener('input', function() {
            calcfare();
            retfare(); 
        });
        personElement.addEventListener('input', function() {
            calcfare();
            retfare(); 
        });
    }

    
    let retcostElement = document.getElementById("return");
    if (retcostElement) {
        retcostElement.addEventListener('change', retfare); 
    }
    
});
