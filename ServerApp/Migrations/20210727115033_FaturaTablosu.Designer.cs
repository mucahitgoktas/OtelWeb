﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServerApp.Data;

namespace ServerApp.Migrations
{
    [DbContext(typeof(OtelContext))]
    [Migration("20210727115033_FaturaTablosu")]
    partial class FaturaTablosu
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.7");

            modelBuilder.Entity("ServerApp.Models.Fatura", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Adres")
                        .HasColumnType("TEXT");

                    b.Property<string>("Not1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Not2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Unvan")
                        .HasColumnType("TEXT");

                    b.Property<string>("VergiDairesi")
                        .HasColumnType("TEXT");

                    b.Property<string>("VergiNo")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Faturalar");
                });

            modelBuilder.Entity("ServerApp.Models.Guest", b =>
                {
                    b.Property<int>("GuestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Adi")
                        .HasColumnType("TEXT");

                    b.Property<string>("CiltNo")
                        .HasColumnType("TEXT");

                    b.Property<string>("DogumYeri")
                        .HasColumnType("TEXT");

                    b.Property<string>("HesKodu")
                        .HasColumnType("TEXT");

                    b.Property<string>("Notlar")
                        .HasColumnType("TEXT");

                    b.Property<string>("OdaNo")
                        .HasColumnType("TEXT");

                    b.Property<string>("Secret")
                        .HasColumnType("TEXT");

                    b.Property<string>("Soyadi")
                        .HasColumnType("TEXT");

                    b.Property<string>("TcKimlikNo")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ucret")
                        .HasColumnType("TEXT");

                    b.HasKey("GuestId");

                    b.ToTable("Guests");
                });
#pragma warning restore 612, 618
        }
    }
}
