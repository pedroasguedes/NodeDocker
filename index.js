const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port:'6520',
    user: 'root',
    password: '123@senac',
    database: 'bancoloja'
});
conexao.connect((erro)=>{
    if(erro){
        return console.error(`Não conectou -> ${erro}`);
    }
    console.log(`Banco de dados online -> ${conexao.threadID}`);
});

app.get("/usuarios/listar",(req, res) => {
    conexao.query("select * from usuarios",(erro,dados) => {
        
    })
})