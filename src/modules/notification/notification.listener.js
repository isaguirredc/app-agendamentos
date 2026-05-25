const eventBus = require("../../events/eventBus");

eventBus.on("agendamentoCriado", (dados) => {
    console.log("NOVA NOTIFICAÇÃO");
    console.log(`Cliente: ${dados.cliente}`);
    console.log(`Serviço: ${dados.servico}`);
    console.log(`Horário: ${dados.horario}`);
});

console.log("Listener de notificação iniciado");