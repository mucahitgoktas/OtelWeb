export class Model {
    categoryName:string;
    guests: Array<Guest>;

    constructor() {
        this.categoryName = 'Mevcut Konaklayanlar'
        this.guests = [
            { durumu: true, odano: 102, adi: "Fikri", soyadi: "Şahin", ucret: 90 },
            { durumu: false, odano: 107, adi: "Berkan", soyadi: "Yıldırım", ucret: 140 },
            { durumu: true, odano: 111, adi: "Ender", soyadi: "Küçük", ucret: 80 },
            { durumu: false, odano: 119, adi: "Mecit", soyadi: "Peren", ucret: 160 },
            { durumu: true, odano: 121, adi: "Hasan", soyadi: "Aykan", ucret: 90 }
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