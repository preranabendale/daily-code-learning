const express=require('express')
const app=express()

// built in middleware to server static files
app.use(express.static('public/'))

const menu =`
<u1>
    <li><a href='/'>Home</a></li>
    <li><a href='/about'>About us Page</a></li>
    <li><a href='/contact'>Contact us page'</a></li>
</u1>`

app.get('/',(req,res)=>{
    res.send(menu+"<h1>Home Page</h1>")
})

app.get('/about',(req,res)=>{
    // res.send(menu+"<h1>About Page</h1>")

    //Json data render
    const obj={
        id:1,
        name:"prerana",
        Emailid:"prerana@123gmail.com"
    }
    res.send(obj)
})

app.get('/contact',(req,res)=>{
    res.send(menu+`<h1>Contact us page</h1>
        <img src="wallpaper.jpg" alt="wallpaper image">
        
        `)
})
//middleware 
//fallback rounting
app.use((req,res)=>{
    res.send(`
        <h1>404 page not found</h1>
        <a href='/'>Go to home page</a>`
    )
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`Server runing up...http://${HOST}:${PORT}`)
})