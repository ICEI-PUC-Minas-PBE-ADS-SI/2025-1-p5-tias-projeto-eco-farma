# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](images/arquitetura.png)

## Diagrama de classes

<img src="https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-projeto-eco-farma/blob/main/docs/images/DIAGRAMADECLASSETI%20(2).jpg?raw=true" alt="Diagrama de classes">

##  Modelo de dados

### Diagrama Entidade-Relacionamento (DER) em notação Peter Chen
Com a notação DER (Diagrama Entidade-Relacionamento), foi feito o relacionamento de todas as tabelas que serão utilizadas no projeto.


![Diagrama sem nome drawio (2)](https://github.com/user-attachments/assets/8a674547-c523-4c90-9dfb-505799a211dc)

#### Entidades 

1. Produto
Representa os produtos vendidos pela farmácia.
- Atributos: id, nome, categoria, preco, estoque, anexo, descricao, id_farmacia.


2. Farmacia
Representa uma farmácia cadastrada no sistema.
- Atributos: id, nome, email, cnpj, telefone, cep, endereco, numero.


3. Cliente
Representa um cliente que pode fazer pedidos.
- Atributos: id, nome, sexo, data_nasc, email, telefone, cpf, endereco, cep, numero.


4. Pedido
Representa um pedido feito por um cliente.
- Atributos: id, id_cliente, id_farmacia, id_produto, qtd_produto, preco_produto.


5. Entrega
Representa a entrega de um pedido.
- Atributos: id, id_pedido, id_entregador.


6. Entregador
Representa os entregadores.
- Atributos: id, nome, sexo, data_nasc, email, telefone, cpf, endereco, cep, numero.


7. Promocao
Representa promoções atreladas aos produtos.
- Atributos: id, id_produto, preco_promocao.


8. Avaliacao
Representa a avaliação geral de um cliente.
- Atributos: id, id_cliente, autor, avaliacao, nota.


9. Avaliacao_produto
Representa a avaliação de um produto por um cliente.
- Atributos: id, id_produto, id_cliente, autor, avaliacao, nota, anexo.


10. Usuario
Representa o sistema de autenticação.
- Atributos: id, id_papel, email, senha, papel (cliente, entregador, farmácia).

#### Relacionamentos

- Produto(N) --> Tem --> Promocao(1)
- Produto(1) --> Tem --> Avaliacao_produto(N)
- Pedido(1) --> Conjunto de --> Produto(N)
- Pedido(N) --> Possui --> Entrega(1)
- Farmacia(1) --> Recebe --> Pedido(N)
- Farmacia(1) --> Cria --> Produto(N)
- Farmacia(1) --> Possui --> Usuario(1)
- Cliente(1) --> Possui --> Usuario(1)
- Cliente(1) --> Faz --> Avaliacao(1)
- Cliente(1) --> Faz --> Avaliacao_produto(N)
- Cliente(1) --> Faz --> Pedido(N)
- Entregador(1) --> Possui --> Usuario(1)
- Entregador(1) --> Faz --> Entrega(N)


### Diagrama Entidade-Relacionamento (DER) em notação Pé de Galinha
O diagrama apresentado representa o modelo de dados de um sistema de farmácia online, com funcionalidades como cadastro de usuários, gerenciamento de produtos, pedidos, entregas, promoções e avaliações. 


![Diagrama sem nome1 drawio (1)](https://github.com/user-attachments/assets/6b8ccf24-9e6e-413f-a7a1-d0237b2e9b0e)

 
A entidade Cliente armazena informações pessoais como nome, sexo, data de nascimento, e-mail, telefone, CPF e endereço. O cliente está relacionado ao sistema do Usuario, responsável por armazenar o e-mail, senha e o papel (perfil de acesso), e também pode realizar Pedidos, fazer Avaliações gerais e de produtos (Avaliacao_produto), sendo essas avaliações compostas por autor, texto, nota e anexo.

A entidade Produto contém dados como nome, categoria, preço, estoque, anexo e descrição, e está vinculada a uma Farmácia (que possui informações como nome, e-mail, telefone, CNPJ e endereço). Produtos podem estar associados a Promoções, que especificam um preço promocional, e podem receber avaliações de clientes. Os Pedidos, feitos por clientes, relacionam farmácia, cliente e produto, armazenando também a quantidade e o preço do produto no momento da compra. Vários pedidos podem gerar uma Entrega, que é realizada por um Entregador, cuja estrutura é similar à do cliente (incluindo CPF e endereço), e também possui vínculo com o sistema de usuario.


### Esquema relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 


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

-- USUARIO
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    id_papel INT REFERENCES Farmacia(id);Cliente(id);Entregador(id),
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

Arquivo de script:
[Script Tabela Ecofarma](images/Tables_ecofarma.sql)


## Tecnologias

Nesta etapa do desenvolvimento do projeto ECOFARMA, foram utilizadas as seguintes tecnologias:

PostgreSQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar e organizar as informações do sistema, como usuários, farmácias, entregas e produtos.

GitHub: Plataforma usada para controle de versão do projeto, permitindo colaboração entre os integrantes da equipe e registro.

Figma: Ferramenta utilizada para o design e prototipação das interfaces do sistema, facilitando a visualização e validação da experiência do usuário (UX).


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| Front-end      |  |
| Back-end       |          |
| SGBD           | PostgreSQL           |
| Deploy         |           |
| Controle de versão         |     GitHub      |
| Outras ferramentas         |     Figma	      |

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de software

A qualidade de software é um conceito multifacetado, cuja definição envolve aspectos técnicos, gerenciais e humanos. No âmbito da engenharia de software, qualidade pode ser compreendida como a capacidade de um produto atender, de maneira eficaz e eficiente, às necessidades explícitas e implícitas de seus usuários e demais partes interessadas. Tal qualidade não é alcançada espontaneamente; ela é o resultado de processos bem definidos, estratégias de desenvolvimento contínuo e foco em métricas e requisitos de avaliação.

Para assegurar que a solução digital proposta pelo projeto ECO Farma atenda a esses requisitos, foram adotadas diretrizes da norma ISO/IEC 25010:2011, que define um modelo de qualidade para produtos de software baseado em oito características principais e trinta subcaracterísticas. Este modelo, sucessor da ISO/IEC 9126 (NBR 13596), orienta a avaliação e o aprimoramento da qualidade de sistemas, fornecendo subsídios para decisões técnicas e gerenciais durante o ciclo de vida do software.

| **Subcaracterística**      | **Justificativa**                                                                                                                                             | **Métricas de Avaliação**                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Adequação Funcional**    | Garante que a plataforma contemple funcionalidades como cadastro de usuários, farmácias e ciclistas, além de gestão de pontos de coleta e cupons de desconto. | Percentual de requisitos implementados; índice de satisfação dos usuários em testes funcionais.         |
| **Maturidade**             | Essencial para manter a confiabilidade do sistema, especialmente em funcionalidades críticas como rastreio de entregas ou registro de descartes.              | Taxa de falhas em produção; tempo médio entre falhas (MTBF).                                            |
| **Inteligibilidade**       | O sistema será utilizado por públicos com diferentes níveis de letramento digital, exigindo uma interface intuitiva e compreensível.                          | Tempo médio para concluir tarefas básicas; taxa de abandono por dificuldade de uso.                     |
| **Tempo de Resposta**      | Respostas rápidas em ações como localizar farmácias ou validar cupons são vitais para a experiência do usuário.                                               | Tempo de resposta em milissegundos nas principais interações; desempenho sob carga.                     |
| **Modificabilidade**       | O projeto pode evoluir para novas cidades ou parceiros, exigindo um código com fácil manutenção e extensão.                                                   | Tempo médio para aplicar correções ou adicionar novas funcionalidades; impacto de mudanças no sistema.  |
| **Controle de Acesso**     | Necessário para proteger perfis de consumidores, entregadores e farmácias contra acessos indevidos.                                                           | Número de tentativas de acesso bloqueadas; tempo de resposta a eventos de segurança.                    |
| **Adaptabilidade**         | A plataforma deve operar em diferentes navegadores e dispositivos, inclusive móveis, sem perda de funcionalidade.                                             | Porcentagem de compatibilidade entre navegadores; taxa de erros por dispositivo.                        |
| **Confidencialidade**      | Protege dados sensíveis como localização, histórico de uso e dados pessoais, promovendo a confiança no sistema.                                               | Quantidade de vazamentos; uso de criptografia nos dados armazenados e em trânsito.                      |
| **Interoperabilidade**     | Facilita integrações futuras com APIs de geolocalização, programas de pontos ou gateways de pagamento.                                                        | Número de integrações concluídas com sucesso; tempo médio para integração.                              |
| **Utilização de Recursos** | Para garantir acessibilidade em dispositivos simples, o software deve ser leve e eficiente.                                                                   | Consumo de CPU e memória em operação padrão; tempo de carregamento em dispositivos de baixo desempenho. |
