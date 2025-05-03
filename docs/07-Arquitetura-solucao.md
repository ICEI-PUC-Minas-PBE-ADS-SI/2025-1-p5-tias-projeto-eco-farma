# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](images/arquitetura.png)

## Diagrama de classes

O diagrama de classes ilustra graficamente a estrutura do software e como cada uma das classes estará interligada. Essas classes servem de modelo para materializar os objetos que serão executados na memória.

> **Links úteis**:
> - [Diagramas de classes - documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.7.0?topic=diagrams-class)
> - [O que é um diagrama de classe UML?](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

##  Modelo de dados

### Diagrama Entidade-Relacionamento (DER) em notação Peter Chen
Com a notação DER (Diagrama Entidade-Relacionamento), foi feito o relacionamento de todas as tabelas que serão utilizadas no projeto.

![Diagrama sem nome drawio (1)](https://github.com/user-attachments/assets/103afb94-2243-4dcd-843c-3cfa076e131c)

### Diagrama Entidade-Relacionamento (DER) em notação Pé de Galinha
 (FOTO)
 
#### Relacionamentos

- Produto(N) --> Tem --> Promocao(1)
- Produto(1) --> Tem --> Avaliacao_produto(N)
- Pedido(1) --> Conjunto de --> Produto(N)
- Pedido(N) --> Possui --> Entrega(1)
- Farmacia(1) --> Recebe --> Pedido(N)
- Farmacia(1) --> Cria --> Produto(N)
- Farmacia(1) --> Possui --> Login(1)
- Cliente(1) --> Possui --> Login(1)
- Cliente(1) --> Faz --> Avaliacao(1)
- Cliente(1) --> Faz --> Avaliacao_produto(N)
- Cliente(1) --> Faz --> Pedido(N)
- Entregador(1) --> Possui --> Login(1)
- Entregador(1) --> Faz --> Entrega(N)

### Esquema relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Exemplo de um modelo relacional](images/modelo_relacional.png "Exemplo de modelo relacional.")
---

> **Links úteis**:
> - [Criando um modelo relacional - documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/12.0.0?topic=designer-creating-relational-model)

### Modelo físico

```sql
-- CLIENTE
CREATE TABLE Cliente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    sexo VARCHAR(10),
    data_nasc DATE,
    email VARCHAR(100),
    telefone VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    endereco VARCHAR(255),
    cep VARCHAR(10),
    numero VARCHAR(10)
);

-- FARMACIA
CREATE TABLE Farmacia (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    cnpj VARCHAR(18) UNIQUE,
    telefone VARCHAR(20),
    cep VARCHAR(10),
    endereco VARCHAR(255),
    numero VARCHAR(10)
);

-- LOGIN
CREATE TABLE Login (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    papel VARCHAR(20) CHECK (papel IN ('cliente', 'entregador', 'farmacia'))
);

-- ENTREGADOR
CREATE TABLE Entregador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    sexo VARCHAR(10),
    data_nasc DATE,
    email VARCHAR(100),
    telefone VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    endereco VARCHAR(255),
    cep VARCHAR(10),
    numero VARCHAR(10)
);

-- PRODUTO
CREATE TABLE Produto (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    preco NUMERIC(10,2),
    estoque INT,
    anexo TEXT,
    descricao TEXT,
    id_farmacia INT REFERENCES Farmacia(id)
);

-- PROMOCAO
CREATE TABLE Promocao (
    id SERIAL PRIMARY KEY,
    id_produto INT REFERENCES Produto(id),
    preco_promocao NUMERIC(10,2)
);

-- PEDIDO
CREATE TABLE Pedido (
    id SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES Cliente(id),
    id_farmacia INT REFERENCES Farmacia(id),
    id_produto INT REFERENCES Produto(id),
    qtd_produto INT,
    preco_produto NUMERIC(10,2)
);

-- ENTREGA
CREATE TABLE Entrega (
    id SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES Pedido(id),
    id_entregador INT REFERENCES Entregador(id)
);

-- AVALIACAO (GERAL)
CREATE TABLE Avaliacao (
    id SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES Cliente(id),
    autor VARCHAR(100),
    avaliacao TEXT,
    nota INT
);

-- AVALIACAO DE PRODUTO
CREATE TABLE Avaliacao_produto (
    id SERIAL PRIMARY KEY,
    id_produto INT REFERENCES Produto(id),
    id_cliente INT REFERENCES Cliente(id),
    autor VARCHAR(100),
    avaliacao TEXT,
    nota INT,
    anexo TEXT
);

```
Esse script deverá ser incluído em um arquivo .sql na pasta [de scripts SQL](../src/db).


## Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| Front-end      | HTML + CSS + JS + React |
| Back-end       | Node.js         |
| SGBD           | MySQL           |
| Deploy         | Vercel          |


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de software

Conceituar qualidade é uma tarefa complexa, mas ela pode ser vista como um método gerencial que, por meio de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto do desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem atendidas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, esse nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software. Com base nessas características e nas respectivas subcaracterísticas, identifique as subcaracterísticas que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software, considerando alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão à equipe avaliar os objetos de interesse.

> **Links úteis**:
> - [ISO/IEC 25010:2011 - Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE) — System and Software Quality Models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de software - Engenharia de Software](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209)
