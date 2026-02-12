const express=require('express')
const app=express()


app.use(express.static('public/'))


app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/contact',(req,res)=>{

    const obj={
        name :"prerana Bendale",
        email : "prerana@123@gmail.com",
        phone : "1023456497"
    }
    const contact ={data:obj}
    res.render('contact.ejs',contact)
})

app.get('/portfolio',(req,res)=>{
    res.render('portfolio.ejs')
})

app.get('/skills', (req,res) => {
    const skills = ["HTML","CSS","JavaScript","React","Node.js"]
    res.render('skills.ejs', { skills: skills })
})
app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running ... on http://${HOST}:${PORT}`)
})