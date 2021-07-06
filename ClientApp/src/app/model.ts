export class Model {
    categoryName:string;
    guests: Array<Guest>;

    constructor() {
        this.categoryName = 'Mevcut Konaklayanlar'
        this.guests = [
            new Guest(true,102,"Fikri","Şahin",90),
            new Guest(true,105,"Berkan","Yıldırım",110),
            new Guest(false,121,"Ender","Küçük",90),
            new Guest(true,118,"Mehmet","Aslan",140),
            new Guest(false,107,"Şevki","Zeyrek",80)
            ];
    }
}

export class Guest {
    durumu: boolean;
    odano: number;
    adi: string;
    soyadi: string;
    ucret: number;


    constructor(durumu, odano, adi, soyadi, ucret) {
        this.durumu = durumu;
        this.odano = odano;
        this.adi = adi;
        this.soyadi = soyadi;
        this.ucret = ucret;

    }
}

// const m = new Model();