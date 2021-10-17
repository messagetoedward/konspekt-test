// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//          return i;;
//     }
//   }
//   // Change code above this line
// }

// console.log(findNumber(16, 35, 7));

// function includes(array, value) {
//   // Change code below this line
//     for (let singleArray of array) {
//         if (singleArray === value) {
//             return true;
//         }
//         // else {
//         //     return console.log("not found");
//         // }
        
//     }
//    return false;
  
  
  
  
    // for (let i = 0; i < array.length; i++) {
    //     //  console.log(array[i]);
    //     if (array[i] === value) {
    //         return console.log(array[i]);
    //     }
    //     return console.log('not found');
    // }
    // }
  // Change code above this line

// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//     biggerNumber = num1
// } else {
//     biggerNumber = num2
// }
// console.log(biggerNumber)
// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber);

// let clientCounter = 5;
// const maxClients = 28;

// while (clientCounter < maxClients) {
//     clientCounter += 1;
//      console.log(clientCounter);
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i++) {
//     sum += i;
// }
// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i++) {
//     console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);

//     if (i === 3) {
//         console.log("Нашли число 3 прерываем цикл")
//         break;
//     }
// }
// console.log("Лог после цикла")

// const number = 10;
// for (let i = 0; i < number; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Нечетное i: ", i);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clientsNew = ["Mango", "Ajax", "Poly"];

// for (const client of clientsNew) {
//   console.log(client);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Ed";
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент уже зарегестрирован";
//         break;
//     }
//     message = "Клиент не доступен"
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Числа больше чем ${threshold} : ${numbers[i]}`);
// }

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry"

// const hasFruits = redFruits.includes(fruit);

// if (hasFruits) {
// console.log(`${fruit} is a red fruit`);
    
// }

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors);

// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(1, 1, "Python");
// console.log(languages);

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const userLocation = user.location;
// console.log(userLocation); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола";
// console.log(user);

// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.name);

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log(this);
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     }
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.addBook("Test");
// bookShelf.addBook("Test-2")
// console.log(bookShelf.getBooks()); // {books: ['The Last Kingdom'], getBooks: f}
// bookShelf.removeBook("Test");
// console.log(bookShelf.getBooks());

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//    console.log(key, book[key]);
// }

// const animal = {
//     legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//         console.log(key, dog[key], "Is own property");
//     }
//     else {
//         console.log(key, dog[key], "Is not own property");
//     }
//     // console.log(key, dog[key], dog.hasOwnProperty(key));
// }

// const booklength = {
//     length: 600,
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   booklength,
// };

// for (const key in book) {
//     console.log();
//     if (book.hasOwnProperty(key)) {
//         console.log(key, book[key]);
//     }
//     else {
//         console.log(key, "This is not own property");
//     }
// }
// ----------==========----------

// const booklength = {
//     length: 600,
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   booklength,
// };

// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//     console.log(key, book[key]);
// }

// console.log("--===--");

// const values = Object.values(book);
// console.log(values);

// ----------==========----------

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// console.log(values);

// let total = 0;

// for (const value of values) {
//     console.log(value);
//     total += value
// }
// console.log("Sum", total);

// ----------==========----------

// const booklength = {
//     length: 600,
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   booklength,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);

// ----------==========----------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// console.log(...books);

// for (const book of books) {
//     console.log(book);
//     // console.log(book);
//     // console.log(book.title);
// }

// const bookNames = [];

// for (const book of books) {
//     // bookNames.push(book.title)
//     // bookNames.push(book.author)
// }

// console.log(bookNames);

// let totalRating = 0;
// for (const book of books) {
//     totalRating += book.rating;
//     console.log(totalRating);
// }

// const avarageRating = (totalRating / books.length).toFixed(1);
// console.log(avarageRating);

// ----------==========----------

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ----------==========----------

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ----------==========----------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };


// for (const key in book) {
//     console.log(key, book[key]);
// }

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

// ----------==========----------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//     const { title, author, rating } = book;
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ----------==========----------

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes }
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ----------==========----------

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// ----------==========----------

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// console.log(multiply);

// ----------==========----------

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log("first", firstNumber); // Значение первого аргумента
//   console.log("second", secondNumber); // Значение второго аргумента
//   console.log("other", otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ----------==========----------

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// ----------==========----------

// const test = [1, 2, 3, 4];
// const [first, ...otherArgs] = test;

// console.log(first);
// console.log(otherArgs);

// ----------==========----------

// function doStuffWithBook(book) {
//   // Делаем что-то со свойствами объекта
//   console.log(book.title);
//     console.log(book.numberOfPages);
    
//     for (const key in book) {
//         console.log(key, book[key]);
//     }
//   // И так далее
// }

// // ✅ Всё понятно
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   public: true,
// });

// ----------==========----------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// console.log(lastTag);

// ----------==========----------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };
// // apartment["location"] = location;
// console.log(apartment);

// ----------==========----------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }

// console.log(keys);
// console.log(values);

// ----------==========----------

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const obj in object) {
//         if (object.hasOwnProperty(obj)) {
//             propCount = Object.values(object).length;
//         }
//     }
//     console.log(propCount);
//   // Change code above this line
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// ----------==========----------

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key, book[key]);
//   // Значение свойства
// }

// ----------==========----------

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//     const keys = Object.keys(object);
//     for (const key of keys) {
//         object.hasOwnProperty(key);
//             propCount += 1;
//     }
//     console.log(propCount);

//   return propCount;
//   // Change code above this line
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// ----------==========----------

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//  const values = Object.values(salaries);
//     for (const value of values) {
//         // console.log(value);
//         totalSalary += value;
//     }
//     console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

// ----------==========----------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ----------==========----------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         // console.log(product.name, product.price);

//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null
    


//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// ----------==========----------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const propNames = [];

//     for (const product of products) {
//         if (product[propName]) {
//             propNames.push(product[propName]);
//         }
//     }
//     return propNames
//     // const values = Object.values(propName);
//     // console.log(values);
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// ----------==========----------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let total = 0;
//     for (const product of products) {
//         if (productName === product.name) {
//             total = product.price * product.quantity;
//             return total;
//         }
// }
//     return 0;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// ----------==========----------

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);

// ----------==========----------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const newData = {
//     completed: false, priority, category, ...data
// };
//     console.log(newData);
//     return newData;
//   // Change code above this line
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// ----------==========----------

// // Change code below this line
// function add(...args) {
//     let total = 0;
//     for (const arg of args) {
//         // console.log(arg);
//         total += arg;
//     }
//     return total;
//   // Change code above this line
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// ----------==========----------


// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//     for (const arg in args) {
//         // console.log(args[arg]);
//         if (firstNumber < args[arg]) {
//             total += args[arg]
//         }
//  } 
//   return total;
//   // Change code above this line
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// ----------==========----------

// Change code below this line
// function findMatches([...arrays], ...numbers) {
//     // console.log(arrays);
//     // console.log(numbers);
//   const matches = []; // Don't change this line
//     for (const number of numbers) {
//         for (const array of arrays) { 
//             if (number === array) {
//                 matches.push(array)
//             }
//         }
//     }
//     console.log(matches);
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// ----------==========----------

// const bookShelf = {
//   // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//     return "Returning all books";
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//         return `Deleting book ${bookName}`;
//   },
//     addBook(bookName) {
//     console.log(`Adding book ${bookName}`);
//     return `Adding book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         const oldNameIndex = this.books.indexOf(oldName);
//         this.books.splice(oldNameIndex, 1, newName);
//         return `Updating book ${oldName} to ${newName}`;
//     }
//   // Change code above this line
// };
// bookShelf.removeBook("The last kingdom");
// bookShelf.removeBook("Red sunset");
// bookShelf.addBook("Haze");
// bookShelf.updateBook("Sands of dune", "Dune")
// console.log(bookShelf.books);

// ----------==========----------

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
//       console.log(this.books);
//       return this.books;
//     // Change code above this line
//     },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune")

// ----------==========----------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//     getPotions() {
//     return this.potions;
//     },
        
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
        
//     removePotion(potionName) {
//         let potionIndex = -1;
//             for (const potion of this.potions) {
//                 if (potionName === potion.name) {
//                     potionIndex = this.potions.indexOf(potion);
//                 }
//             }
//             if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//             }
//     this.potions.splice(potionIndex, 1);
//     },
        
//     updatePotionName(oldName, newName) {
//         let potionIndex = -1;
//         for (const potion of this.potions) {
//             if (oldName === potion.name) {
//                 potionIndex = this.potions.indexOf(potion);
//             }
//         }
//             if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//             }
//         const newPotion = this.potions[potionIndex];
//         newPotion.name = newName
        
//     this.potions.splice(potionIndex, 1, newPotion);
//   },
//   // Change code above this line
// };

// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// // atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// // atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

// console.log(atTheOldToad.potions);

// ----------==========----------

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// ----------==========----------

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ----------==========----------

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ----------==========----------

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// // console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// // console.log(average); // Массив объектов с именами Поли и Хьюстон

// ----------==========----------


// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// ----------==========----------

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ----------==========----------

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index, array) {
//     console.log(`Index ${index} with number ${number} and total ${array}`);
// })

// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// const numbers = [5, 10, 15, 20, 25];
// const newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] > 15) {
//         newArray.push(numbers[i])
//     }
// }

// const newArray = numbers.filter(value => value > 15);
// console.log(newArray);

// ----------==========----------

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const upperCase = planets.map(planet => planet.toLocaleUpperCase());
// console.log(upperCase);

// const lowerCase = planets.map(planet => planet.toLowerCase());
// console.log(lowerCase);

// const splitCase = planets.map(planet => planet.split(""))
// console.log(splitCase);

// ----------==========----------

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const studentName = students.map(student => student.name);
// console.log(studentName);

// let avarageScore = 0;
// const studentScore = students.map(student => {
//     return (avarageScore += student.score)
// });

// console.log(avarageScore);

// ----------==========----------

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//             if (!this.pizzas.includes(pizzaName)) {
//                 return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//             } return onSuccess(pizzaName, makePizza);
//     }
// }


// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError)); 
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// ----------==========----------

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//     numbers.forEach(number => {
//         if (value < number) {
//           filteredNumbers.push(number)
//       }
//     })
//         console.log(filteredNumbers);


    
//     // numbers.forEach(function (number) {
//     //     if (value < number) {
//     //         filteredNumbers.push(number)
//     //     }
//     // })

//   // Change code above this line
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);

// ----------==========----------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//     firstArray.forEach(number => {
//         // console.log(number);
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     });
//     console.log(commonElements);
    
// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //   }

//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ----------==========----------


// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];
// 	numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newArray.push(number + value)
//         } else newArray.push(number)
//     })
//     console.log(newArray);
//     return newArray;
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);

// ----------==========----------


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// ----------==========----------

// const iStudyJS = {t: 5};
// const value = [6];
// function Component() { }
// console.log(Component.prototype);
// console.log(Component.__proto__);
// console.log(Component.__proto__ === Component.__proto__)

const value = 5;
console.log(value.__proto__.__proto__.__proto__ === Object.prototype.__proto__);
console.log(value.__proto__.__proto__.__proto__);
// console.log(value.prototype);
// console.log(Function.prototype);