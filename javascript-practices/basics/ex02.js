// node ex02

/**
 * 변수와 자료형
 * 
 * [기본타입]
 * - undefined
 * - number
 * - string
 * - boolean
 * 
 * [객체]
 * - object
 *  1. new 생성자함수() 사용해서 생성
 *  2. 리터럴(프로그래밍에서 자료를 표기하는 방식, 데이터 그 자체를 의미, 변수에 넣는 변하지 않는 데이터) 
 *     - 변수를 선언하면서 동시에 값을 지정해주는 방식 
 *     {}, [], // RegExp 정규 표현식
 *     cf) 정규 표현식은 /로 감싸진 패턴을 리터럴로 사용한다 
 *         ex) const regexp1 = /^abc/;  // --> /패턴/
 *             const regexp2 = /^abc/gi; // --> /패턴/플래그
 *  3. null
 * 
 * - function
 *  1. new Function() 사용해서 생성
 *  2. 리터럴
 *     var f = function() { ... }
 *  3. function f() { ... }
 * 
 */

/**
 *  자바스크립트 객체를 분류하는 또 다른 방법
 * 
 *  1. 내장 객체
 *     javascript engine 내부에 미리 내장(정의)되어 있는 객체
 *     - 생성자 함수: Number, Boolean, String, Date, ...
 *     - 일반 함수: parseInt, setTimeout, setInterval
 * 
 *  2. 호스트 객체
 *     javascript 엔진이 embed 되어 있는 호스트 환경에 있는 객체
 *     Brower 호스트: screen, location, navigator, document(DOM), XmlHttpRequest
 *     Node 호스트: http, os, fs, path, process, server, ...
 * 
 *  3. 사용자 객체
 *     javascript 엔진이 실행되면서 생성하는 객체
 */

console.log("=== 기본타입(undefined, number, string, boolean) ===")
// myVariable      // reference error
var u = undefined; // var u; 동일, 자바스크립트는 정의와 선언을 구분하지 않는다. 자동으로 선언되기 때문
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u + ":" + typeof(u)); // undefined
console.log(i + ":" + typeof(i)); // number
console.log(s + ":" + typeof(s)); // string
console.log(b + ":" + typeof(b)); // boolean

console.log("=== 객체타입(object) ======")
var i2 = new Number(10);
var s2 = new String('hello');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var re = new RegExp();
var d = new Date();
var o2 = {};
var a2 = [];
var re2 = /^js$/gi;
var n = null;

// object, true
console.log(i2 + ":" + typeof(i2) + ":" + (i2 instanceof(Number))); 
console.log(s2 + ":" + typeof(s2) + ":" + (s2 instanceof(String))); 
console.log(b2 + ":" + typeof(b2) + ":" + (b2 instanceof(Boolean))); 
console.log(o  + ":" + typeof(o)  + ":" + (o instanceof(Object))); 
console.log(a  + ":" + typeof(a)  + ":" + (a instanceof(Array)));
console.log(d  + ":" + typeof(d)  + ":" + (d instanceof(Date))); 
console.log(a  + ":" + typeof(a)  + ":" + (a instanceof(Array)));
console.log(d  + ":" + typeof(d)  + ":" + (d instanceof(Date)));
console.log(o2  + ":" + typeof(o2)  + ":" + (o2 instanceof(Object)));
console.log(a2  + ":" + typeof(a2)  + ":" + (a2 instanceof(Array)));
console.log(re2 + ":" + typeof(re2)  + ":" + (re2 instanceof(RegExp)));
console.log(n   + ":" + typeof(n));

console.log("=== 객체타입(function) ======");

function f1(a, b) {
    return a + b;    
}

var f2 = function(a, b) {
    return a + b;
}

var f3 = new Function('a', 'b', 'return a+b;');

// function, true
console.log(f1(10, 20) + ":" + typeof(f1)  + ":" + (f1 instanceof(Function)));
console.log(f2(10, 20) + ":" + typeof(f2)  + ":" + (f2 instanceof(Function)));
console.log(f3(10, 20) + ":" + typeof(f3)  + ":" + (f3 instanceof(Function)));

// 유사 객체
console.log("=== 원시 타입도 메소드를 호출 할 수 있다.(유사객체) ===");
// Boolean 객체의 원시값을 반환 
console.log(b2.valueOf()); // true
console.log(b.valueOf()); // console.log(new Boolen(b).valueOf())