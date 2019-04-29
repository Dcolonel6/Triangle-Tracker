
/***
 * This module will contain the triangle class
 */

class Triangle{
     
    constructor(x,y,z){
        this.dimension1 = x;
        this.dimension2 = y;
        this.dimension3 = z;
    }
    /***
     * isTriangle
     * @params: none
     * returns boolean
     */
    isTriangle(){
        
        return this.dimension1 + this.dimension2 > this.dimension3 ? true : false
    }
     /***
     * isIsosceles
     * @params: none
     * returns boolean
     */
    isIsosceles(){
        return (this.dimension1 === this.dimension2)|| (this.dimension3 === this.dimension1) || (this.dimension3 === this.dimension2) ? true : false;
    }
     /***
     * isScalene
     * @params: none
     * returns boolean
     */
    isScalene(){
        return !this.isEquilateral();
    }
    /***
     * isEquilateral
     * @params: none
     * returns boolean
     */

    isEquilateral(){
        return this.dimension1 === this.dimension2 && this.dimension3 === this.dimension1 ? true : false;
    }


 }



