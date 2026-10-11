# AgroStore --- Aplicação Web Dinâmica e Interativa

> **Aplicação publicada:**
> https://andreluiz-hash.github.io/Aplica-o-Web-Din-mica-e-Interativa/\
> **Repositório:**
> https://github.com/AndreLuiz-hash/Aplica-o-Web-Din-mica-e-Interativa

## Sobre o projeto

AgroStore é uma aplicação web de catálogo de produtos desenvolvida com
React e TypeScript. Permite navegar pelo catálogo, pesquisar e filtrar
produtos, consultar detalhes, adicionar itens ao carrinho e acessar uma
área administrativa protegida por autenticação.

Os produtos e a autenticação utilizam a API pública
[DummyJSON](https://dummyjson.com/).

## Funcionalidades

-   Listagem de produtos com paginação.
-   Pesquisa de produtos e filtro por categoria.
-   Página de detalhes dos produtos.
-   Carrinho com adição, remoção e ajuste de quantidades e cálculo do
    total.
-   Persistência do carrinho no `localStorage`.
-   Login e logout.
-   Rotas protegidas para a área administrativa.
-   Interface com Mantine.
-   Requisições HTTP centralizadas com Axios.
-   Validação com Zod.
-   Testes com Vitest, React Testing Library e Playwright.
-   Integração contínua e publicação no GitHub Pages por GitHub Actions.

## Tecnologias

React · TypeScript · Vite · Mantine · React Router · Axios · Zod ·
Vitest · React Testing Library · Playwright · GitHub Actions · DummyJSON
API

## Como executar localmente

### Pré-requisitos

-   Node.js (versão 22 recomendada)
-   npm
-   Git

### Instalação

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/AndreLuiz-hash/Aplica-o-Web-Din-mica-e-Interativa.git
    ```

2.  Entre na pasta:

    ``` bash
    cd Aplica-o-Web-Din-mica-e-Interativa
    ```

3.  Instale as dependências:

    ``` bash
    npm ci
    ```

4.  Inicie o servidor:

    ``` bash
    npm run dev
    ```

5.  Abra no navegador o endereço local informado pelo Vite no terminal.

## Comandos úteis

``` bash
# Ambiente de desenvolvimento
npm run dev

# Testes unitários
npm run test -- --run

# Testes end-to-end
npm run test:e2e

# Compilação de produção
npm run build
```

Para executar os testes end-to-end, pode ser necessário instalar os
navegadores do Playwright:

``` bash
npx playwright install
```

## API utilizada

A aplicação utiliza a API pública DummyJSON, incluindo:

-   `GET /products` --- listar produtos.
-   `GET /products/search?q=...` --- pesquisar produtos.
-   `GET /products/category/{category}` --- filtrar por categoria.
-   `GET /products/{id}` --- consultar detalhes de um produto.
-   `POST /auth/login` --- autenticar usuário.

A API é voltada a demonstrações e testes. As operações de catálogo não
representam necessariamente alterações persistentes em um sistema
comercial real.

## Estrutura geral

``` text
src/
├── components/   # Componentes reutilizáveis
├── contexts/     # Contextos de autenticação e carrinho
├── layouts/      # Layouts compartilhados
├── pages/        # Páginas da aplicação
├── services/     # Configuração e chamadas à API
├── test/         # Configuração dos testes
├── types/        # Tipos TypeScript
├── routes.tsx    # Definição das rotas
└── main.tsx      # Entrada da aplicação

.github/
└── workflows/    # CI e publicação no GitHub Pages
```

## Testes e publicação

O workflow de integração contínua executa testes e compilação. Outro
workflow publica a versão de produção no GitHub Pages quando há
atualização na branch `main`.

-   **Site:**
    https://andreluiz-hash.github.io/Aplica-o-Web-Din-mica-e-Interativa/
-   **Código-fonte:**
    https://github.com/AndreLuiz-hash/Aplica-o-Web-Din-mica-e-Interativa

## Observações

-   O carrinho é armazenado no navegador por meio do `localStorage`,
    ficando associado ao navegador e dispositivo utilizados.
-   A autenticação da DummyJSON é demonstrativa e não equivale a um
    sistema de autenticação de produção.
-   O projeto foi desenvolvido para fins acadêmicos e de aprendizagem.

## Uso de ferramentas de IA

Ferramentas de IA foram utilizadas como apoio para compreender
conceitos, investigar problemas, revisar código e elaborar a
documentação. As alterações foram testadas no ambiente do projeto.

------------------------------------------------------------------------

Projeto acadêmico --- AgroStore.
