'use strict';

// 배열 생성
function TestArray1() {
    const arr1 = new Array(element0, element1, /* … ,*/ elementN);
    const arr2 = Array(element0, element1, /* … ,*/ elementN);
    const arr3 = [element0, element1, /* … ,*/ elementN];
}

// 길이가 0이 아니지만 요소가 없는 배열을 만들려면
function TestArray2() {
    let arrayLength = 3; 
    const arr1 = new Array(arrayLength);

    // ...결과도 위와 같습니다
    const arr2 = Array(arrayLength);

    // 이것 역시 동일합니다
    const arr3 = [];
    arr3.length = arrayLength;

    console.log(`arr1.len = ${arr1.length}, arr3 = ${arr3}`);
}

// 오브젝트를 사용한 배열
function TestArray3() {
    const obj = {};
    // …
    //obj.prop = [element0, element1, /* … ,*/ elementN];
    obj.prop = [2, 5, 10];
    
    // OR
    //const obj2 = { prop: [element0, element1, /* … ,*/ elementN] };
    const obj2 = { prop: [2, 5, 10] };

    console.log("obj = " + obj.prop);
    console.log("obj2 = " + obj2.prop);
}

// 배열 길이 설정
function TestArray4() {
    // 아래 코드는 숫자 42라는 하나의 요소를 가진 배열을 생성합니다.
    const arr1 = [42];

    // 아래 코드는 arr.length가 42이면서 요소가 없는 배열을 생성합니다.
    const arr2 = Array(42);

    // 아래도 동일합니다.
    const arr3 = [];
    arr3.length = 42;

    console.log(`arr1.len = ${arr1.length}, arr3 = ${arr3}`);
}

// Array요소가 무조건 1개 인것을 만들때
function TestArray5() {
    //const arr = Array(9.3); // RangeError: Invalid array length
    const wisenArray = Array.of(9.3); // wisenArray는 오직 하나의 요소 9.3만을 가지고 있습니다.
    console.log("wisenArray = " + wisenArray);
}

// 배열 요소 참조
function TestArray5() {
    const myArray = ["Wind", "Rain", "Fire"];

    const arr = ["one", "two", "three"];
    arr[2]; // three
    arr["length"]; // 3

    console.log("arr[2] = " + arr[2]);
    console.log("arr['length'] = " + arr["length"]);
 }

 // 배열 채우기
 function TestArray6() {
    const emp = [];
    emp[0] = "Casey Jones";
    emp[1] = "Phil Lesh";
    emp[2] = "August West";

    console.log("emp.length = " + emp.length);

    let myVar = "안녕";
    const myArray = new Array("Hello", myVar, 3.14159);
    // OR
    const myArray2 = ["Mango", "Apple", "Orange"];

    console.log("myArray2 = " + myArray2);
}

