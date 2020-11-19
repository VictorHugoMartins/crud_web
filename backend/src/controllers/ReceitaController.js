const Receita = require('../models/Receita');

exports.findReceitas = async(req, res) => {
    try{
        const receitas = await Receita.find();
        return res.json(receitas);
    } catch {
        res.status(400).send({ error: 'Receitas não encontradas'});
    }
};

exports.createReceita = async(req, res) => {
    const { name, ingredients, autor, photo } = req.body;
    try {
        await Receita.create({name, ingredients, autor, photo });
        return res.send({ok: 'Receita criada'});
    } catch {
        res.status(404).send({ error: 'Não foi possível cadastrar'});
    }
};

exports.findReceita = async(req, res) => {
    try{
        const receitaId = req.params.id;
        const receita = await Receita.findOne({_id: receitaId}); // retorna o elemento
        if (!receita){
            return res.status(404).send({error: 'Receita não encontrada'});
        }
        return res.json(receita);
    } catch {
        res.status(400).send({ error: 'Receita não encontrada'});
    }
};

exports.updateReceita = async(req, res) => {
    try {
        const { name, ingredients, autor, photo } = req.body;
        const receitaId = req.params.id;
        const verifica = await Receita.findOne({_id: receitaId});
        if (!verifica){
            return res.status(404).send({error: 'Receita não encontrada'});
        }
        await Receita.updateOne({_id: receitaId}, {name, ingredients, autor, photo });
        return res.send({ok: 'Receita atualizada'});
    } catch {
        res.status(404).send({ error: 'Não foi possível atualizar receita'});
    }
}

exports.deleteReceita = async(req, res) => {
    const receitaId = req.params.id;
    try {
        const verifica = await Receita.findOne({_id: receitaId});
        if (!verifica){
            return res.status(404).send({error: 'Receita não encontrada'});
        }
        await Receita.deleteOne({_id: receitaId});
        return res.send({ok: 'Receita deletada'});
    } catch {
        res.status(404).send({ error: 'Não foi possível deletar receita'});
    }
}