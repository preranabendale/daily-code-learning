const http=reuire('http')
const app=http.createserver((req,res)=>{
       res.writehead(200,{'content-text':'text/html'})
})
const PORT=3000
const HOST='127'