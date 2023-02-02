//EX3
//1
// type options = 1 | "hello" | true

// function getValueType(parameter:options):object {
//     let obj = {value: parameter , type: typeof(parameter)}
//     return obj
// }
// console.log(getValueType(1));


function getValueType<Type>(parameter:Type):object {
    let obj = {value: parameter , type: typeof(parameter)}
    return obj
}
console.log(getValueType(1));
console.log(getValueType("world"));
console.log(getValueType(true));

//2
interface Rectangle {
    length: number,
    width: number
}

const newRectangle: Rectangle = {length:5, width:2};
console.log(newRectangle);

function calc(rectangle: object): Array<number> {
    let area = rectangle.length * rectangle.width
    let perimeter =  rectangle.length*2 + rectangle.width*2 
    return [area,perimeter] 
}

console.log(calc(newRectangle));

//3
interface IPoint {
    x: number;
    y: number;
   }

   function distance(p1: IPoint, p2: IPoint): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
   }
   const point1: IPoint = { x: 0, y: 0 };
   const point2: IPoint = { x: 3, y: 4 };      
 
   console.log(distance(point1, point2));

//4
enum CardRank{
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
    }
   
interface ICard {
    suit: string;
    rank: CardRank;
   }

let myCard: CardRank = CardRank.Ten;
console.log(myCard);

let myCard2: ICard = {suit:"Ten" , rank:CardRank.Ten}
let myCard3: ICard = {suit:"King" , rank:CardRank.King}
console.log(myCard2);

function higherRankedCard(cardObjFirst: ICard ,cardObjSecond: ICard ):string{
    const messageIfFirstBigger = `Bigger card is: ${cardObjFirst.suit}`
    const messageIfSecondBigger = `Bigger card is: ${cardObjSecond.suit}`

    const checking = cardObjFirst.rank > cardObjSecond.rank ? messageIfFirstBigger : messageIfSecondBigger;
    return checking
}
console.log(higherRankedCard(myCard2,myCard3));

//5
class PersonX {
    name: string;
    age: number;
    email: string;

    constructor(name:string, age:number, email:string){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const newPerson = new PersonX ("Shalev", 38,"Shalex.doe@example.com" )
console.log(newPerson);

//6
interface RectangleX {
    length: number,
    width: number
}
interface Circle {
    radius: number
}

const newShape: RectangleX&Circle = {width: 2, length: 4, radius: 1}
console.log(newShape);

function area (obj:RectangleX&Circle):number{
    
    return obj.width *obj.length *obj.radius
}

console.log(area(newShape));

//7
function swap <Type>(firstArg:Type,secondArg:Type):Array<Type>{
    return [secondArg, firstArg]
}

console.log(swap("hello", "world"));
console.log(swap(123, 456));
console.log(swap(true, false));

//8
function minMax <Type> (arr:Type[]):Array<Type>{
    let answerMax: number = Math.max(...arr);
    let answerMin: number = Math.min(...arr);
    return [answerMin,answerMax]
}

let array1: Array<number> = [3, 1, 5, 2, 4]
console.log(minMax(array1));
let array2: Array<string> = ["apple", "banana", "cherry"]
console.log(minMax(array2));

