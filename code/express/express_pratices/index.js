const express=require('express')
const app=express()

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    res.render('Home.ejs')
})
app.get('/about',(req,res)=>{

    const obj={
        id:1,
        "name":"prerana"
    }
    const about={data:obj}
    res.render('About us',about)
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server up...http://${HOST}:${PORT}`)
})


import React from 'react'

export default function index() {
  return (
    <div>
      
    </div>
  )
}


import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
