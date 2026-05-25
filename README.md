# Sistema de Agendamentos API

API REST desenvolvida em Node.js utilizando Express, com foco em organização modular, separação de responsabilidades e aplicação de boas práticas de arquitetura de software.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Express
- Nodemon
- EventEmitter

## Estrutura do projeto

```txt
src/
│
├── events/
│
├── modules/
│   ├── scheduling/
│   ├── notification/
│   └── reports/
│
├── app.js
└── server.js
````

## Funcionalidades

* Criar agendamentos
* Listar agendamentos
* Sistema de notificações desacoplado
* Arquitetura baseada em módulos
* Comunicação orientada a eventos

## Conceitos aplicados

* Separação de responsabilidades
* Arquitetura modular
* Observer Pattern
* Event-Driven Architecture
* Organização em camadas

## Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Executar em modo desenvolvimento

```bash
npm run dev
```

## Rotas da API

### Criar agendamento

```http
POST /agendamentos
```

### Listar agendamentos

```http
GET /agendamentos
```

## Exemplo de requisição

```json
{
  "cliente": "João",
  "veiculo": "Gol",
  "placa": "ABC1234",
  "servico": "Troca de óleo",
  "data": "2026-05-30",
  "horario": "14:00"
}
```

## Objetivo do projeto

O projeto foi desenvolvido com fins acadêmicos para aplicação de conceitos relacionados a design de software, arquitetura, modularização e boas práticas de desenvolvimento backend.