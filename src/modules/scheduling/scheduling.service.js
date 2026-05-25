const eventBus = require("../../events/eventBus");

const agendamentos = [];

function criarAgendamento(dados) {
    const novoAgendamento = {
    id: agendamentos.length + 1,
    ...dados,
    };

    agendamentos.push(novoAgendamento);

    eventBus.emit("agendamentoCriado", novoAgendamento);

    return novoAgendamento;
}

function listarAgendamentos() {
    return agendamentos;
}

module.exports = {
    criarAgendamento,
    listarAgendamentos,
};