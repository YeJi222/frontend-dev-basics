// node ex10

/**
 * 배열(Array)
 */
console.log("=== 배열생성1: 내장객체(생성자 함수를 사용하는 방법 ======");
var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length); // object true 0

// 생성자 함수의 파라미터가 하나인 경우는 배열의 크기
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof Array, a2.length); // object true 10

// 배열의 크기를 지정하는 것은 아무런 의미가 없다. 동적으로 배열은 늘어 난다.
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
console.log(a2, a2.length); // [ 0, <4 empty items>, 5, <4 empty items>, 10 ] 11

// 생성자 함수의 파라미터가 2개 이상인 경우: 초기값 지정
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3, a3.length); // [ 0, 2, 4, 6, 8 ] 5

console.log("=== 배열생성2: 리터럴을 사용하는 방법 ======");
var a4 = [];
console.log(typeof(a4), a4 instanceof Array, a4.length); // object true 0

var a5 = [10, 'JavaScript', true, undefined, {
    name: '둘리',
    age: 10
}, function() {
    console.log('Hello World');
}];

console.log("=== 배열순회 ======");
for(var i = 0; i < a5.length; i++) {
    console.log(a5[i]);
    // 10
    // JavaScript
    // true
    // undefined
    // { name: '둘리', age: 10 }
    // [Function (anonymous)]
}

a5[5](); // Hello World

console.log("=== array([]) vs object({}) ====");
var a6 = [];
a6[0] = 0;
a6['1'] = 1;
a6.name = '둘리';
a6.age = 10

console.log(a6['0'], a6[1], a6, a6.length); // 0 1 [ 0, 1, name: '둘리', age: 10 ] 2

var o6 = {};
o6.length = 0;

o6[0] = 0;
o6.length = 1;

o6['1'] = 1;
o6.length = 2;

o6.name = '둘리';  // o6['name']
o6.age = 10;

// 0 1 2 { '0': 0, '1': 1, length: 2, name: '둘리', age: 10 }
console.log(o6['0'], o6[1], o6.length, o6);

// for ~ in
console.log("=== for~in: 객체 =======");
for(prop in o6) {
    // 0 : 0
    // 1 : 1
    // length : 2
    // name : 둘리
    // age : 10
    console.log(prop, ':', o6[prop]);
}

console.log("=== for~in: 배열 =======");
for(prop in a6) {
    // 0 : 0
    // 1 : 1
    // name : 둘리
    // age : 10
    console.log(prop, ':', a6[prop]);
}