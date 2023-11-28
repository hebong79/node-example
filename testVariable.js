'use strict';

// 자료형
function TestTypes() {
  var a;
  console.log('a 값은 ' + a); // a 값은 undefined

  // var 는 변수 호이스팅이 가능하다.
  // 변수 호이스팅 :  예외를 받지 않고도, 나중에 선언된 변수를 참조할 수 있다.
  console.log('b 값은 ' + b); // b 값은 undefined
  var b;

  // Error
  console.log('c 값은 ' + c); // Uncaught ReferenceError: c is not defined

  let x;
  console.log('x 값은 ' + x); // x 값은 undefined

  // Error
  // let은 변수호이스팅 사용 불가
  console.log('y 값은 ' + y); // Uncaught ReferenceError: y is not defined
  let y;
}
// NaN 출력 테스트
function TestTypes2() {
  var a;
  var c = a + 2; // NaN으로 평가
  //NaN : 잘못된 입력으로 인해 계산을 할 수 없음을 나타내는 기호
  console.log('c = ' + c);

  let k;
  let res = k + 2; // NaN으로 평가
  console.log('res = ' + res);
}
// var 는 다른 scope 에서도 재선언하면 전체 scope에 영향을 미친다.
function Test_Var() {
  console.log('var Test ---------------------- ');

  var bTest = 15;
  if (bTest > 12) {
    var bTest = 50;
    console.log('bTest 값은 ' + bTest);
  }
  console.log('bTest 값은 ' + bTest);
  // 값 변경 가능
  bTest = 100;
  console.log('bTest 값은 ' + bTest);
}

// let 는 다른 scope안에서 재선언이 가능하다.
function Test_Let() {
  console.log('let Test ---------------------- ');
  let aTest = 15;

  if (aTest > 10) {
    let aTest = 50;
    console.log('aTest = ' + aTest);
  }
  console.log('aTest = ' + aTest);

  // 값 변경 가능
  aTest = 200;
  console.log('aTest = ' + aTest);

  // 다른 scope안에서는 재선언 가능
  let b = 11;
  if (b > 10) {
    let b = 3;
    let d = b + 10;
    console.log('d 값은 ' + d);
  }
}

// const는 상수이므로 값 변경이 불가능하다.
function Test_Const() {
  const a = 30;
  console.log('a = ' + a);

  a = 5; // Error 발생
  console.log('a = ' + a);
}

// 실행부분
//TestTypes();
//TestTypes2();
//Test_Var();
//Test_Let();
//Test_Const();

module.exports = {
  TestTypes,
  TestTypes2,
  Test_Var,
  Test_Let,
  Test_Const,
};
