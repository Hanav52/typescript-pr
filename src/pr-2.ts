const numbers : readonly number[] = [1,2,3,4]
//numbers.push(1) readonly이기 때문에 push기능은 제공하지 않는다.
// readonly 지정한 변수를 변경하지 못하고 읽기만 가능하도록 만든다. 불변성을 가지며 타입스크립트의 보호장치이다.

// Tuple : array를 생성할 수 있게 한다. 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야 한다.
const player: [string, number, boolean] = ["nico", 1, true] // 항상 정해진 갯수의 요소를 가져야 하는 array를 지정할 수 있다는것이다.
// api가 뒷부분만 줄 떄 사용하면 유용
player[0] = 1 // 첫번째 인덱스는 string이여야 한다.
const player: readonly [string, number, boolean] = ["nico", 1, true] // readonly를 붙이면 위와 같이 변경 불가

let a : undefined = undefined
let b : null = null

type Player = {
    age?: number // '?'가 들어가면 선택적이다. 그러므로 number or undefined가 된다.
}

let a = [] // any란 무엇일까? 
// any는 typescript로부터 빠져나오고 싶을 떄 쓰는 타입이다. 타입스크립트의 보호장치를 빠져온다.

const c : any[] = [1,2,3,4]
const d : any = true

c+d

















export {}