/*

interface IApiResponse<T> {
  status: number;
  message?: string;
  data: T;
}

interface IUser {
  id: string;
  title: string | null;
  email: string;
}
  */
/*
const apiResponse: IApiResponse<IUser> = {
    status: 200,
    message: "User fetched successfully",
    data: {
        id: "1",
        title: "CEO"
        email: "a@gmail.com"
    }
}
*/
/*
const updateUser : Partial<IUser> = {
    title: "COO", email: "b@gmail.com"}

console.log(updateUser)
*/
/*
const updateUser : Required<IUser> = {
    id: "2", title: "COO", email: "b@gmail.com"}

console.log(updateUser)

*/
/*
const updateUser : Pick<IUser, "id" | "title"> = {
    id: "2", title: "COO"}

console.log(updateUser)
*/
/*
const updateUser : Omit<IUser, "id" | "title"> = {
     email: "b@gmail.com"}

console.log(updateUser)
*/
/*
const updateUser : Readonly<IUser> = {
    id: "2", title: "COO", email: "b@gmail.com"}

//console.log(updateUser)
*/
/*
const updateUser: IUser = {
    id: "2",
    title: "COO",
    email: "b@gmail.com",
};

//console.log(updateUser)
type Userkey = keyof IUser;

const field = "name";
const key = field as Userkey;
console.log(updateUser[key]);

const kocka = { a: 10, b: 20 };

type Kocka = typeof kocka;
updateUser.title = null;
if (updateUser.title !== null) {
    console.log(updateUser.title.toUpperCase);
}
else {console.log(updateUser.title)}

const name = updateUser?.email ?? "Unknown email"
*/

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
async function main(): Promise<void> {
    try{
        
        const name:IUser = await getUser();
        
        console.log(name);
    }catch (error) {
        console.error("Error:",error)
    }
}

//main();



