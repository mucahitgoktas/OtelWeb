﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServerApp.Data;

namespace ServerApp.Migrations
{
    [DbContext(typeof(OtelContext))]
    partial class OtelContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

            modelBuilder.Entity("ServerApp.Models.Rezervasyon", b =>
                {
                    b.Property<int>("RezId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("GuestId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("OdaNo")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Tarih")
                        .HasColumnType("TEXT");

                    b.Property<string>("TcKimlikNo")
                        .HasColumnType("TEXT");

                    b.Property<int>("Ucret")
                        .HasColumnType("INTEGER");

                    b.HasKey("RezId");

                    b.HasIndex("GuestId");

                    b.ToTable("Rezervasyonlar");
                });

            modelBuilder.Entity("ServerApp.Models.RezervasyonList", b =>
                {
                    b.Property<int>("RezListId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("OdaNo")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RezId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("RezervasyonRezId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Tarih")
                        .HasColumnType("TEXT");

                    b.Property<string>("TcKimlikNo")
                        .HasColumnType("TEXT");

                    b.Property<int>("Ucret")
                        .HasColumnType("INTEGER");

                    b.HasKey("RezListId");

                    b.HasIndex("RezervasyonRezId");

                    b.ToTable("RezervasyonLists");
                });

            modelBuilder.Entity("ServerApp.Models.Rezervasyon", b =>
                {
                    b.HasOne("ServerApp.Models.Guest", "Guest")
                        .WithMany("Rezervasyons")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Guest");
                });

            modelBuilder.Entity("ServerApp.Models.RezervasyonList", b =>
                {
                    b.HasOne("ServerApp.Models.Rezervasyon", "Rezervasyon")
                        .WithMany("RezervasyonLists")
                        .HasForeignKey("RezervasyonRezId");

                    b.Navigation("Rezervasyon");
                });

            modelBuilder.Entity("ServerApp.Models.Guest", b =>
                {
                    b.Navigation("Rezervasyons");
                });

            modelBuilder.Entity("ServerApp.Models.Rezervasyon", b =>
                {
                    b.Navigation("RezervasyonLists");
                });
#pragma warning restore 612, 618
        }
    }
}
