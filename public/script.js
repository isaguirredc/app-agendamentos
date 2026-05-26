const form = document.getElementById("form");
const lista = document.getElementById("lista");

async function carregarAgendamentos() {
    try {
        const response = await fetch("/agendamentos");
        const agendamentos = await response.json();

        lista.innerHTML = "";

        agendamentos.forEach((item) => {
            lista.innerHTML += `
                <div class="card">
                    <strong>${item.cliente}</strong><br>
                    Equipamento: ${item.equipamento}<br>
                    Serviço: ${item.servico}<br>
                    Problema: ${item.problema || "Não informado"}<br>
                    Data: ${item.data}<br>
                    Horário: ${item.horario}
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar os agendamentos:", error);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = {
        cliente: document.getElementById("cliente").value,
        problema: document.getElementById("problema").value,
        data: document.getElementById("data").value,
        horario: document.getElementById("horario").value,
        servico: document.getElementById("servico").value,
        equipamento: document.getElementById("equipamento").value
    };

    try {
        const response = await fetch("/agendamentos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        });

        const resultado = await response.json();

        if (!response.ok) {
            alert(resultado.error || "Erro ao realizar agendamento.");
            return; 
        }

        alert("Agendamento realizado com sucesso!");
        form.reset();
        carregarAgendamentos(); 

    } catch (error) {
        alert("Erro de conexão com o servidor.");
    }
});

carregarAgendamentos();