'use strict';

// 함수테스트 --------------------------------------------------------
function updateBrand(obj) {
  // 객체 값의 변화는 함수 외부에서 볼 수 있습니다.
  obj.brand = '쌍용';

  // 매개 변수를 재할당해도 함수 외부의 변수 값에는 영향을 미치지 않습니다.
  obj = null; //객체자체를 바꿔도 외부변수에 영향이 없다..
}

function Test_Function() {
  const car = {
    brand: '현대',
    model: '엑셀',
    year: 1994,
  };

  console.log(car.brand); // 현대

  // 객체 참조를 함수에 전달합니다.
  updateBrand(car);

  // updateBrand의 호출로 car 객체의 값이 변합니다.
  console.log(car.brand); // 쌍용
  console.log(car);
}

//함수 표현 방버 ------------------------------

// 생성자
const multiply = new Function('x', 'y', 'return x * y');

// 선언 ( 디폴트 파라미터 )
function multiply2(x, y = 10) {
  return x * y;
} // No need for semicolon here

// 표현식; 변수에 할당되는 익명 함수입니다.
const multiply3 = function (x, y) {
  return x * y;
};
// 표현식; 고유한 이름을 가집니다.
const multiply4 = function funcName(x, y) {
  return x * y;
};

// 화살표 함수
const multiply5 = (x, y) => x * y;

// 메서드
const multiObj = {
  multiply(x, y) {
    return x * y;
  },
};

console.log('multiply = ', multiply(10, 20));
console.log('multiply6 = ', multiObj.multiply(10, 30));

module.exports = {
  Test_Function,
  multiply,
  multiply2,
  multiply3,
  multiply4,
  multiply5,
  multiObj,
};
