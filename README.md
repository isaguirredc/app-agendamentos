# 🛠️ Sistema de Agendamento - Oficina de Informática

Sistema Full Stack modular desenvolvido em Node.js e JavaScript vanilla para gerenciamento de ordens de serviço e agendamentos de uma assistência técnica de TI.

---

## 🚀 Funcionalidades Atuais

* **Cadastro de Agendamentos:** Registro de clientes, tipo de equipamento (Notebook/Desktop), serviço desejado e descrição opcional do problema.
* **Persistência de Dados:** Armazenamento resiliente e local utilizando banco de dados em arquivo JSON (`agendamentos.json`).
* **Arquitetura Baseada em Eventos:** Uso de um `EventBus` nativo para disparar listeners de notificação em tempo real a cada novo agendamento criado.
* **Validações de Regras de Negócio (Backend):**
  * **Bloqueio por Horário:** Restrição de agendamentos de 1 em 1 hora (padrão de hora cheia).
  * **Prevenção de Conflitos:** Sistema impede dois agendamentos no mesmo dia e mesmo horário.
  * **Horário Comercial:** Filtro severo que aceita apenas agendamentos das **08:00 às 18:00**.

---

## 📂 Estrutura Modular do Projeto

```text
app-agendamentos/
├── public/                 # Frontend da aplicação
│   ├── index.html          # Interface com formulário adaptado para TI
│   ├── script.js           # Consumo da API e renderização dos cards
│   └── style.css           # Estilização da página
├── src/                    # Backend da aplicação
│   ├── config/             # Configurações globais
│   ├── events/             # Barramento de eventos (EventBus)
│   ├── modules/            # Módulos encapsulados do sistema
│   │   ├── notification/   # Listeners de notificação em tempo real
│   │   └── scheduling/     # Lógica completa de agendamentos
│   │       ├── agendamentos.json        # Banco de dados local
│   │       ├── scheduling.controller.js # Controle de requisições/respostas
│   │       ├── scheduling.routes.js     # Definição dos endpoints
│   │       └── scheduling.service.js    # Regras de negócio e escrita no JSON
│   ├── app.js              # Inicialização de middlewares do Express
│   └── server.js           # Inicialização do servidor HTTP e Listeners
└── package.json            # Dependências e scripts do projeto