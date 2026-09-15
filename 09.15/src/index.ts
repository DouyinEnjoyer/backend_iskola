function kiir(uzenet:string): void {
    console.log(uzenet)
}

function ujFelhasznalo(neve: string, eletkor:number):void {
    console.log({neve,eletkor})
}


function udvozol(neve:string = "Vendég", megszolitas?:string): string {
    if(megszolitas)
    {
        return `Szia ${megszolitas} ${neve}`
    }
    return `Szia ${neve}`
}

console.log(udvozol("original gangster"))
console.log(udvozol(undefined, "Dr."))


const osszeg = (a:number, b:number):number => {
    return a+b
}
const osszeg2 = (a:number, b:number):number =>  a+b

console.log(osszeg(5,10))
console.log(osszeg2(5,10))

type User = {name:string, age:number, alive:boolean}

interface IUser {
    name:string, age:number, alive:boolean
}

const user: IUser = {
    name: "John",
    age: 30,
    alive: true
}

const value : unknown = "viszlát"

const strValue : string = value as string // nem alakitja át striggé pl ha szám

