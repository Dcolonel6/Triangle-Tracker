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