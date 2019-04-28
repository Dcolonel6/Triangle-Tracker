
(function(){
    'use strict';
    //we will initialise the obj will DOM elements
    let init = {
        input: document.querySelector("input"),
        button: document.querySelector("button"),
        ul: document.querySelector("ul"),
        form: document.querySelector(".form-horizontal"),
        feedback: document.querySelector(".feedback"),
        results: document.querySelector("#results")
    }
    ,bindSubmitHandler;
    
   /*** event handler for submit
     * @params: type object, 
     * return value :none
     */
    function submitHandler(evt){        
        evt.preventDefault();
        evt.stopPropagation();
        this.classList.add('was-validated');
        
        if(this.checkValidity() === false){  
            //show error message and disable button 
            
            if(init.feedback.classList.contains("hide")){
                init.feedback.classList.remove("hide");

            }          
            else if(!init.button.classList.contains("disabled")){
                init.button.classList.add("disabled");

            } 
            init.results.classList.add("hide");
            //init.results.innerText = "";
        }
        else{            
            //compare triangles            
            updateDom(init.results,getInput());
            
        }
        init.input.value ="";
    };
    
    bindSubmitHandler = submitHandler.bind(init.form);

    /***
     * function that will get value from input     
     * @params: type none, 
     * return value :string
     */
    
    function getInput(){    
        let dimensions      = init.input.value,
            arrayDimensions = [];
            arrayDimensions = dimensions.split(/\s+/).map(Number);
            console.log(dimensions);
            
        return compare(...arrayDimensions);    
    };

    
    /***
     * function that will compare values and determine what type 
     * or if its a triangle
     * @params: type number, 
     * return value :string
     */
    function compare(d1,d2,d3){
        let triangle = new Triangle(d1,d2,d3);
          
        
        if(triangle.isTriangle()){
                //find out what type
                
            if(triangle.isEquilateral()){
                return "This is an <em>Equilateral Triangle</em>";
            }
            else if (triangle.isIsosceles()){
                return "This is a <em>Isosceles Triangle</em>";
            }
            else {
                return "This is a <em>Scalene Triangle</em>";
            }
        }
        else{
            return "This is <strong>NOT</strong> A triangle";
        }
    };
    /***
     * function when given a string checks against our regex 
     * @params: type string, 
     * return value :boolean
     */
    function checkInput(input){
        
        return /\d+\s+\d+\s+\d+/.test(input);
    }

    /**
     * function updateDom - updates the dom given
     * @params: object( the dom elemnt) and string
     * return type none
    */
    function updateDom(elementObj,updateText){
        init.results.classList.remove("hide");
        if(updateText === "This is not A triangle"){
            if(init.results.classList.contains("alert-info")){
                init.results.classList.remove("alert-info");
                init.results.classList.add("alert-warning")
            }
        }
        else{
            if(init.results.classList.contains("alert-warning")){
                init.results.classList.remove("alert-warning");
                init.results.classList.add("alert-info");
            }
        }
        elementObj.innerText = updateText;
    };
    init.input.addEventListener("input",(evt)=>{
        //check if input is correct then hide error message and enable button
        //debugger;
        if(checkInput(evt.target.value)){            
            // add hide, enable btn
            if(!init.feedback.classList.contains("hide")){
                init.feedback.classList.add("hide");
                init.button.classList.remove("disable");
            }        
              
        }
        else{
            //invalid
            if(init.feedback.classList.contains("hide") || init.button.classList.contains("disable")){
                init.feedback.classList.remove("hide");
                init.button.classList.add("disable");
            } 
            init.results.classList.add("hide");
            //init.results.innerText = "";
            
        }     
        
     });


    
    

})()