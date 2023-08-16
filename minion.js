// var username=prompt("Enter a username ")
// var welcmsg="welcome "+username;

// console.log(welcmsg)

// alert(welcmsg)

// console.log("Hello This is script tag")

var btntranslate = document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input")
var divoutput=document.querySelector("#output")
// console.log(divoutput);
// console.log(btntranslate);
// console.log(txtinput);



btntranslate.addEventListener("click",  clickEventHandler)

function clickEventHandler() {
    // console.log("clicked");
    // console.log("Input ",divoutput.value);
    // divoutput.innerHTML("jbjbsbbs nnss "+"This is output")

    divoutput.innerHTML="absbsb"+txtinput.value;
}   
   

