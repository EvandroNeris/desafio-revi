# Projeto Next.js com Prisma e SQLite

Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Veja o arquivo fluxo.md

## Como começar

### 1. Instalar dependências

Antes de rodar o projeto, certifique-se de instalar todas as dependências. No diretório do projeto, execute o seguinte comando:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```
### 2. Configure o banco de dados
Este projeto utiliza o Prisma como ORM e SQLite como banco de dados.

* Após instalar as dependências, crie o arquivo do banco de dados SQLite rodando o seguinte comando:

```bash
npx prisma migrate dev --name init
```

Isso irá aplicar as migrações e gerar o banco de dados na pasta ```prisma/dev.db```.

### 3. Rodar o servidor de desenvolvimento
Após configurar o banco de dados, você pode iniciar o servidor de desenvolvimento:
```bash 
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando ```app/page.tsx```. A página será atualizada automaticamente conforme você edita o arquivo.

### 4. Visualizar o Prisma Studio
Para gerenciar e visualizar os dados no banco de dados SQLite, você pode utilizar o Prisma Studio:

```bash
    npx prisma studio
```

Abra http://localhost:5555 para visualizar o Prisma Studio no navegador.

### Mais informações
Para saber mais sobre o Next.js e o Prisma, confira os seguintes recursos:

* [Documentação do Next.js](https://nextjs.org/docs) - Saiba mais sobre as funcionalidades e API do Next.js.
* [Documentação do Prisma](https://www.prisma.io/docs) - Guia completo de como utilizar o Prisma com diversos bancos de dados, incluindo SQLite.