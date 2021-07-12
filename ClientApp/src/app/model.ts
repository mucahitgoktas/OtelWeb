export class Model {
    guests: Array<Guest>;

    constructor() {
        //     this.guests = [
        // new Guest(1,102,"Fikri","Şahin","90","36254478944","E4T1564818","Bir gece konaklayacak"),
        // new Guest(2,105,"Berkan","Yıldırım","110","36254478944","A4G1547812","Bir gece konaklayacak"),
        // new Guest(3,121,"Ender","Küçük","90","36254478944","A4G1547812","Bir gece konaklayacak"),
        // new Guest(4,118,"Mehmet","Aslan","140","36254478944","A4G1547812","Bir gece konaklayacak"),
        // new Guest(5,107,"Şevki","Zeyrek","80","36254478944","A4G1547812","Bir gece konaklayacak")
        // ];
    }
}

export class Guest {
    GuestId: number;
    Adi: string;
    //Soyadi: string;
    // TcKimlikNo: string;
    // HesKodu: string;
    // DogumYeri: string;
    // OdaNo: string;
    // Ucret: string;
    // CiltNo: string;
    // Notlar: string;


    constructor(
        id: number,
        adi: string,
        //soyadi: string,
        // tckimlikno: string,
        // hesKodu: string,
        // dogumyeri: string,
        // odano: string,
        // ucret: string,
        // ciltno: string,
        // notlar: string
    ) {
        this.GuestId = id;
        this.Adi = adi;
        //this.Soyadi = soyadi;
        // this.TcKimlikNo = tckimlikno;
        // this.HesKodu = hesKodu;
        // this.DogumYeri = dogumyeri;
        // this.OdaNo = odano;
        // this.Ucret = ucret;
        // this.CiltNo = ciltno;
        // this.Notlar = notlar;

    }
}

// const m = new Model();