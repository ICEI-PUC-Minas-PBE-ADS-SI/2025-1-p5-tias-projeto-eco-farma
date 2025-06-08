using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eco_farma_API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTabelas7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Senha",
                table: "cliente",
                newName: "senha");

            migrationBuilder.AddColumn<string>(
                name: "senha",
                table: "farmacia",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "senha",
                table: "entregador",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "senha",
                table: "farmacia");

            migrationBuilder.DropColumn(
                name: "senha",
                table: "entregador");

            migrationBuilder.RenameColumn(
                name: "senha",
                table: "cliente",
                newName: "Senha");
        }
    }
}
