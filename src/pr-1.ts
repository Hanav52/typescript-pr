    let a = [1,2];
    let b : string[] = ["li", "1"];
    let c : boolean[] = [true];
// objesct의 타입을 명시적으로 정해주는 방법 3가지
    type Age = number;
    type Name = string;
    type Player = {
        readonly name : Name,
        age? : Age
    }

    const Nico : Player = {
        name: "nico"
    }

    const lynn : Player = {
        name:"lynn",
        age:12
    }
    function playerMaker(name:string) : Player{
        return {
            name:name,
        }
    }
    const playerMaker1 = (name:string) : Player => ({name})
    const nico = playerMaker("nuco")
    nico.age=12
















export {}
