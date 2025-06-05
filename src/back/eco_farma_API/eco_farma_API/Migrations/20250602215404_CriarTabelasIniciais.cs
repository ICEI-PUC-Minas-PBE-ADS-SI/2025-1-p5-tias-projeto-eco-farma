using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace eco_farma_API.Migrations
{
    /// <inheritdoc />
    public partial class CriarTabelasIniciais : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "avaliacao",
                columns: table => new
                {
                    id_avaliacao = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_cliente = table.Column<int>(type: "integer", nullable: false),
                    autor = table.Column<string>(type: "text", nullable: true),
                    avaliacao = table.Column<string>(type: "text", nullable: true),
                    nota = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_avaliacao", x => x.id_avaliacao);
                });

            migrationBuilder.CreateTable(
                name: "avaliacao_produto",
                columns: table => new
                {
                    id_avaliacao_produto = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_produto = table.Column<int>(type: "integer", nullable: false),
                    id_cliente = table.Column<int>(type: "integer", nullable: false),
                    autor = table.Column<string>(type: "text", nullable: true),
                    avaliacao = table.Column<string>(type: "text", nullable: true),
                    nota = table.Column<double>(type: "double precision", nullable: false),
                    anexo = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_avaliacao_produto", x => x.id_avaliacao_produto);
                });

            migrationBuilder.CreateTable(
                name: "cliente",
                columns: table => new
                {
                    id_cliente = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nome = table.Column<string>(type: "text", nullable: true),
                    sexo = table.Column<string>(type: "text", nullable: true),
                    data_nasc = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    email = table.Column<string>(type: "text", nullable: true),
                    telefone = table.Column<string>(type: "text", nullable: true),
                    cpf = table.Column<string>(type: "text", nullable: true),
                    endereco = table.Column<string>(type: "text", nullable: true),
                    cep = table.Column<int>(type: "integer", nullable: false),
                    numero = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cliente", x => x.id_cliente);
                });

            migrationBuilder.CreateTable(
                name: "entrega",
                columns: table => new
                {
                    id_entrega = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_pedido = table.Column<int>(type: "integer", nullable: false),
                    id_entregador = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_entrega", x => x.id_entrega);
                });

            migrationBuilder.CreateTable(
                name: "entregador",
                columns: table => new
                {
                    id_entregador = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nome = table.Column<string>(type: "text", nullable: true),
                    sexo = table.Column<string>(type: "text", nullable: true),
                    data_nasc = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    email = table.Column<string>(type: "text", nullable: true),
                    telefone = table.Column<int>(type: "integer", nullable: false),
                    cpf = table.Column<int>(type: "integer", nullable: false),
                    endereco = table.Column<string>(type: "text", nullable: true),
                    cep = table.Column<int>(type: "integer", nullable: false),
                    numero = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_entregador", x => x.id_entregador);
                });

            migrationBuilder.CreateTable(
                name: "farmacia",
                columns: table => new
                {
                    id_farmacia = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    numero = table.Column<int>(type: "integer", nullable: false),
                    email = table.Column<string>(type: "text", nullable: true),
                    cnpj = table.Column<string>(type: "text", nullable: true),
                    telefone = table.Column<int>(type: "integer", nullable: false),
                    cep = table.Column<int>(type: "integer", nullable: false),
                    endereco = table.Column<string>(type: "text", nullable: true),
                    nome = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_farmacia", x => x.id_farmacia);
                });

            migrationBuilder.CreateTable(
                name: "pedido",
                columns: table => new
                {
                    id_pedido = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_cliente = table.Column<int>(type: "integer", nullable: false),
                    id_farmacia = table.Column<int>(type: "integer", nullable: false),
                    id_produto = table.Column<int>(type: "integer", nullable: false),
                    qtd_produto = table.Column<int>(type: "integer", nullable: false),
                    preco_produto = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pedido", x => x.id_pedido);
                });

            migrationBuilder.CreateTable(
                name: "produto",
                columns: table => new
                {
                    id_produto = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nome = table.Column<string>(type: "text", nullable: true),
                    categoria = table.Column<string>(type: "text", nullable: true),
                    preco = table.Column<double>(type: "double precision", nullable: false),
                    estoque = table.Column<int>(type: "integer", nullable: false),
                    anexo = table.Column<string>(type: "text", nullable: true),
                    descricao = table.Column<string>(type: "text", nullable: true),
                    id_farmacia = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_produto", x => x.id_produto);
                });

            migrationBuilder.CreateTable(
                name: "promocao",
                columns: table => new
                {
                    id_promocao = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_produto = table.Column<int>(type: "integer", nullable: false),
                    preco_promocao = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_promocao", x => x.id_promocao);
                });

            migrationBuilder.CreateTable(
                name: "usuario",
                columns: table => new
                {
                    id_usuario = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    email = table.Column<string>(type: "text", nullable: false),
                    senha = table.Column<string>(type: "text", nullable: false),
                    papel = table.Column<string>(type: "text", nullable: false),
                    id_papel = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usuario", x => x.id_usuario);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "avaliacao");

            migrationBuilder.DropTable(
                name: "avaliacao_produto");

            migrationBuilder.DropTable(
                name: "cliente");

            migrationBuilder.DropTable(
                name: "entrega");

            migrationBuilder.DropTable(
                name: "entregador");

            migrationBuilder.DropTable(
                name: "farmacia");

            migrationBuilder.DropTable(
                name: "pedido");

            migrationBuilder.DropTable(
                name: "produto");

            migrationBuilder.DropTable(
                name: "promocao");

            migrationBuilder.DropTable(
                name: "usuario");
        }
    }
}
