 const http=require('http')
 const url=require('url')

 const app=http.createServer((req,res)=>{
     res.write("Welcome to nodejs")
     const urldata=url.parse('https://nodejs.org/en')
     console.log(urldata)
     res.end()
 })
 const PORT=3000
 const HOST='127.0.0.1'
 app.listen(PORT,HOST,()=>{
    console.log(`server up.... http://${HOST}:${PORT}`)
 })