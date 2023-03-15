import fs from "fs";
import employees from "./Emp.json" assert { type: "json" };
import Project from "./Project.json" assert {type:"json"};
import express from "express";
import cors from "cors";
const server=express();
server.use(cors());
server.use(express.json({extended:true}))
server.get("/Project/:projectid",(req,res)=>{
    const temp =req.params.projectid;
    console.log(req.params)
    res.json(Project[temp]);

    //projectid lakhe etle 2 pass kariye to jeni projectid 2 hoy ee print thay evu nai pan array na 2 number na index ma kayo data che e batave

    //khali temp  lakhse to index 0 thi start thase and temp-1 lakhse to index 1 thi start thase

    //(req,res) is callback function

    // A callback function is a function passed into another function as an argument

    //when sending data, the GET method adds the data to the URL; and the length of a URL is limited (maximum URL length is 2048 characters),Data is visible to everyone in the URL
 
    // console.log((Project));
});

server.get("/employees",(req,res)=>{
    res.json(employees);
    console.log((employees));
});
// server.get("/employees/:empid",(req,res)=>{
//     const temp =req.params.empid;
//     res.json(employees[temp-1]);
//     console.log((employees));
// });

server.get("/employees/:empid",(req,res)=>{
    // The filter() method creates a new array filled with elements that pass a test provided by a function.
const ans=employees.filter((data)=>{
    return data.empid!=req.params.empid;
})
res.json(ans)
console.log(data.empid)
})



server.listen(8002, () => {
    console.log("connected to port 8002");
});
