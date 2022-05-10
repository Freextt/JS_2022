//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor(userId, userName, surname, email, phone) {
        this.userId = userId;
        this.userName = userName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let Users = [
    new User(1,'ceine','cwmnw','hsu@gmail.com','+389472798'),
    new User(4,'ceube','cejnce','unw@gmail.com','+3227462'),
    new User(3,'cenjone','dwudwj','nejcc@gmail.com','+38348739874'),
    new User(6,'ejvenv','cneenceni','cwkmc@gmail.com','+38742647826'),
    new User(5,'kodwp','dwouwndw','wuery@gmail.com','+23198731'),
    new User(2,'ceine','cwmnw','hsu@gmail.com','+389472798'),
    new User(7,'ceube','cejnce','unw@gmail.com','+3227462'),
    new User(8,'cenjone','dwudwj','nejcc@gmail.com','+38348739874'),
    new User(9,'ejvenv','cneenceni','cwkmc@gmail.com','+38742647826'),
    new User(10,'kodwp','dwouwndw','wuery@gmail.com','+23198731')
]
console.log(Users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(Users.filter(item => item.userId % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(Users.sort((a,b)=> a.userId - b.userId));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id,name,surname,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.order = order;
    }
}
let Clients = [
    new Client(1,'Poks','Qwert','+2742648',['carrot','milk','meat']),
    new Client(2,'Tolr','Tolkin','+487256272',['cheese','lemon','watermelon','biscuit']),
    new Client(3,'Wert','Kulkin','+28935726',['water','papper','paint','wheels','bread','pencil']),
    new Client(4,'Poki','Frogger','+23764782634',['forks','table']),
    new Client(5,'Trem','Poljo','+2374326',['chairs']),
    new Client(6,'Poks','Qwert','+2742648',['carrot','milk','meat']),
    new Client(7,'Tolr','Tolkin','+487256272',['cheese','lemon','watermelon','biscuit']),
    new Client(8,'Wert','Kulkin','+28935726',['water','papper','paint','wheels','bread','pencil']),
    new Client(9,'Poki','Frogger','+23764782634',['forks','table']),
    new Client(10,'Trem','Poljo','+2374326',['chairs'])
]
console.log(Clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(Clients.sort((a,b)=> a.order.length - b.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model,producer,year,speed,eng){
    this.model =  model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.eng = eng;
    this.drive = function(){
        console.log(`Їдемо зі швидкістю ${speed}км на годину `);
    };
    this.info = function() {
        console.log(`модель: ${model},виробник: ${producer},швидкість: ${speed},рік: ${year},двигун: ${eng}`);
    };
    this.maxSpeed = function(newSpeed){
        speed += newSpeed;
        console.log(speed);
    }
    this.changeYear = function(newValue){
        year = newValue;
        console.log(year);
    }
    this.addDriver= function (driver){
        this.driver = driver;
        console.log(`${this.driver}`);
    }
}
let car1 = new Car ('tesla','mask','2022',250,'electro');
console.log(car1);
car1.drive();
car1.info();
car1.maxSpeed(50);
car1.changeYear(1950);
car1.addDriver('Oleh');
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class niceCar{
    constructor(model,producer,year,maxSpeed,eng) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.eng = eng;
    }
    drive(){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info(){
        console.log(`model:${this.model},producer:${this.producer},year:${this.year},maxSpeed:${this.maxSpeed},engine:${this.eng}`);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
        console.log(`${this.maxSpeed}`);
    }
    changeYear(newValue){
        this.year = newValue;
        console.log(`${this.year}`);
    }
    addDriver(driver) {
        this.driver = driver;
        console.log(`${this.driver}`);
    }
}
let car2 = new niceCar('Opel','Germany',2019,270,2.5);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(50);
car2.changeYear(2020);
car2.addDriver('Andrew');
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name,age,legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}
let girls = [
    new Popelushka('Brabara',25,39),
    new Popelushka('Polya',19,35),
    new Popelushka('Ira',22,37),
    new Popelushka('Anna',27,34),
    new Popelushka('Vira',21,36),
    new Popelushka('Karing',23,38),
    new Popelushka('Olena',29,33),
    new Popelushka('Ruslana',18,39),
    new Popelushka('Rando',31,40),
    new Popelushka('Kira',25,32)
]
console.log(girls);
class Prince{
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let prnc = new Prince('Leon',35,32);
for (const girl of girls) {
    if(prnc.shoeSize === girl.legSize){
        console.log(girl.name);
    }
}
let popel = girls.find((girl)=> girl.legSize === prnc.shoeSize);
console.log(popel);

