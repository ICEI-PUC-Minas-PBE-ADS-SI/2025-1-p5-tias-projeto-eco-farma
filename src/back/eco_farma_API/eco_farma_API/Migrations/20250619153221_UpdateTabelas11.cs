using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eco_farma_API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTabelas11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_avaliacao_produto_produto_id_produto",
                table: "avaliacao_produto");

            migrationBuilder.DropIndex(
                name: "IX_avaliacao_produto_id_produto",
                table: "avaliacao_produto");

            migrationBuilder.AddColumn<int>(
                name: "Produtoid_produto",
                table: "avaliacao_produto",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_avaliacao_produto_Produtoid_produto",
                table: "avaliacao_produto",
                column: "Produtoid_produto");

            migrationBuilder.AddForeignKey(
                name: "FK_avaliacao_produto_produto_Produtoid_produto",
                table: "avaliacao_produto",
                column: "Produtoid_produto",
                principalTable: "produto",
                principalColumn: "id_produto");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_avaliacao_produto_produto_Produtoid_produto",
                table: "avaliacao_produto");

            migrationBuilder.DropIndex(
                name: "IX_avaliacao_produto_Produtoid_produto",
                table: "avaliacao_produto");

            migrationBuilder.DropColumn(
                name: "Produtoid_produto",
                table: "avaliacao_produto");

            migrationBuilder.CreateIndex(
                name: "IX_avaliacao_produto_id_produto",
                table: "avaliacao_produto",
                column: "id_produto");

            migrationBuilder.AddForeignKey(
                name: "FK_avaliacao_produto_produto_id_produto",
                table: "avaliacao_produto",
                column: "id_produto",
                principalTable: "produto",
                principalColumn: "id_produto",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
