import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yaziIleFiyat'
})
export class YaziIleFiyatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      value = parseFloat(value).toFixed(2);
      let amounth = value.toString().split(".");
      let price: any = amounth[0];
      let pointer: any = amounth.length > 0 ? amounth[1] : null;
      var singleDigit = ["Sıfır", "Bir", "İki", "Üç", "Dört", "Beş", "Altı", "Yedi", "Sekiz", "Dokuz"],
        doubleDigit = ["On", "Onbir", "Oniki", "Onüç", "Ondört", "Onbeş", "Onaltı", "Onyedi", "Onsekiz", "Ondokuz"],
        tensPlace = ["", "On", "Yirmi", "Otuz", "Kırk", "Elli", "Altmış", "Yetmiş", "Seksen", "Doksan"],
        handle_tens = function (digit: any, prevdigit: any) {
          return 0 == digit ? "" : "" + (1 == digit ? doubleDigit[prevdigit] : tensPlace[digit])
        },
        handle_utlc = function (digit: any, nextdigit: any, denom: any) {
          return (0 != digit && 1 != nextdigit ? "" + singleDigit[digit] : "") + (0 != nextdigit || digit > 0 ? "" + denom : "")
        };
      var lira = "",
        digitIndex = 0,
        digit = 0,
        nextDigit = 0,
        words = [],
        paisaWords = [],
        paisa = "";
      if (price += "", isNaN(parseFloat(price))) lira = "";
      else if (parseFloat(price) > 0 && price.length <= 10) {
        for (digitIndex = price.length - 1; digitIndex >= 0; digitIndex--)
          switch (digit = price[digitIndex] - 0, nextDigit = digitIndex > 0 ? price[digitIndex - 1] - 0 : 0, price.length - digitIndex - 1) {
            case 0:
              words.push(handle_utlc(digit, nextDigit, ""));
              break;
            case 1:
              words.push(handle_tens(digit, price[digitIndex + 1]));
              break;
            case 2:
              words.push(0 != digit ? singleDigit[digit] + "Yüz" + (0 != price[digitIndex + 1] && 0 != price[digitIndex + 2] ? "":"") :"");
              break;
            case 3:
              words.push(handle_utlc(digit, nextDigit, "Bin"));
              break;
            case 4:
              words.push(handle_tens(digit, price[digitIndex + 1]));
              break;
            case 5:
              words.push(handle_utlc(digit, nextDigit, "Yüzbin"));
              break;
            case 6:
              words.push(handle_tens(digit, price[digitIndex + 1]));
              break;
            case 7:
              words.push(handle_utlc(digit, nextDigit, "Onmilyon"));
              break;
            case 8:
              words.push(handle_tens(digit, price[digitIndex + 1]));
              break;
            case 9:
              words.push(0 != digit ? singleDigit[digit] + "Yüz" + (0 != price[digitIndex + 1] || 0 != price[digitIndex + 2] ? "" : " Onmilyon") : "")
          }
        lira = words.reverse().join("")
      } else lira = "";
      if (lira)
        lira = `${lira} ₺`
      if (pointer != "00") {
        digitIndex = 0;
        digit = 0;
        nextDigit = 0;
        for (digitIndex = pointer.length - 1; digitIndex >= 0; digitIndex--)
          switch (digit = pointer[digitIndex] - 0, nextDigit = digitIndex > 0 ? pointer[digitIndex - 1] - 0 : 0, pointer.length - digitIndex - 1) {
            case 0:
              paisaWords.push(handle_utlc(digit, nextDigit, ""));
              break;
            case 1:
              paisaWords.push(handle_tens(digit, pointer[digitIndex + 1]));
              break;
          }
        // paisa = paisaWords.reverse().join("");
        // if (lira)
        //   lira = `${lira} and ${paisa} Paisa`
        // else
        //   lira = `${paisa} Paisa`
      }
      return lira
    }
  }
}
