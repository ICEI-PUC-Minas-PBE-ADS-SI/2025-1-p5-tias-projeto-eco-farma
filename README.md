# Projeto Eco Farma ♻️💚

`CURSO: Sistemas de Informação`

`DISCIPLINA: Trabalho Interdisciplinar Aplicações para Sustentabilidade`

`1º semestre/2025`

O projeto surgiu com o objetivo de melhorar o descarte de blisters, popularmente conhecidos como cartelas de alumínio que armazenam cápsulas de remédios. Para incentivar a reciclagem adequada desse material, criamos um sistema de troca: os consumidores podem descartar os blisters em farmácias cadastradas em nosso site e, em troca, recebem descontos nas compras.

Além disso, promovemos uma entrega ecológica para as farmácias participantes, utilizando ciclistas cadastrados em nossa plataforma para realizar o delivery de forma sustentável. Dessa maneira, unimos reciclagem e mobilidade consciente para reduzir impactos ambientais e incentivar práticas mais sustentáveis.

## Integrantes

* Bianca Marques Teixeira
* Camila de Paula Rodrigues
* Letícia Rodrigues Batista
* Thiago Lacerda Santos Barbosa
* Victoria Gonçalves da Silva
* Walisson Ribeiro da Silva

## Professor

* Amália Soares Vieira de Vasconcelos

# Instruções de Utilização

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
git clone https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-projeto-eco-farma/tree/eco_farma_1.0.0
```

- **Abrindo o código:**  
Abra a pasta do projeto utilizando um editor de código de sua preferência, como o [Visual Studio Code](https://code.visualstudio.com/).  
No VSCode, basta clicar em "File" > "Open Folder" e selecionar a pasta do seu projeto.

### 3. Instalando o Banco

Abra o PgAdmin4 e Crie um servidor com o nome de sua preferência. Em "Connection":
- _Host name_: localhost;
- _Port_: 5432;
- _Username_: postgres 
- _Senha_: "Secreta1234".

Após isso, ao configurar o servidor, em "Database" > Create > database, crie o banco com o nome "ecofarma_db".

No terminal do seu computador coloque 
```bash
psql "host=localhost port=5432 dbname=ecofarma_db user=postgres password=Secreta1234" -f C:\Local da pasta criada\2025-1-p5-tias-projeto-eco-farma-eco_farma_1.0.0\src\db\backup_db.dump
```

**Ele irá pedir a senha do seu banco = Secreta1234**

### 4. Executando a aplicação API

Para a API funcionar pode usar o editor Visual Studio 2022 [Visual Studio 2022](https://visualstudio.microsoft.com/pt-br/downloads/?cid=learn-onpage-download-cta)

Abra o executável que se encontra em:
_"Nome do Projeto" > 2025-1-p5-tias-projeto-eco-farma > src > back > eco_farma_API > eco_farma_API.sln_

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



# Documentação

<ol>
<li><a href="docs/01-Contexto.md"> Documentação de contexto</a></li>
<li><a href="docs/02-Especificacao.md"> Especificação do projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Modelagem-processos-negocio.md"> Modelagem dos processos de negócios</a></li>
<li><a href="docs/05-Projeto-interface.md"> Projeto de interface</a></li>
<li><a href="docs/06-Template-padrao.md"> Template padrão da aplicação</a></li>
<li><a href="docs/07-Arquitetura-solucao.md"> Arquitetura da solução</a></li>
<li><a href="docs/08-Plano-testes-software.md"> Plano de testes de software</a></li>
<li><a href="docs/09-Registro-testes-software.md"> Registro de testes de software</a></li>
<li><a href="docs/10-Plano-testes-usabilidade.md"> Plano de testes de usabilidade</a></li>
<li><a href="docs/11-Registro-testes-usabilidade.md"> Registro de testes de usabilidade</a></li>
<li><a href="docs/12-Conclusao.md"> Conclusão</a></li>
<li><a href="docs/13-Referencias.md"> Referências</a></li>
</ol>

# Código

* <a href="src/README.md">Código</a>

# Apresentação

* <a href="presentation/README.md">Apresentação do projeto</a>
