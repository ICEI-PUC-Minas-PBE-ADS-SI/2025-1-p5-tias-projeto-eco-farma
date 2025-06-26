# Código do projeto



[Código do front-end](../src/front) -- repositório do código do front-end

[Código do back-end](../src/back)  -- repositório do código do back-end

[Scripts SQL](../src/db)  -- repositório dos scripts SQL


## Instalação do Site

## Como instalar e executar a aplicação

### 1. Pré-requisitos

- **PostgreSQL:**  
PostGreSQL 17 esteja instalado em seu computador.  
Faça o download em: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

- **Extensões recomendadas (opcional):**  
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (para ajudar na checagem de código)  
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (para formatação automática de código)  
  - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (para rodar aplicações localmente com recarga automática)

### 2. Como obter o código do projeto

- **Clonando o repositório:**  
Abra o terminal e clone o repositório do seu projeto com o comando:  
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

- **Abrindo o código:**  
Abra a pasta do projeto utilizando um editor de código de sua preferência, como o [Visual Studio Code](https://code.visualstudio.com/).  
No VSCode, basta clicar em "File" > "Open Folder" e selecionar a pasta do seu projeto.

### 3. Instalando o Banco

Abra o PgAdmin4 e Crie um servidor com o nome de sua preferência. Em "Connection" em _Host name_ coloque localhost; Em _Port_ coloque 5432; _Username_: postgres e _Senha_: "Secreta1234".

Após isso, ao configurar o servidor, em "Database" > Create > database, crie o banco com o nome "ecofarma_db".

No terminal do seu computador coloque psql "host=localhost port=5432 dbname=ecofarma_db user=postgres password=Secreta1234" -f C:\Local da pasta criada\2025-1-p5-tias-projeto-eco-farma-eco_farma_1.0.0\src\db\backup_db.dump

**Ele irá pedir a senha do seu banco - Secreta1234**

### 4. Executando a aplicação API

Para a API funcionar pode usar o editor Visual Studio 2022 [https://visualstudio.microsoft.com/pt-br/downloads/?cid=learn-onpage-download-cta](https://visualstudio.microsoft.com/pt-br/downloads/?cid=learn-onpage-download-cta)

Abra o executável que se encontra em _"Nome do Projeto" > 2025-1-p5-tias-projeto-eco-farma > src > back > eco_farma_API > eco_farma_API.sln_

- **Abrindo o código:**  
Selecione o projeto com o botão direito e abra o terminal, após isso digite **dotnet ef update database**;
Selecione a opção do executar para "HTTP" ;
Deixe Rodando enquanto executa o front.

### 5. Acessando a aplicação

Abra seu navegador e acesse o seguinte link:  
[https://eco-farma.vercel.app/](https://eco-farma.vercel.app/)

*Se estiver rodando localmente, o endereço geralmente será:*  
http://localhost:5050

---

## Login de teste

- **Usuário:** admin@gmail.com
- **Senha:** Secreta1234



## Histórico de versões

### [0.0.0] - 07/06/2025
#### Criação das branchs
- Foi feita a divisão da versão dev e a versão testada, ou 1.0.0
  
### [dev] - 08/06/2025
#### Documentação da API e Banco de Dados
- Mudança dos itens do main para a branch nova

### [dev] - 08/06/2025
#### Ajuste de versões
- Troca de itens do Main para a versão Dev

### [dev] - 08/06/2025
#### Inclusão do Front e scripts do banco de dados
- Nessa branch foi decidido que na Sprint 4 será deixada na Dev por motivos de não ter feito testes finais

### [main] - 08/06/2025
#### Ajuste no Main 
- Ajuste no main para ter somente a documentação - não incluir código

### [1.0.0] - 23/06/2025
#### Correções de código
- Correções no código nas paginas principais

### [1.0.0] - 25/06/2025
#### Alteração da API 
- Insersão da API nova - agora no servidor da Azure
 
### [1.0.0] - 25/06/2025
#### Hospedagem
- Hospedagem do site no Vercel, Aplicação Web e Banco no Azure

### [1.0.0] - 26/06/2025
#### Documentações Finais
- Instruções de Uso e Testes

### [1.0.0] - 29/06/2025
#### Finalização
- Finalização do Projeto Eco Farma

