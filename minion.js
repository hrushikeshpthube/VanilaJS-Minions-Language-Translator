// var username=prompt("Enter a username ")
// var welcmsg="welcome "+username;

// console.log(welcmsg)

// alert(welcmsg)

// console.log("Hello This is script tag")

var btntranslate = document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input")
console.log(btntranslate);
console.log(txtinput);


btntranslate.addEventListener("click",  clickEventHandler)

function clickEventHandler() {
    console.log("clicked");
    console.log("Input ",txtinput.value);
}
   

