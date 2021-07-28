export class Model {
    guests: Array<Guest>;
    faturalar: Array<Fatura>;

    constructor() {
        
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

export class Fatura {
    id: number;
    unvan: string;
    adres: string;
    vergiDairesi: string;
    vergiNo:string;
    not1:string;
    not2:string;
}



