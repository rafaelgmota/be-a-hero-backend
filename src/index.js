const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//Informando que todas as requisições tratarão json
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Entidades:
 * 
 * ONG
 * Caso (incident)
 * 
 * Funcionalidades:
 * 
 * Login (ONG)
 * Logout (ONG)
 * Cadastro (ONG) 
 * Cadastrar novo caso (ONG)
 * Listar casos (ONG)
 * Deletar caso (ONG)
 * Listar todos os casos
 * Entrar em contato com a ONG (whatsapp e email)
 * 
 */
