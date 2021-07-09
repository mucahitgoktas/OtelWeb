using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerApp.Migrations
{
    public partial class AddCiltNo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CiltNo",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "DogumYeri",
                table: "Guests",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OdaNo",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Ucret",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CiltNo",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "DogumYeri",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "OdaNo",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "Ucret",
                table: "Guests");
        }
    }
}
