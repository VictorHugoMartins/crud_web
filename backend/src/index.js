const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// rota indicado no atributo action do formulário

mongoose.connect('mongodb+srv://victor:bacondev@cluster0.tyqwu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(cors()); // pode colocar {origin: 'http://localhost:3000'} pra garantir q é a mesma entrada do frontend
app.use(routes);

//app.get('/users') // p/ acessar localhost:3333

// metodos http
// get está pegando, post está inserindo
// put/update atualiza
// o put é apenas parcial

// query params: usad p/ search por exemplo o no get
// route params: identifica p/ atualizar ou excluir
// body: dados p/ criar ou excluir um registro

app.listen(3333, () =>
    console.log("Servidor rodando na porta 3333!"));