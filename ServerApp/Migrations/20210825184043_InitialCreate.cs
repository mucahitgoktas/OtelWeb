using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ServerApp.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Faturalar",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Unvan = table.Column<string>(type: "TEXT", nullable: true),
                    Adres = table.Column<string>(type: "TEXT", nullable: true),
                    VergiDairesi = table.Column<string>(type: "TEXT", nullable: true),
                    VergiNo = table.Column<string>(type: "TEXT", nullable: true),
                    Not1 = table.Column<string>(type: "TEXT", nullable: true),
                    Not2 = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faturalar", x => x.Id);
                });

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

            migrationBuilder.CreateTable(
                name: "Rezervasyonlar",
                columns: table => new
                {
                    RezId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TcKimlikNo = table.Column<string>(type: "TEXT", nullable: true),
                    OdaNo = table.Column<int>(type: "INTEGER", nullable: false),
                    Ucret = table.Column<int>(type: "INTEGER", nullable: false),
                    Tarih = table.Column<DateTime>(type: "TEXT", nullable: false),
                    GuestId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rezervasyonlar", x => x.RezId);
                    table.ForeignKey(
                        name: "FK_Rezervasyonlar_Guests_GuestId",
                        column: x => x.GuestId,
                        principalTable: "Guests",
                        principalColumn: "GuestId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RezervasyonLists",
                columns: table => new
                {
                    RezListId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TcKimlikNo = table.Column<string>(type: "TEXT", nullable: true),
                    OdaNo = table.Column<int>(type: "INTEGER", nullable: false),
                    Ucret = table.Column<int>(type: "INTEGER", nullable: false),
                    Tarih = table.Column<DateTime>(type: "TEXT", nullable: false),
                    RezId = table.Column<int>(type: "INTEGER", nullable: false),
                    RezervasyonRezId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervasyonLists", x => x.RezListId);
                    table.ForeignKey(
                        name: "FK_RezervasyonLists_Rezervasyonlar_RezervasyonRezId",
                        column: x => x.RezervasyonRezId,
                        principalTable: "Rezervasyonlar",
                        principalColumn: "RezId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rezervasyonlar_GuestId",
                table: "Rezervasyonlar",
                column: "GuestId");

            migrationBuilder.CreateIndex(
                name: "IX_RezervasyonLists_RezervasyonRezId",
                table: "RezervasyonLists",
                column: "RezervasyonRezId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Faturalar");

            migrationBuilder.DropTable(
                name: "RezervasyonLists");

            migrationBuilder.DropTable(
                name: "Rezervasyonlar");

            migrationBuilder.DropTable(
                name: "Guests");
        }
    }
}
