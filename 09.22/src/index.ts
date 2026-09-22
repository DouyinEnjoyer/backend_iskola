/*

interface IUser  {
    id:number,
    name:string,
    email:string,
    age: number
   

}

const getUser = (): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      setTimeout(() => {
        resolve({id:10,name:"asdsadas",email:"a@mai.com",age:33});
      }, 5000);
    } else {
        reject("Az adata nem kerheto le")
    }
  });
};

const getAdmin = (): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      setTimeout(() => {
        resolve({id:10,name:"admin",email:"a@mai.com",age:33});
      }, 5000);
    } else {
        reject("Az admin adatok nem kerheto le")
    }
  });
};
/*
getUser().then((name) => {
    console.log("Name:",name)
}).catch((error) => {console.error("Error:", error)})
*/
/*
Promise.all([getUser(),getAdmin()]).then(([user,admin]) => {
    console.log("UserAdat: ", user)
    console.log("AdminAdat:", admin)
})

/*
const user = Promise.resolve({id:13,name:"fef",email:"bggg@a.com",age:424})   nem jo vlmiért
Promise.race([user,getAdmin(3000)]).then(leggyorsabb) => {
    console.log("UserAdat: ",leggyorsabb)
})

*/
/*
async function main(): Promise<void> {
    try{
        
        const name:IUser = await getUser();
        
        console.log(name);
    }catch (error) {
        console.error("Error:",error)
    }
}

const getvalami = <T>(data:T): Promise<T> => {
    return new Promise((resolve) => {
        resolve(data)
    })
}

getvalami<number>(42).then((num) => console.log(num.toFixed(2)))
getvalami<string>("hallo").then((text) => console.log(text.length))
//main();
*/

// itt

import { getUsers } from "./functions.ts"


getUsers().then((v)=> console.log(v)).catch((e)=> console.log("hiba"))

try {
    console.log(await getUsers())
}
catch{
    console.log("hibak")
}
