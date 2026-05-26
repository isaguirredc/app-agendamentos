const fs = require('fs');
const path = require('path');
const eventBus = require("../../events/eventBus");

const filePath = path.join(__dirname, 'agendamentos.json');

function lerArquivo() {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            return [];
        }
        const dados = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(dados || '[]');
    } catch (error) {
        console.error("Erro ao ler o arquivo de agendamentos:", error);
        return [];
    }
}

function criarAgendamento(dados) {
    const agendamentos = lerArquivo();

    const horaParte = parseInt(dados.horario.split(":")[0], 10);
    const horarioArredondado = `${horaParte}:00`;
    dados.horario = horarioArredondado;

    const anoAgendamento = new Date(dados.data).getUTCFullYear();
    if (anoAgendamento < 2026) {
        throw new Error("Agendamentos permitidos a partir de 2026.");
    }

    if (horaParte < 8 || horaParte >= 18) {
        throw new Error("Agendamentos permitidos apenas em horário comercial (das 08:00 às 18:00).");
    }

    const conflito = agendamentos.find(item => 
        item.data === dados.data && 
        item.horario === dados.horario
    );

    if (conflito) {
        throw new Error(`O horário das ${horarioArredondado} já está preenchido para este dia.`);
    }

    const novoAgendamento = {
        id: agendamentos.length + 1,
        ...dados,
    };

    agendamentos.push(novoAgendamento);

    fs.writeFileSync(filePath, JSON.stringify(agendamentos, null, 2));

    eventBus.emit("agendamentoCriado", novoAgendamento);

    return novoAgendamento;
}

function listarAgendamentos() {
    return lerArquivo();
}

module.exports = {
    criarAgendamento,
    listarAgendamentos,
};