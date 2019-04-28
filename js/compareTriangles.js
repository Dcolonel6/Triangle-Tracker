
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
    function compare(d1,d2,d3){
        let triangle = new Triangle(d1,d2,d3);
          
        
        if(triangle.isTriangle()){
                //find out what type
                
            if(triangle.isEquilateral()){
                return "This is an equilateral triangle";
            }
            else if (triangle.isIsosceles()){
                return "This is a Isosceles";
            }
            else {
                return "This is a Scalene";
            }
        }
        else{
            return "This is not A triangle";
        }
    }





})()