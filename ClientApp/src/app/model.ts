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
    guestId: number;
    adi: string;
    soyadi: string;
    tcKimlikNo: string;
    hesKodu: string;
    dogumYeri: string;
    odaNo: number;
    ucret: string;
    ciltNo: string;
    notlar: string;

}

// const m = new Model();