// 배열 길이 이해
function TestArray7() {

    const dogs = [];
    dogs[30] = ["Dusty"];
    console.log(dogs.length); // 31

    const cats = ["Dusty", "Misty", "Twiggy"];
    console.log(cats.length); // 3

    cats.length = 2;
    console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy 값이 제거되었습니다

    cats.length = 0;
    console.log(cats); // []; cats 배열은 비었습니다

    cats.length = 3;
    console.log(cats); // [ <3 empty items> ]

}
// 반복 처리
function TestArray8() {
    console.log("[ for ]---------------------------");
    //for
    const colors = ["red", "green", "blue"];
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
    console.log("[ for 2]---------------------------");
    // for 2
    for( let color in colors){
        console.log(color);
    }

    console.log("[ forEach ]---------------------------");
    // forEach
    const colors2 = ["red", "green", "blue"];
    colors2.forEach((color) => console.log(color));

    //기타 중요내장 함수
    // concat() 메서드는 두 개의 배열을 합쳐 새로운 배열을 반환합니다.
    // join() 메서드는 배열의 모든 요소를 하나의 문자열로 연결하여 반환합니다.
    // push() 메서드는 하나 혹은 그 이상의 요소를 배열의 마지막에 추가하고 추가된 요소를 포함한 length를 반환합니다.
    // pop() 메서드는 배열의 마지막 요소를 제거하고 그 제거된 요소를 반환합니다.
    // shift() 메서드는 배열의 첫번째 요소를 제거하고 그 제거된 요소를 반환합니다.
    // unshift() 메서드는 하나 혹은 그 이상의 요소를 배열의 앞쪽에 추가하고 추가한 요소를 포함한 길이를 반환합니다.
    // slice() 메서드는 배열의 특정 부분을 추출하여 그 추출된 부분을 포함하는 새로운 배열을 반환합니다.
    // at() 메서드는 배열의 지정된 인덱스에 있는 요소를 반환하거나 인덱스가 범위를 벗어난 경우 undefined을 반환합니다. 
    //      특히 배열의 끝에서 요소에 접근하는 음수 인덱스에 사용됩니다.
    // reverse() 메서드는 배열의 요소를 첫 번째 배열 요소가 마지막이 되고 마지막 요소가 첫 번째가 되는 식으로 배열의 요소를 바꿉니다. 
    //           배열에 대한 참조를 반환합니다.
    // flat() 메서드는 지정된 깊이까지 재귀적으로 연결된 모든 하위 배열 요소가 포함된 새 배열을 반환합니다.
    // sort() 메서드는 배열의 요소를 새로운 배열이 아닌 주어진 배열 내에서 정렬하고 배열에 대한 참조를 반환합니다.
    // forEach() 메서드는 배열의 모든 요소에 대해 반복적으로 주어진 callback 함수를 실행하며 undefined를 반환합니다.
    // indexOf() 메서드는 배열에서 searchElement를 찾아서 첫 번째 일치하는 요소의 인덱스를 반환합니다.
    // lastIndexOf() 메서드는 indexOf메서드와 유사하게 작동하지만 배열의 뒤쪽에서부터 요소를 찾습니다.
    // map() 메서드는 배열의 모든 요소에 대해 callback 함수를 실행하고 이 결과를 새로운 배열에 담아 반환합니다.
    // find() 메서드는 callback이 true를 반환하는 첫 번째 항목을 반환합니다.
    // filter() 메서드는 callback 함수가 true를 반환하는 요소를 새로운 배열에 담아 반환합니다.
    // findLast() 메서드는 callback이 true를 반환하는 마지막 항목을 반환합니다.
    // findIndex() 메서드는 callback이 true를 반환하는 첫 번째 항목의 인덱스를 반환합니다.
    // findLastIndex() 메서드는 callback이 true를 반환하는 마지막 항목의 인덱스를 반환합니다.
}

function TestArray9() {
    let obj = {
        name : '원숭이',
        age : 12,
        favorite: 'banana'
      }
      //객체의 key와 value를 열거해준다. 
      for (let key in obj) {
        console.log( key + ':' + obj[key]);
      }
      console.log('----------------------------');
      // of는 값을 나열할때 사용한다.
      // of는 배열에서만 사용된다. ( 오브젝트에 사용하면 error )
      let arr = Object.values(obj);
      for (let value of arr) {
        console.log(value);
      }
      console.log('----------------------------');

      let arr2 = Object.keys(obj);
      for (let key of arr2) {
        console.log(key);
      }
      console.log('----------------------------');
}

