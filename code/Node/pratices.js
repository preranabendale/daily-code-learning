const http=require('http')
const app=http.createServer((req,res)=>{
    res.write("<h1>Welcome to node</h1>")

    function A()
    {
        console.log("Function A")
    }
    function B()
    {
        console.log("Function B")
    }
    B(A)
    res.end()
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server up...http://${HOST}:${PORT}`)
})

const app ()=>{
    return
}
export app