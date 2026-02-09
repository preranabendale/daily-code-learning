// const http=require('http')
// const app=http.createServer((request,response)=>{
//     response.write("hello world")
//     response.end()
// })
//  const PORT =2000
//  const HOST='127.0.0.1'
// app.listen(PORT,HOST,()=>{
//        console.log(` server is succesfully run...http://${HOST}:${PORT}`)
// })
const http =require('http')
const app=http.createServer((req,res)=>{
    res.write("Hello welcome to nodejs")
    const add=require('./module')
    console.log(add(10,20));
    res.end()
})
const PORT=2000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server ruuning up... http://${HOST}:${PORT}`)
})