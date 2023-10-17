/**
 * 변수와 자료형
 * 
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 * 
 * 객체
 * - object
 * - function
 * 
 * 
 */

console.log("=== 기본타입(undefined, number, string, boolean) ===")
// myVariable // reference error

var u = undefined; // var u; 동일, 자바스크립트는 정의와 선언을 구분하지 않는다. 선언을 해놓으면 undefined 대입이 되니까
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("=== 객체타입(object) ===")
var i2 = new Number(10);
var s2 = new String('hello');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

var f = function() {
    console.log("일반 함수");
}

var o = new F(10);
console.log(o.a, typeof(o));

console.log("=== 객체타입(function) ===")