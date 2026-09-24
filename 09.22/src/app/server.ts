import express  from "express";
import type {Request,Response} from "express";
import data from "./data/data.ts"

//09.24
const app = express()

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.json({
        message: "hello,fut a szerver"
    })
})
app.get("/products",(req:Request,res:Response)=>{
    res.json({
        data
    })
})

app.get("/products-table", (req: Request, res: Response) => {
    let tableHtml = `
        <table border="1" style="border-collapse: collapse; text-align: left; width: 100%;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Név</th>
                    <th>Kategória</th>
                    <th>Márka</th>
                    <th>Ár</th>
                    <th>Készlet</th>
                    <th>Értékelés</th>
                    <th>Státusz</th>
                    <th>Leírás</th>
                    <th>Kép</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.forEach(product => {
        tableHtml += ` <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.brand}</td>
                <td>${product.price} ${product.currency}</td>
                <td>${product.stock} db</td>
                <td>${product.rating} / 5</td>
                <td>${product.active ? "Aktív" : "Inaktív"}</td>
                <td>${product.description}</td>
                <td>${product.image}</td>
            </tr>
        `;
    });

    tableHtml += ` </tbody>
    </table>`;
    
    res.send(tableHtml);
});


app.post("/a",(req:Request,res:Response)=>{
    res.send("szoveg")
})
app.put("/",(req:Request,res:Response)=>{
    res.json({
        message: "Hello, ez egy put"
    })
})
app.delete("/",(req:Request,res:Response)=>{
    res.json({
        message: "Hello, ez egy delete"
    })
})
app.patch("/",(req:Request,res:Response)=>{
    res.json({
        message: "Hello, ez egy patch"
    })
})


app.listen(3000,()=>{
    console.log("fut a server")
})