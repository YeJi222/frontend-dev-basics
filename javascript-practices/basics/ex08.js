// node ex08

/**
 * 자바스크립트 객체3: 확장
 */

var o = {
    name: '둘리',
    age: 10
};

var f = function() {
    console.log('hello world');
}

console.log("=== 확장(object 타입) ======");
o.another = {
    name: '마이콜',
    age: 30,
    print: function() {
        console.log(this.name, this.age);
    }
};

/*
{
  name: '둘리',
  age: 10,
  another: { name: '마이콜', age: 30, print: [Function: print] }
}
*/
console.log(o);
o.another.print(); // 마이콜 30

console.log("=== 확장(function 타입) ======");
f.another = {
    name: '마이콜',
    age: 30,
    print: function() {
        console.log(this.name, this.age);
    }
};

/*
[Function: f] {
    another: { name: '마이콜', age: 30, print: [Function: print] }
}
*/
console.log(f);
f.another.print(); // 마이콜 30

console.log("=== 확장(기본타입은 확장되지 않는다.) ======");
var i1 = 10;
var i2 = new Number(10);

console.log(i1, i2, i1 + i2); // 10 [Number: 10] 20

i2.another = {
    name: '마이콜',
    age: 30
};

console.log(i2); // [Number: 10] { another: { name: '마이콜', age: 30 } }

i1.another = {};            // 유사객체로 변환된다: new Number(i1).another = {};
console.log(i1.another);    // 유사객체로 변환된다: console.log(new Number(i1).another), undefined 출력 