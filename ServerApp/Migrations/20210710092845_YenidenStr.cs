using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerApp.Migrations
{
    public partial class YenidenStr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Guests",
                columns: table => new
                {
                    GuestId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Adi = table.Column<string>(type: "TEXT", nullable: true),
                    Soyadi = table.Column<string>(type: "TEXT", nullable: true),
                    TcKimlikNo = table.Column<string>(type: "TEXT", nullable: true),
                    HesKodu = table.Column<string>(type: "TEXT", nullable: true),
                    DogumYeri = table.Column<string>(type: "TEXT", nullable: true),
                    OdaNo = table.Column<string>(type: "TEXT", nullable: true),
                    Ucret = table.Column<string>(type: "TEXT", nullable: true),
                    CiltNo = table.Column<string>(type: "TEXT", nullable: true),
                    Notlar = table.Column<string>(type: "TEXT", nullable: true),
                    Secret = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Guests", x => x.GuestId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Guests");
        }
    }
}
