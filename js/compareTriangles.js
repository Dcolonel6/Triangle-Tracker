
(function(){
    //we will initialise the obj will DOM elements
    let init = {
        input: document.querySelector("input"),
        button: document.querySelector("button"),
        ul: document.querySelector("ul")
    };
    
    init.button.addEventListener("click",getInput);
    /***
     * click handler for button
     */
    function getInput(evt){    
        let dimensions = document.getElementById("dimensions").value,arrayDimensions = [];
        arrayDimensions = dimensions.split(/\s+/).map(Number);
        console.log(compare(...arrayDimensions));    
    };

    init.input.addEventListener("input",(evt)=>{
        console.log(evt.target.value);
        //run validate methods
    })
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
    }
    /*** function that will validate input
     * @params: type string, 
     * return value :boolean
     */
    function validate(input){
        
        return /\d+\s+\d+\s+\d+/.test(input);
    }





})()