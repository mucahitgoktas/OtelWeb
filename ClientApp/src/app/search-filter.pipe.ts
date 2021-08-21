import { Pipe, PipeTransform } from '@angular/core';
import { Guest } from './models/model';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(guests: Guest[], searchValue: string): Guest[] {
    if (!guests || !searchValue) {
      return guests;
    }

      
    return guests.filter(guest =>
      guest.tcKimlikNo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      guest.adi.concat(guest.soyadi).toLocaleLowerCase().includes(searchValue.replace(/\s/g, "").toLocaleLowerCase()),
     
      

    );

  }

}
