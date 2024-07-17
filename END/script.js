let pidarray=new Array(4) // or just use []
let currentMaxDiv=null;
for(let i=0;i<pidarray.length;i++)//or use pidarray.fill(4)
{
    pidarray[i]=0;
}

function display(){

    let tag="Neutral";
    let pid1=document.getElementById('product_id').value;
    pid=parseInt(pid1)-1;
    let cmt=document.getElementById('comments').value;
    let cmt1=cmt.toLowerCase();
    if(cmt1.includes("happy")||cmt1.includes("good"))
    {
        pidarray[pid]++;
        tag="positive";
    }
    else if(cmt1.includes("sad")||cmt1.includes("bad"))
    {
        pidarray[pid]--;
        tag="negative";
    }
    
    let max_pid=-1;
    let max_count=-1;
    for(let i=0;i<pidarray.length;i++)
    {
        if(max_count<pidarray[i])
        {   

            max_count=pidarray[i];
            max_pid=i;

        }

    }
    const dispdiv=document.getElementById(pid1);
    const creatediv=document.createElement('div');
    creatediv.innerHTML=`Comment:${cmt} <br> Tag:${tag}`
    
   dispdiv.appendChild(creatediv);

   max_pid = (max_pid + 1).toString(); 
   const maxdiv = document.getElementById(max_pid); 
   
   if (currentMaxDiv && currentMaxDiv !== maxdiv) {
       currentMaxDiv.style.backgroundColor = "White"; 
   }
   
   maxdiv.style.backgroundColor = "Blue";
   currentMaxDiv = maxdiv; 

   const resdiv=document.getElementById('result');
   resdiv.innerText=`PID with max positive commments is PID ${max_pid} with ${max_count} +ve comments.`
    

}


function nxtpage(){
     let radioval;
     let chkval=[];
     let dobval;
    const radios=document.querySelectorAll(`input[name="radio1"]`);
    for(let radio of radios){
        if(radio.checked){
            let label=document.querySelector(`label[for="${radio.id}"]`);
              radioval=label.textContent;

        }


    }

    const boxes=document.querySelectorAll(`input[type="checkbox"][name="ch"]`);
    for(let box of boxes){
        if(box.checked){
            let label=document.querySelector(`label[for="${box.id}"]`);
              chkval.push(label.textContent);

        }
    }
        let chkstr = chkval.join(", "); 
        const date=document.getElementById('dob');
         dobval=date.value;

         localStorage.setItem("dob",dobval);
         localStorage.setItem("radio",radioval);
         localStorage.setItem("chk",chkstr);

         alert("Form submitted!");
         window.location.href="page2.html";


}


document.addEventListener('DOMContentLoaded',function(){
 
    let submitBtn=document.getElementById('submit');
    submitBtn.addEventListener('click',display);


    let moveBtn=document.getElementById('move');
    moveBtn.addEventListener('click',nxtpage);
});


