const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const app = express();


//GET POST PUT DELETE //crud

app.use(express.json())
let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/students',(req,res)=>{
    res.send(students)
})


app.post('/students',(req,res)=>{
  console.log(req.headers)
    
    let student ={
        id:students.length+1,
        name:req.body.name,
    }
    students.push(student);
    fs.writeFile('students.json',JSON.stringify(students));
    res.send(student);
  
  
   
  

})
app.listen(3001, async ()=>{
    try{
        const file =  await fs.readFile('students.json','utf-8');
        students = JSON.parse(file);
    }catch{
        console.log(`someting wrong`)
    }
   
    console.log("server listen 3000port")
})
// https://github.com/bazraatamir/sw-920