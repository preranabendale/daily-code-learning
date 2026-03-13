const express=require('express')
const app=express()
app.use(express.static('public/'))
app.get('/',(req,res)=>{
    res.render("home.ejs")
})
app.get('/about',(req,res)=>{
    const obj={
        id:1,
        "name":"prerana",
        "email":"prerana@gmail.com"
    }
    
    
    const skills = ["HTML","CSS","JavaScript","React","Node.js"]
    res.render('about.ejs', { data:obj,skills: skills })
})
app.use((req,res)=>{
    res.render("")
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server running...http://${HOST}:${PORT}`  )
})


// Function Component
function MyComponent() {
  return (
    <div>
      <h1>Hello, I am a Function Component!</h1>
    </div>
  );
}

// OR using Arrow function
const MyComponent2 = () => {
  return <h1>Hello from Arrow Function Component!</h1>;
};


import React, { Component } from "react";

class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I am a Class Component!</h1>
      </div>
    );
  }
}

export default MyClassComponent;
