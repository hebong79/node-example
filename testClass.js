"use strict"



// 함수형 클래스
function Person(name, age) {
    this.name = name,
    this.age = age  
    
    // get 프로퍼티
    this.getName = function() {
        return this.name;
    }

    // set 프로퍼티
    this.setName = function(name) {
        this.name = name;
    }

}

function TestClass1() {

   let kim = new Person("김개똥", 20); 
   console.log( kim.name, kim.age); 

   kim.name = "홍길동";
   console.log( kim.name, kim.age); 

   kim.setName("고릴라");
   console.log( kim.getName(), kim.age); 
}


// ES6 타입 클래스

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // getter
    get area() {
        return this.calcArea();
    }

     // method
     calcArea() {
        return this.height * this.width;
    }
}

function TestClass2() {
    const square = new Rectangle(10, 10);
    console.log(square.calcArea()); // 100
    console.log(square.area); // 100

}


//TestClass1();
TestClass2();


module.exports = {
    Person,
    Rectangle,
    TestClass1,
    TestClass2,
};