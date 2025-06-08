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
                name: "Senha",
                table: "cliente",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Senha",
                table: "cliente");
        }
    }
}
