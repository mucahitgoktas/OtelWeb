import { v4 as uuidv4 } from 'uuid';

export interface Irezervasyon {
    id: uuidv4;
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
export interface IrezervasyonItem{
    id: uuidv4;
    adi: string;
    soyadi: string;
    tcKimlikNo: string;
    hesKodu: string;
}

export class Rezervasyon implements Irezervasyon {
    id: uuidv4;
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

export class RezervasyonItem implements IrezervasyonItem {
    id: uuidv4;
    adi: string;
    soyadi: string;
    tcKimlikNo: string;
    hesKodu: string;
   
}

