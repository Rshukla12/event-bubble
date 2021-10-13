class Rectangle {
    constructor(...edges){
        this.x = edges[0];
        if ( edges.length == 2 ){
            this.y = edges[1];
        } else {
            this.y = this.x;
        }
    }

    getArea(){
        return ( this.x * this.y );
    }
}

class Square extends Rectangle {
} 


// testing
const s = new Rectangle(10, 5);
const a = new Square(5);
console.log(s.getArea(), a.getArea()) // 50 25