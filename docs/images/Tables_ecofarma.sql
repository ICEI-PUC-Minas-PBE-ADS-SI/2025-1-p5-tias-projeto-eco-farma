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

