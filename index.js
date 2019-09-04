let express = require('express');
let https= require('https')
let fs = require('fs')
let path = require('path')

let app = express()



app.use('/', (req, res, next)=>{
    console.log(req.originalUrl.slice(-1));
    
    if(req.originalUrl.slice(-1) !== '/'){
        
        next()
    }else{
        res.redirect('/revantarctica.html')
    }
    
})

app.use(express.static(path.join(__dirname, '/web-content')))
// let options = {
//     key: fs.readFileSync(process.env['SERVER_KEY']),
//     cert: fs.readFileSync(process.env['SERVER_CERT']),
//     passphrase: process.env['SERVER_PASS'],
// }




// https.createServer(options,app).listen(9090, ()=>{
//     console.log('App Started on 9090');
    
// })

app.listen(8080, ()=>{
    console.log('Started on 9090 no cert');
    
})

