//ЗАДАНИЕ No1
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в процентах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.

// class Marker {
//   constructor(markerColor, inkQuantity) {
//     this.markerColor = markerColor;
//     this.inkQuantity = inkQuantity;
//   }

//   printText(string) {
//     let printedText = "";

    // if (string[i] !== " " && this.inkQuantity >= 0.5) {
//       if (this.inkQuantity >= 0.5) {
//         printedText += string[i];
//         this.inkQuantity -= 0.5;

//       } else {
//         break;
//       }
//     }

//     console.log(`(${this.markerColor} цвет) ${printedText} `);
//   }
//   getInkLevel() {
//     return this.inkQuantity.toFixed(2);
//   }
// }

// const newMarker = new Marker("Синий", 5);
// newMarker.printText(
//   "Солнечный день. Птицы щебечут. Воздух пропитан ароматом цветов. Мир наполнен красотой и спокойствием, принося радость в сердца."
// );

// console.log(`Осталось чернил в маркере: ${newMarker.getInkLevel()}%`);

// class ReusableMarker extends Marker {
//   constructor(markerColor, inkQuantity) {
//     super(markerColor, inkQuantity);
//   }

//   markerRefill() {
//     this.inkQuantity += 5;
//     return this.inkQuantity.toFixed(2);
//   }
// }

// const marker2 = new ReusableMarker("Белый", 8);
// marker2.printText(
//   "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
// );
// console.log(`Осталось чернил в маркере: ${marker2.getInkLevel()}%`);
// console.log(
//   `Количество чернил в маркере после заправки: ${marker2.markerRefill()}%`
// );

//___________________________________________________________________________________________________

// Задание 2
// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.

// class ExtendedDate extends Date {
//   constructor(...args) {
//     super(...args);
//   }

//   getCurrentDate() {
//     const months = [
//       "Январь",
//       "Февраль",
//       "Март",
//       "Апрель",
//       "Май",
//       "Июнь",
//       "Июль",
//       "Август",
//       "Сентябрь",
//       "Октябрь",
//       "Ноябрь",
//       "Декабрь",
//     ];

//     return `Число: ${this.getDate()} | Месяц: ${months[this.getMonth()]}`;
//   }

//   pastOrFuture(arg) {
//     if (this.getTime() > arg.getTime()) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   isLeapYear(arg) {
//     if (arg.getFullYear() % 4 === 0) {
//       return `${arg.getFullYear()} is leap year`;
//     } else {
//       return `${arg.getFullYear()} is non-leap year`;
//     }
//   }

// }

// const myDate = new ExtendedDate();

// console.log(myDate.getCurrentDate());

// const newDate = new ExtendedDate("2012-06-22");
// console.log(myDate.pastOrFuture(newDate));

// const checkLeap = new ExtendedDate("2012-05-04");
// console.log(myDate.isLeapYear(checkLeap));

