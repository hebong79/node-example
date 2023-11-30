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
class Animal {
    constructor( name, sound) {
        this.name = name;
        this.sound = sound;
    }

    Print() {
        console.log(`${this.name}는 ${this.sound}`);
    }
}


function TestClass2() {
    const ani = new Animal("호랑이", "어흥");
    ani.Print();
}

// 접근자 private ( # ) , 프로퍼티
// 기본접근자는 public 이다. 
class Rectangle {
    #height = 1;                  //Private 필드
    width = 0;
    constructor(height, width) {
        this.#height = height;
        this.width = width;
    }
    // getter
    get area() {
        return this.calcArea();
    }
    Height() {
        return this.#height;
    }

     // method
     calcArea() {
        return this.#height * this.width;
    }
}

function TestClass3() {
    const square = new Rectangle(10, 10);
    console.log(square.calcArea()); // 100
    console.log(square.area); // 100
    console.log(square.height); // undefined
    console.log(square.Height()); // 10

}



//TestClass1();
TestClass2();
//TestClass3();


module.exports = {
    Person,
    Animal,
    Rectangle,
    TestClass1,
    TestClass2,
    TestClass3,
};