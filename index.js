const express=require('express')
const app= express()
app.use(express.static('public/'))

app.get('/',(req,res)=>{
    // res.send("<h1>Home page</h1>")
    res.render('home.ejs')

})

app.get('/about',(req,res)=>{
    // res.send("<h1>About us page</h1>")
    const obj={
        "id":1,
        "name":"prerana",
        "email":"prerana@123gmail.com"
    }
    
    // data traversing
    // passing data to ejs file
    // data must be in a  Object while passing
    
    // result acts as enevloper/wrapper
    const result={data:obj}

    res.render('about.ejs',result)
})

//fallback routing
app.use((req,res)=>{
    res.send(`<h1>404 page not found</h1>
        <a href='/'>go to next pages `)
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server runnig up ....http://${HOST}:${PORT}`)
})