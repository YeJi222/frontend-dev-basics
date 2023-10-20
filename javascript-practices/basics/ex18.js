/**
 * 렉시컬 스코프(lexical scope) : 
 * 1. 중첩된 함수 그룹에서 내부 함수가 상위 범위의 변수 및 기타 리소스에 엑세스 할 수 있음을 의미
 * 2. 함수를 어디에 선언했는지에 따라, 상위 스코프가 결정된다
 * 
 * 클로저(Closuer) : 클로저는 함수와 그 함수가 정의되었을 때, 변수 스코프(Lexical Scope) 와의 조합
 * 
 * 1. 자유변수에 닫혀(closed, 엮여) 있는 함수
 * 2. 클로저는 자신이 정의될 때의 scope(렉시컬 스코프)를 기억하고 있다 
 * 3. 클로저는 함수가 자신이 정의되었을 때의 스코프를 기억하여,
 *    자신이 정의된 스코프 밖에서 호출되어도 그 스코프에 접근할 수 있다
 * 
 * 4. 쓰는 이유 : 
 * - 전역 변수 회피
 * - 상태 유지* : useState
 * - 정보 은닉 : useState
 * 
 * 자유변수 : 클로저를 포함하고 있는 외부 함수의 인자, 지역변수
 * - 외부함수가 종료된 후에도 계속 사용 가능
 * - 단, 외부에서 직접 접근은 불가능, 클로저를 통해서만 사용 가능 
 */

/* Lexical Scope */
var f1 = function() {
    const s = "Hello World";
    const inner = function() {
        console.log(s);
    }
    inner();
};

f1();

/* Closure */
const f2 = function() {
    const s = "Hello World";

    const inner = function() {
        console.log(s);
    }

    return inner;
}

const closure = f2();
closure();


function component() {
    var a = 10;   
}