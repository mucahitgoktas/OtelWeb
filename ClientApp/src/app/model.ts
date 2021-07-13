export class Model {
    guests: Array<Guest>;

    constructor() {
        
    }
}

export class Guest {
    GuestId: number;
    adi: string;
    Soyadi: string;
    TcKimlikNo: string;
    HesKodu: string;
    DogumYeri: string;
    OdaNo: string;
    Ucret: string;
    CiltNo: string;
    Notlar: string;


    constructor(
        id: number,
        adi: string,
        soyadi: string,
        tckimlikno: string,
        hesKodu: string,
        dogumyeri: string,
        odano: string,
        ucret: string,
        ciltno: string,
        notlar: string
    ) {
        this.GuestId = id;
        this.adi = adi;
        this.Soyadi = soyadi;
        this.TcKimlikNo = tckimlikno;
        this.HesKodu = hesKodu;
        this.DogumYeri = dogumyeri;
        this.OdaNo = odano;
        this.Ucret = ucret;
        this.CiltNo = ciltno;
        this.Notlar = notlar;

    }
}

// const m = new Model();