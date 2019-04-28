
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
    };

    
    

})()