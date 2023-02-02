//EX3
//1
// type options = 1 | "hello" | true
// function getValueType(parameter:options):object {
//     let obj = {value: parameter , type: typeof(parameter)}
//     return obj
// }
// console.log(getValueType(1));
function getValueType(parameter) {
    var obj = { value: parameter, type: typeof (parameter) };
    return obj;
}
console.log(getValueType(1));
console.log(getValueType("world"));
console.log(getValueType(true));
var newRectangle = { length: 5, width: 2 };
console.log(newRectangle);
function calc(rectangle) {
    var area = rectangle.length * rectangle.width;
    var perimeter = rectangle.length * 2 + rectangle.width * 2;
    return [area, perimeter];
}
console.log(calc(newRectangle));
function distance(p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
var point1 = { x: 0, y: 0 };
var point2 = { x: 3, y: 4 };
console.log(distance(point1, point2));
//4
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 0] = "Ace";
    CardRank[CardRank["Two"] = 1] = "Two";
    CardRank[CardRank["Three"] = 2] = "Three";
    CardRank[CardRank["Four"] = 3] = "Four";
    CardRank[CardRank["Five"] = 4] = "Five";
    CardRank[CardRank["Six"] = 5] = "Six";
    CardRank[CardRank["Seven"] = 6] = "Seven";
    CardRank[CardRank["Eight"] = 7] = "Eight";
    CardRank[CardRank["Nine"] = 8] = "Nine";
    CardRank[CardRank["Ten"] = 9] = "Ten";
    CardRank[CardRank["Jack"] = 10] = "Jack";
    CardRank[CardRank["Queen"] = 11] = "Queen";
    CardRank[CardRank["King"] = 12] = "King";
})(CardRank || (CardRank = {}));
var myCard = CardRank.Ten;
console.log(myCard);
var myCard2 = { suit: "Ten", rank: CardRank.Ten };
var myCard3 = { suit: "King", rank: CardRank.King };
console.log(myCard2);
function higherRankedCard(cardObjFirst, cardObjSecond) {
    var messageIfFirstBigger = "Bigger card is: ".concat(cardObjFirst.suit);
    var messageIfSecondBigger = "Bigger card is: ".concat(cardObjSecond.suit);
    var checking = cardObjFirst.rank > cardObjSecond.rank ? messageIfFirstBigger : messageIfSecondBigger;
    return checking;
}
console.log(higherRankedCard(myCard2, myCard3));
//5
var PersonX = /** @class */ (function () {
    function PersonX(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return PersonX;
}());
var newPerson = new PersonX("Shalev", 38, "Shalex.doe@example.com");
console.log(newPerson);
var newShape = { width: 2, length: 4, radius: 1 };
console.log(newShape);
function area(obj) {
    return obj.width * obj.length * obj.radius;
}
console.log(area(newShape));
//7
function swap(firstArg, secondArg) {
    return [secondArg, firstArg];
}
console.log(swap("hello", "world"));
console.log(swap(123, 456));
console.log(swap(true, false));
//8
function minMax(arr) {
    var answerMax = Math.max.apply(Math, arr);
    var answerMin = Math.min.apply(Math, arr);
    return [answerMin, answerMax];
}
var array1 = [3, 1, 5, 2, 4];
console.log(minMax(array1));
var array2 = ["apple", "banana", "cherry"];
console.log(minMax(array2));
