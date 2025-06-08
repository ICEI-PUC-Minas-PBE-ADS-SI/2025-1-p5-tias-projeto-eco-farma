using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eco_farma_API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTabelas6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "senha",
                table: "farmacia",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "senha",
                table: "entregador",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "senha",
                table: "cliente",
                type: "text",
                nullable: true);
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

            migrationBuilder.DropColumn(
                name: "senha",
                table: "cliente");
        }
    }
}
