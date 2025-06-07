-- tabela de clientes, com dados pessoais e endereço
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

-- tabela para armazenar dados das farmacias
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

-- tabela para usuários do sistema (cliente, entregador ou farmacia)
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    id_papel INT,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    papel VARCHAR(20) CHECK (papel IN ('cliente', 'entregador', 'farmacia'))
);

-- tabela com os dados dos entregadores
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

-- tabela com os produtos das farmacias
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

-- tabela de promoções ligadas a produtos
CREATE TABLE Promocao (
    id SERIAL PRIMARY KEY,
    id_produto INT REFERENCES Produto(id),
    preco_promocao NUMERIC(10,2)
);

-- tabela para armazenar cupons de desconto
CREATE TABLE Cupom (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE,
    desconto_percentual NUMERIC(5,2),
    validade DATE,
    id_farmacia INT REFERENCES Farmacia(id)
);

-- tabela de relacionamento entre clientes e cupons
CREATE TABLE Cliente_Cupom (
    id SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES Cliente(id),
    id_cupom INT REFERENCES Cupom(id)
);

-- tabela principal de pedidos feitos pelos clientes
CREATE TABLE Pedido (
    id SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES Cliente(id),
    id_farmacia INT REFERENCES Farmacia(id)
);

-- produtos associados a cada pedido
CREATE TABLE Pedido_Produto (
    id SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES Pedido(id),
    id_produto INT REFERENCES Produto(id),
    qtd_produto INT,
    preco_produto NUMERIC(10,2)
);

-- tabela de entregas feitas pelos entregadores
CREATE TABLE Entrega (
    id SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES Pedido(id),
    id_entregador INT REFERENCES Entregador(id)
);

-- tabela de avaliacoes gerais (como feedbacks)
CREATE TABLE Avaliacao (
    id SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES Cliente(id),
    autor VARCHAR(100),
    avaliacao TEXT,
    nota INT
);

-- tabela especifica para avaliações de produtos
CREATE TABLE Avaliacao_produto (
    id SERIAL PRIMARY KEY,
    id_produto INT REFERENCES Produto(id),
    id_cliente INT REFERENCES Cliente(id),
    autor VARCHAR(100),
    avaliacao TEXT,
    nota INT,
    anexo TEXT
);

-- filtros

-- pagina de busca: filtrar produtos pela categoria escolhida pelo usuario,
-- e também por uma faixa de preço que ele define (mínimo e máximo)
SELECT * FROM Produto
WHERE categoria = 'Medicamento'
AND preco >= 10.00
AND preco <= 50.00;

-- produtos de uma farmácia específica (quando o usuário acessa o perfil de uma farmácia)
SELECT * FROM Produto WHERE id_farmacia = 1;

-- mostrar cupons que o cliente tem (ex: na área de cupons disponíveis ou no checkout)
SELECT c.* FROM Cliente_Cupom cc
JOIN Cupom c ON c.id = cc.id_cupom
WHERE cc.id_cliente = 1;

-- pagina de detalhes de um produto: exibir avaliações relacionadas ao produto
SELECT p.nome, p.descricao, ap.autor, ap.avaliacao, ap.nota
FROM Produto p
LEFT JOIN Avaliacao_produto ap ON ap.id_produto = p.id;
