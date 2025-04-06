# 🛠️ Backend Proxy - FranQ Test

Este é um pequeno servidor **Express** que atua como um **proxy** para contornar erros de **CORS** durante requisições da aplicação frontend.

---

## 📦 Dependências

- [`express`](https://www.npmjs.com/package/express) – Servidor HTTP
- [`cors`](https://www.npmjs.com/package/cors) – Middleware para habilitar CORS
- [`node-fetch`](https://www.npmjs.com/package/node-fetch) – Para fazer requisições HTTP externas

---

## 🚀 Como rodar localmente

1. Clone o repositório (ou vá até a pasta `backend` se estiver no mesmo projeto):

```bash
git clone https://github.com/leoccomp/FranQ-Test-Backend.git
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node server.js
```

> O servidor será iniciado em: [http://localhost:3001](http://localhost:3001)

---

## 📡 Endpoint disponível

### `GET /proxy`

Exemplo de requisição:

```bash
http://localhost:3001/api/finance
```

- O backend vai buscar os dados da URL `https://api.hgbrasil.com/finance` e retornar como resposta, contornando o CORS.

---