function TestArray10() {

    //1. indexOf : 
    // 배열에서 특정 데이터를 찾고, 검색된 배열의 '첫번째'로 나타나는 위치 index를 리턴한다. 
    // 파라미터에 데이터를 넣어준다. ( 대소문자를 구분한다. )
    var arr = [ 'a', 'b', 'c', 'd' ];
    console.log(arr.indexOf('c')); // 2

    //2. toString : 배열뿐만 아니라 number 타입도 문자열화 시켜준다. 
    var arr2 = [ 1, '2', [ 1, 2, 3 ], { name : 'lee' } ];
    console.log(arr2.toString()); // "1,2,1,2,3,[object Object]"

    //3. push : 배열의 마지막에 새로운 원소를 추가한다.
    //          반환값은 변경된 배열의 길이를 반환 ( push()의 인자로 넣어준 원소 포함 ) 
    var arr3 = new Array( 'a', 'b', 'c', 'd' );
    arr3.push('e');
    console.log(arr3); // [ 'a', 'b', 'c', 'd', 'e' ];
    console.log(arr3.push('e')); // 5

    //4. shift : 배열의 첫 번째 원소 하나를 제거한다. 
    //         제거한 데이터는 해당 원소 타입으로 반환 원본 배열은 제거된 원소를 제외한 나머지가 된다. 넣어줄 인자 x
    var arr4 = [ 'a', 'b', 'c', 'd' ];
    arr4.shift();
    console.log(arr4.shift()); // 'b'
    console.log(arr4); // [ 'c', 'd' ];

    //5. unshift : 열의 첫 번째에 새로운 원소를 추가한다. 
    //             반환값은 변경된 배열의 길이를 반환 ( unshift()의 인자로 넣어준 원소 포함 )   
    var arr5 = new Array( 'a', 'b', 'c', 'd' );
    arr5.unshift('b1');
    console.log(arr5.unshift('a0')); // 6
    console.log(arr5); // [ 'a0', 'b1', 'a', 'b', 'c', 'd' ];

    //6. sort : 본적으로 배열의 원소를 오름차순으로 정렬해준다
    var arr = [ 'f', 4, '라', 2, 'c', '나', [ 1, 5, 3 ] ];
    console.log(arr.sort()); // [ [ 1, 5, 3 ],  2, 4, 'c', 'f', '나', '라' ]; 

    //7. reverse : 배열의 순서를 뒤집는다. 원본 배열도 순서가 뒤집힌다.
    var arr7 = [ 'a', 'b', 'c', 'd' ];
    console.log(arr7.reverse()); // [ 'd', 'c', 'b', 'a' ]

}

function TestArray11() {

    // splice : 배열의 기존 원소를 삭제 또는 교체하거나 새 원소를 추가하여 배열의 내용을 변경한다
    //          start: 시작인덱스
    //          delCunt : 삭제할 갯수 
    //          뒤쪽은 추가할 항목
    var arr = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
    console.log(arr.splice(1,3)); // [ 'b', 'c' 'd' ]
    console.log(arr) // [ 'a', 'e', 'f' ]
    console.log(arr.splice(1,3,'가','나')); // [ 'e', 'f' ]
    console.log(arr) // [ 'a', '가', '나' ]
    var arr1 = [ '가', '나', '다', '라' ];
    console.log(arr1.splice(1,0,'마','바')); // []
    console.log(arr1); // [ '가', '마', '바', '나', '다', '라' ];
}

function TestObject() {
    let obj = {
        name : '홍길동',
        age : 21
      }; // 선언과 동시에 할당
      obj.name = '홍길동';
      obj.age = 21;
      console.log(obj);

      let obj2 = new Object();     // ()안에는 값을 넣는다.  그럼 해당 데이터 타입의 객체가 생성된다
      obj2['name'] = '홍길동';
      obj2['age'] = 21;                 
      console.log(obj2);

      let obj3 = {};
      obj3.name = '홍길동';
      obj3.age = 21;
      console.log(obj3);

      let obj4 = new Object({ name: '홍길동', age: 21});
      console.log(obj4);


      // String 객체가 생성 됨
      let obj5 = new Object('홍길동');
      console.log(obj5);
      //String {'홍길동'}
      //index 0 = '홍', index 1 = '길' index 2 = '동' // 이런경우는 String 객체가 생성되고

    }




// 실행부분
//TestArray3();
//TestArray4();
//TestArray5();
//TestArray6();
//TestArray7();
//TestArray8();
//TestArray9();
//TestArray10();
TestArray11();
//TestObject();

module.exports = {
    TestArray1,
    TestArray2,
    TestArray3,
    TestArray4,
    TestArray5,
    TestArray6,
    TestArray7,
    TestArray8,
    TestArray9,
    TestObject,
};











