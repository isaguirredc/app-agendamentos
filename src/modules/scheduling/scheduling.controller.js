const service = require("./scheduling.service");

function criar(req, res) {
    const agendamento = service.criarAgendamento(req.body);

    res.status(201).json(agendamento);
}

function listar(req, res) {
    const agendamentos = service.listarAgendamentos();

    res.json(agendamentos);
}

module.exports = {
    criar,
    listar,
};