const Receita = require('../models/Receita');

module.exports = {
    index = async(req, res) => {
        try{
            const receitas = await Receita.find();
            return res.json(receitas);
        } catch {
            res.status(400).send({ error: 'Receitas não encontradas'});
        }
    },

    create = async(req, res) => {
        const { name, ingredients } = req.body;
        try {
            await Receita.create({name, ingredients});
            return res.send({ok: 'Receita criada'});
        } catch {
            res.status(404).send({ error: 'Não foi possível cadastrar'});
        }
    },

    show = async(req, res) => {
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
    },

    update = async(req, res) => {
        try {
            const { name, ingredients } = req.body;
            const receitaId = req.params.id;
            const verifica = await Receita.findOne({_id: receitaId});
            if (!verifica){
                return res.status(404).send({error: 'Receita não encontrada'});
            }
            await Receita.updateOne({_id: receitaId}, {name, ingredients});
            return res.send({ok: 'Receita atualizada'});
        } catch {
            res.status(404).send({ error: 'Não foi possível atualizar receita'});
        }
    },

    destroy = async(req, res) => {
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
}
