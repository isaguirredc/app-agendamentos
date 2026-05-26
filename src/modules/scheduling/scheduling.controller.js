const service = require("./scheduling.service");

async function criar(req, res) {
    try {
        const novo = service.criarAgendamento(req.body);
        return res.status(201).json(novo);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

async function listar(req, res) {
    const agendamentos = service.listarAgendamentos();
    return res.json(agendamentos);
}

module.exports = {
    criar,
    listar
};