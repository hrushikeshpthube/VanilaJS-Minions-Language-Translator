// var username=prompt("Enter a username ")
// var welcmsg="welcome "+username;

// console.log(welcmsg)

// alert(welcmsg)

// console.log("Hello This is script tag")

var btntranslate = document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txtinput")
var divoutput=document.querySelector("#output")
//var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverurl="https://api.funtranslations.com/translate/minion.json";
// console.log(divoutput);
// console.log(btntranslate);
// console.log(txtinput);




function GetTranslationURL(text)
{
    
    return (serverurl+"?text="+text);
}
function errorHandler(error)
{
    console.log("Error occured :"+error);
    alert("Something Wrong with server!!Please try again later !!")
}



function clickEventHandler() {
    // console.log("clicked");
    // console.log("Input ",divoutput.value);
    // divoutput.innerHTML("jbjbsbbs nnss "+"This is output")
    // divoutput.innerHTML="absbsb"+txtinput.value;

    var inputText=txtinput.value; 
    fetch(GetTranslationURL(inputText))
     .then(response=>response.json())
     .then(json=>{

        var outputTranslatedText=json.contents.translated;
        divoutput.innerHTML=outputTranslatedText;
     }    
        )
     .catch(errorHandler)

    }   
   

btntranslate.addEventListener("click",  clickEventHandler)