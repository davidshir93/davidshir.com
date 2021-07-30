const prompt = require("prompt-sync")({
  sigint: true
});

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this._field = field;
  }

  get field() {
    return this._field;
  }

  print() {
    this._field.forEach((row) => {
      console.log(row.join(""));
    });
  }

  static generateField() {
    const height = Math.floor(Math.random() * 12) + 3;
    const width = Math.floor(Math.random() * 12) + 3;
    let newArray = [
      [pathCharacter]
    ];
    let hatExist = false;
    for (let i = 0; i < height; i++) {
      newArray.push([fieldCharacter]);
    }

    function widthPusher(item, index) {
      for (let j = 0; j < width; j++) {
        if (Math.random() * 10 > 8) {
          newArray[index].push(hole);
        } else {
          if (Math.random() * 10 > 9 && !hatExist) {
            newArray[index].push(hat);
            hatExist = true;
          } else {
            newArray[index].push(fieldCharacter);
          }
        }
      }
    }
    newArray.forEach(widthPusher);
    if (!hatExist) {
      let temp = Math.floor(Math.random() * newArray.length);
      newArray[temp].pop();
      newArray[temp].push(hat);
      hatExist = true;
    }
    return newArray;
  }
}

const newField = new Field(Field.generateField());

let locX = 0;
let locY = 0;
let shouldContinue = true;
let currentChar = "";

const checkChar = (currentChar) => {
  switch (currentChar) {
    case fieldCharacter:
      break;
    case hole:
      console.log("You have fallen...");
      shouldContinue = false;
      break;
    case hat:
      console.log("You find your hat!!!");
      shouldContinue = false;
      break;
    default:
      console.log("You went too far...");
      shouldContinue = false;
      break;
  }
};

while (shouldContinue) {
  newField.print();
  let userInput = prompt("Where do you want to go?");

  switch (userInput) {
    case "r":
      locX += 1;
      if (newField.field[locY] && newField.field[locY][locX]) {
        currentChar = newField.field[locY][locX];
      } else {
        console.log("You went too far...");
        shouldContinue = false;
        break;
      }
      checkChar(currentChar);
      newField.field[locY][locX] = pathCharacter;
      break;
    case "l":
      locX -= 1;
      if (newField.field[locY] && newField.field[locY][locX]) {
        currentChar = newField.field[locY][locX];
      } else {
        console.log("You went too far...");
        shouldContinue = false;
        break;
      }
      checkChar(currentChar);
      newField.field[locY][locX] = pathCharacter;
      break;
    case "d":
      locY += 1;
      if (newField.field[locY] && newField.field[locY][locX]) {
        currentChar = newField.field[locY][locX];
      } else {
        console.log("You went too far...");
        shouldContinue = false;
        break;
      }
      checkChar(currentChar);
      newField.field[locY][locX] = pathCharacter;
      break;
    case "u":
      locY -= 1;
      if (newField.field[locY] && newField.field[locY][locX]) {
        currentChar = newField.field[locY][locX];
      } else {
        console.log("You went too far...");
        shouldContinue = false;
        break;
      }
      checkChar(currentChar);
      newField.field[locY][locX] = pathCharacter;
      break;
    default:
      break;
  }
}