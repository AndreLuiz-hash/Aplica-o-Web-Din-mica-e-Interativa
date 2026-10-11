AgroStore --- Aplicação Web Dinâmica e Interativa
> Aplicação web de catálogo e gerenciamento de produtos, desenvolvida
> como projeto acadêmico da disciplina **Desenvolvimento de Aplicações
> Web Dinâmicas e Interativas**.
Aplicação publicada: Pendente de publicação no GitHub Pages.
Atualize este campo com o endereço público após concluir a implantação.
Repositório:
https://github.com/AndreLuiz-hash/Aplica-o-Web-Din-mica-e-Interativa
1. Sobre o projeto
O AgroStore é uma aplicação web desenvolvida com React, TypeScript e
Vite. O objetivo é apresentar um catálogo de produtos e disponibilizar
funcionalidades de consulta e gerenciamento em uma área administrativa.
A aplicação consome a API pública DummyJSON para obter produtos e
realizar operações de autenticação e gerenciamento.
2. Tecnologias utilizadas
React --- construção da interface por componentes.
TypeScript --- tipagem estática.
Vite --- ambiente de desenvolvimento e build.
React Router --- navegação entre páginas e proteção de rotas.
Mantine --- componentes de interface e formulários.
Context API e hooks personalizados --- compartilhamento do
estado de autenticação.
Axios --- comunicação HTTP centralizada.
Zod --- schemas e validação de dados.
Vitest --- testes unitários.
React Testing Library --- suporte para testes de componentes.
Playwright --- testes de ponta a ponta (E2E).
GitHub Actions --- automação de testes e build, após a
configuração do workflow no repositório.
3. Funcionalidades
Consulta e exibição do catálogo de produtos.
Visualização dos detalhes de um produto.
Tela de autenticação.
Estado de autenticação compartilhado por contexto.
Proteção de rotas administrativas.
Cadastro, edição e exclusão de produtos.
Validação de dados do formulário.
Tratamento centralizado de requisições HTTP e erros.
Testes automatizados de schemas e navegação.
> **Limitação da API:** a DummyJSON simula operações de criação,
> atualização e exclusão. Essas alterações não são necessariamente
> persistidas no servidor depois de recarregar a aplicação.
4. API utilizada
API pública: https://dummyjson.com
Método   Endpoint          Finalidade
---
GET      `/products`       Consultar produtos
GET      `/products/:id`   Consultar um produto
POST     `/products/add`   Simular cadastro de produto
PUT      `/products/:id`   Simular atualização de produto
DELETE   `/products/:id`   Simular exclusão de produto
POST     `/auth/login`     Autenticar usuário
5. Requisitos para executar localmente
Node.js compatível com as dependências do projeto.
npm.
Git.
Navegador atualizado.
Instalação
Clone o repositório:
``` bash
git clone https://github.com/AndreLuiz-hash/Aplica-o-Web-Din-mica-e-Interativa.git
```
Entre na pasta criada:
``` bash
cd Aplica-o-Web-Din-mica-e-Interativa
```
Instale as dependências:
``` bash
npm ci
```
Inicie o ambiente de desenvolvimento:
``` bash
npm run dev
```
O Vite mostrará no terminal o endereço local da aplicação, normalmente
`http://localhost:5173`.
6. Scripts disponíveis
Desenvolvimento
``` bash
npm run dev
```
Build de produção
``` bash
npm run build
```
Verificação de código
``` bash
npm run lint
```
Testes unitários
``` bash
npm run test -- --run
```
Testes E2E
Instale o navegador Chromium do Playwright (necessário na primeira
execução):
``` bash
npx playwright install chromium
```
Execute os testes:
``` bash
npm run test:e2e
```
7. Testes automatizados
Os testes unitários atuais verificam o schema de produtos, incluindo a
aceitação de um objeto válido e a rejeição de um preço fornecido como
texto.
Os testes E2E atuais verificam o acesso à página inicial e à página de
produtos por meio do navegador Chromium.
Para executar toda a verificação local antes de enviar alterações ao
repositório:
``` bash
npm run test -- --run
npm run test:e2e
npm run build
```
8. Organização do projeto
A aplicação separa responsabilidades em áreas como:
`src/components` --- componentes reutilizáveis da interface.
`src/pages` --- páginas da aplicação.
`src/services` --- comunicação com a API.
`src/schemas` --- schemas de validação.
`src/types` --- tipos TypeScript.
`src/test` --- configuração de testes.
`e2e` --- testes de ponta a ponta.
`.github/workflows` --- automações do GitHub Actions, caso o
workflow já tenha sido criado.
Os nomes e caminhos podem variar conforme a organização atual do
código-fonte.
9. Integração contínua e publicação
O projeto está preparado para utilizar Git e GitHub para controle de
versão. O workflow de integração contínua deve instalar dependências,
executar testes unitários, executar os testes E2E e gerar o build de
produção.
Antes da entrega, confirme no GitHub que o arquivo
`.github/workflows/ci.yml` foi enviado e que a execução do workflow
terminou com sucesso.
A publicação no GitHub Pages ainda precisa ser configurada e validada.
Como o projeto utiliza React Router, confirme também o funcionamento das
rotas ao abrir diretamente uma URL interna.
URL pública da aplicação: adicionar aqui após a publicação.
10. Checklist de requisitos acadêmicos
Marque cada item como concluído somente depois de conferir a
implementação e a execução:
[x] React com TypeScript e Vite.
[x] Componentes e tipagem de dados.
[x] Hooks de estado e efeitos.
[x] Context API e hook personalizado para autenticação.
[x] React Router, layouts e rotas protegidas.
[x] Interface com Mantine.
[x] Integração com API usando Axios.
[x] Schemas e validação com Zod.
[x] Testes unitários com Vitest.
[x] Dois testes E2E com Playwright.
[x] Build de produção executado localmente.
[ ] Confirmar todos os fluxos de autenticação e administração.
[ ] Confirmar o workflow do GitHub Actions no repositório remoto.
[ ] Publicar no GitHub Pages e adicionar a URL pública.
[ ] Configurar e verificar a proteção da branch principal, se
exigida.
[ ] Conferir o enunciado original para garantir que todos os
requisitos foram atendidos.
11. Uso de inteligência artificial
Ferramentas de inteligência artificial foram utilizadas como apoio
durante o desenvolvimento, incluindo orientação sobre implementação,
configuração do ambiente, criação de testes, análise de erros e
elaboração desta documentação.
O responsável pelo projeto deve revisar e compreender o código e validar
as funcionalidades antes da entrega.
12. Autor
André Luiz
Projeto acadêmico da disciplina Desenvolvimento de Aplicações Web
Dinâmicas e Interativas.