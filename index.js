
var faqs= new Array(5);
function start(){

    for (var i = 0; i <faqs.length ; i++) {
        faqs[i]= document.getElementById("faq"+(i+1));
        // faqs[i].addEventListener("click",()=>
        // {
        //     expandLogic(i);
        // },false);
    }
    faqs[0].addEventListener("click",()=>{expandLogic(1);},false);
    faqs[1].addEventListener("click",()=>{expandLogic(2);},false);
    faqs[2].addEventListener("click",()=>{expandLogic(3);},false);
    faqs[3].addEventListener("click",()=>{expandLogic(4);},false);
    faqs[4].addEventListener("click",()=>{expandLogic(5);},false);
}
// function expand(){
//     // for (var i = 0; i <faqs.length ; i++) {
//     //     if (faqs[i].CLICK==true){
//     //         expandLogic(i);
//     //     }
//     // }
// }
function expandLogic(faqNumber){
    var icon =document.getElementsByClassName("icon");
    if(document.getElementById("a"+faqNumber).style.display==="flex"){
        document.getElementById("q"+faqNumber).style.fontWeight="400";
        document.getElementById("a"+faqNumber).style.display="none";

        icon[faqNumber-1].style.transform="rotate(0deg)";

        //   transform: rotate(180deg);
    }
    else{
        document.getElementById("a"+faqNumber).style.display="flex";
        document.getElementById("q"+faqNumber).style.fontWeight="bold";
        icon[faqNumber-1].style.transform="rotate(180deg)";
    }
}
window.addEventListener("load",start,false);
