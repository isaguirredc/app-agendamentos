const form = document.getElementById("form");

const lista = document.getElementById("lista");

async function carregarAgendamentos() {
    const response = await fetch("/agendamentos");

    const agendamentos = await response.json();

    lista.innerHTML = "";

    agendamentos.forEach((item) => {
    lista.innerHTML += `
        <div class="card">
        <strong>${item.cliente}</strong><br>
        Veículo: ${item.veiculo}<br>
        Serviço: ${item.servico}<br>
        Data: ${item.data}<br>
        Horário: ${item.horario}
        </div>
    `;
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = {
    cliente: document.getElementById("cliente").value,
    veiculo: document.getElementById("veiculo").value,
    placa: document.getElementById("placa").value,
    servico: document.getElementById("servico").value,
    data: document.getElementById("data").value,
    horario: document.getElementById("horario").value,
    };

    await fetch("/agendamentos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
    });

    form.reset();

    carregarAgendamentos();
});

carregarAgendamentos();