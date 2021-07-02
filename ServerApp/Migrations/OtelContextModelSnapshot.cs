﻿// <auto-generated />
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

            modelBuilder.Entity("ServerApp.Models.Guest", b =>
                {
                    b.Property<int>("GuestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Adi")
                        .HasColumnType("TEXT");

                    b.Property<string>("HesKodu")
                        .HasColumnType("TEXT");

                    b.Property<string>("Soyadi")
                        .HasColumnType("TEXT");

                    b.Property<int>("TcKimlikNo")
                        .HasColumnType("INTEGER");

                    b.HasKey("GuestId");

                    b.ToTable("Guests");
                });
#pragma warning restore 612, 618
        }
    }
}
