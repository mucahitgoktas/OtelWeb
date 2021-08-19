import { v4 as uuidv4 } from 'uuid';

export interface Irezervasyon {
    id: number;
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

export class Rezervasyon implements Irezervasyon {
    id: number;
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

