/*
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

interface IDolgozo extends IUser{
    munkakor:string
}
const dolgozo: IDolgozo = {
    name: "hallo",
    age: 28,
    alive: true,
    munkakor: "Fejlesztő"
}

console.log(dolgozo)
*/
/*
class User {
    private _name:string
    private _age:number
    private _password:string //csak az osztalyban hasznalhato
    private _role:string // az osztalyban és annak a leszármazott osztalyaiban hasznalhato
    constructor(name:string, age:number, password: string, role: string){
        this._name = name
        this._age = age
        this._password = password
        this._role = role
    }
    getPassword(){
        return this._password
    }
    greet() {
        return `Hello, my name is ${this._name}, ich bin ${this._age} old`
    }
    get role(){
        return this._role
    }
    set role(value:string) {
        this.role = value
    }
    modositas(){

    }
}
/*
class AdminUser extends User {
    constructor(name:string, age:number, password: string) {
        super(name,age,password, "admin")
    }
    
    getRole()
    {
        return this.role
    }
}

*/

/*

const user = new User("aha",4, "a", "user")


//console.log(user.name)
//console.log(user.age)

console.log(user.greet())

*/
//const admin = new AdminUser("Bob",35,"adminpassword")
//console.log(admin.age)
//console.log(admin.getRole())
/*
abstract class Animal{
    move(): void {
        console.log("Moving...")
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!")
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!")
    }
}
const cat = new Cat()
cat.makeSound()
cat.move()
*/
/*
function identitas<T>(arg: T): T {
    return arg
}

const result1 = identitas<string>("Hello")
const result2 = identitas<number>(42)

console.log(result1)
console.log(result2)

function getFirstItem<T>(arr: T[]): T | undefined {
    return arr[0]
}

const numbers = [1,2,3,4,5]
const names = ["lksz","a","b"]
const firstNumber = getFirstItem<number>(numbers)
const firstName = getFirstItem<string>(names)
console.log(firstNumber)
console.log(firstName)
*/

interface IApiResponse<T>{
    status:number
    message?: string
    data: T
}

interface IUser {
    id:string
    title:string
}

const apiResponse: IApiResponse<IUser> = {
    status: 200,
    message: "User fetched successfully",
    data: {
        id: "1",
        title: "a"

    }
}