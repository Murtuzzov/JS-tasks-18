class Marker {
  constructor(markerColor, inkQuantity) {
    this.markerColor = markerColor;
    this.inkQuantity = inkQuantity;
  }

  printText(string) {
    let printedText = "";
    for (let i = 0; i < string.length; i += 1) {
      if (this.inkQuantity >= 0.025) {
        printedText += string[i];
        this.inkQuantity -= 0.025;
      } else {
        break;
      }
    }

    console.log(`(${this.markerColor} цвет) ${printedText} `);
  }
  getInkLevel() {
    return this.inkQuantity.toFixed(2);
  }
}

const newMarker = new Marker("Синий", 5);
newMarker.printText(
  "Солнечный день. Птицы щебечут. Воздух пропитан ароматом цветов. Мир наполнен красотой и спокойствием, принося радость в сердца."
);

console.log(`Осталось чернил в маркере: ${newMarker.getInkLevel()}%`);

class ReusableMarker extends Marker {
  constructor(markerColor, inkQuantity) {
    super(markerColor, inkQuantity);
  }

  markerRefill() {
    this.inkQuantity += 5;
    return this.inkQuantity.toFixed(2);
  }
}

const marker2 = new ReusableMarker("Белый", 8);
marker2.printText(
  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
);
console.log(`Осталось чернил в маркере: ${marker2.getInkLevel()}%`);
console.log(
  `Количество чернил в маркере после заправки: ${marker2.markerRefill()}%`
);
