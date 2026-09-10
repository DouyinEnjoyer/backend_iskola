/*
let name:string = "Pepe"

let age:number = 45
let price:number = 12.5
let isActive:boolean = true
let bigNum : bigint = 921313132132131312312131n

let valami : any = "hel"
console.log(valami)
valami = 10
console.log(valami)
valami = true
console.log(valami)
/*
enum Role {
  ADMIN = "Admin",
  USER = "User",
  GUEST = "Guest"
}
const userRole: Role = Role.ADMIN
console.log(userRole)
*/
/*
interface User {
  id:number
  name:string
  email?:string
  isActive:boolean
}

class userService implements User {
  id:number
  name:string
  email?: string
  isActive: boolean
  constructor(id:number, name:string, email:string, isActive: boolean)
  {
    this.id = id
    this.name = name
    this.email = email
    this.isActive = isActive
  }
}

const users: User[] = [{id:1,name:"alice",email:"a",isActive:true}]
*/
/*

const id: symbol = Symbol("id")

let obj = {
  [id]: "a"
}
let obj2 = {
  ["id"]: "a"
}
class O{
  [id](){
    return "osztaly"
  }
}
class Osztaly {
  [fuggv](){
    return "osztaly"
  }
}
let osztaly: any = new Osztaly()
let c = new O()
let osztalynev = c[id]()
console.log(osztalynev)
console.log(obj[id])
console.log(obj2["id"])
*/

let id: number | string
id = 10
id = "abc"

let literal : "bal" | "jobb"
literal = "bal"
literal = "jobb"


type szemely = {
  name:string
}
type dolgozo = {
  dolgozo: number
}

type dolgozoszemel = szemely & dolgozo

const dolgozo1: dolgozoszemel = {
  name: "a",
  dolgozo: 12345
}
console.log(dolgozo1)