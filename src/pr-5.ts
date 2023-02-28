//오버로딩 overloading
type Add = (a: number, b: number) => number
type Add1 = { // 위와 같다
    (a: number, b: number) : number
    (a: number, b: string) : number
}
const add: Add1 = (a,b) => {
    if(typeof b === "string") return a
    return a + b
}







export {}