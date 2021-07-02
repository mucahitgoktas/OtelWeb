using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerApp.Migrations
{
    public partial class HeskoduAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Guests",
                newName: "Soyadi");

            migrationBuilder.AddColumn<string>(
                name: "Adi",
                table: "Guests",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Adi",
                table: "Guests");

            migrationBuilder.RenameColumn(
                name: "Soyadi",
                table: "Guests",
                newName: "Name");
        }
    }
}
