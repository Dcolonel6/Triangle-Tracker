
(function(){
    //we will initialise the obj will DOM elements
    let init = {
        input: document.querySelector("input"),
        button: document.querySelector("button"),
        ul: document.querySelector("ul")
    };
    
    init.button.addEventListener("click",getInput);
    function getInput(evt){    
        let dimensions = document.getElementById("dimensions").value,arrayDimensions = [];
        arrayDimensions = dimensions.split(/\s+/).map(Number);
        console.log(compare(...arrayDimensions));    
    };
    init.input.addEventListener("input",(evt)=>{
        console.log(evt.target.value);
        //run validate methods
    })
    





})()