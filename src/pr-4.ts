type Add = (a:number, b: number) => number;
// 타입을 만들고 설정 가능

const add : Add = (a, b) => a+b
// 위와 같다
// function add(a,b) {
//     return(a+b)
// }
const add1 : Add = (a, b) => {a+b}
// 위와 같다
// function add(a,b) {
//     a+b
// } 반환값이 없는 void로 처리된다.


// call signatures라 한다.






export {}