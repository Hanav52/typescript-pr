// void는 아무것도 return하지 않는 함수를 대상으로 사용한다.
// 값을 반환하지 않는 함수의 반환 값을 나타낸다.
function hello() {
    console.log('x')
}
// never는 함수가 절대 return하지 않을 때 발생한다.
// 이는 함수가 예외를 throw하거나 프로그램 실행을 종료함을 의미합니다.
function helllo() : never{
    return "x"
}
//unknown타입은 모든 값을 나타냅니다. 이것은 any타입과 비슷하지만 any보다 unknown이 더 안합니다. 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않다.









export {}