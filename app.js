var inputtxt = document.querySelector("#text-input");
var outputtxt = document.querySelector("#text-output");
var translate_button = document.querySelector("#btn-translate");
var apiUrl = "https://api.funtranslations.com/translate/pirate.json";

function clickHandler(){
    var inputValue = inputtxt.value;
    console.log(inputValue);
    fetch(appendedUrl(inputValue)).then(response=>response.json()).then(json=>{
        outputtxt.innerHTML = json.contents.translated;
    }
      ).catch(errorHandling=>{
          alert("error occured in fetched call");
      });
};
function appendedUrl(inputValue){
    return apiUrl+"?text="+inputValue;
}
translate_button.addEventListener("click",clickHandler);
