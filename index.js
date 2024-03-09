const express = require('express')

const app = express()

//middleware integrado
app.use(express.json())

//middleware de app
app.use(function(req, res, next){
    console.log("Data ", new Date())
    next()
})

//middleware de rota
app.get("/", function(req,res){
    console.log("URL", req.url)
    console.log("Metodo",req.method)
    console.log("Cabecalho",req.headers)
    console.log("Parametros",req.params)
    console.log("Corpo",req.body)
    res.status(201).send("Ola")
})

app.post("/", function(req, res){
    console.log(req.body)
    res.json({status: "200", message: "Sucesso"})
})

app.put("/", function(req, res){
    res.status(204).end()
})

app.delete("/", function(req, res){
    throw new Exception()
})

//middleware de erro
app.use(function(erro, req, res, next){
    res.status(400).send("Fudeu!")
})

app.listen(3000, function(){
    console.log("API está ON!")
})
module.exports = app