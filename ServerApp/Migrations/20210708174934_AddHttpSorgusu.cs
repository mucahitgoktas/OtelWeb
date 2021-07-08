using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerApp.Migrations
{
    public partial class AddHttpSorgusu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Guests",
                table: "Guests");

            migrationBuilder.RenameColumn(
                name: "TcKimlikNo",
                table: "Guests",
                newName: "tckimlikno");

            migrationBuilder.RenameColumn(
                name: "Soyadi",
                table: "Guests",
                newName: "soyadi");

            migrationBuilder.RenameColumn(
                name: "Secret",
                table: "Guests",
                newName: "secret");

            migrationBuilder.RenameColumn(
                name: "HesKodu",
                table: "Guests",
                newName: "heskodu");

            migrationBuilder.RenameColumn(
                name: "Adi",
                table: "Guests",
                newName: "adi");

            migrationBuilder.RenameColumn(
                name: "GuestId",
                table: "Guests",
                newName: "ucret");

            migrationBuilder.AlterColumn<int>(
                name: "ucret",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0)
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "notlar",
                table: "Guests",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "odano",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Guests",
                table: "Guests",
                column: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Guests",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "id",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "notlar",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "odano",
                table: "Guests");

            migrationBuilder.RenameColumn(
                name: "tckimlikno",
                table: "Guests",
                newName: "TcKimlikNo");

            migrationBuilder.RenameColumn(
                name: "soyadi",
                table: "Guests",
                newName: "Soyadi");

            migrationBuilder.RenameColumn(
                name: "secret",
                table: "Guests",
                newName: "Secret");

            migrationBuilder.RenameColumn(
                name: "heskodu",
                table: "Guests",
                newName: "HesKodu");

            migrationBuilder.RenameColumn(
                name: "adi",
                table: "Guests",
                newName: "Adi");

            migrationBuilder.RenameColumn(
                name: "ucret",
                table: "Guests",
                newName: "GuestId");

            migrationBuilder.AlterColumn<int>(
                name: "GuestId",
                table: "Guests",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Guests",
                table: "Guests",
                column: "GuestId");
        }
    }
}
