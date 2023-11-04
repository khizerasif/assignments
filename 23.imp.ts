let coffee: string = 'cappuccino';
let isMorning: boolean = true;
let dayOfWeek: string = 'Monday';
let customerAge: number = 30;
let programmingLanguage: string = 'Java';

console.log("Is coffee 'espresso'? I predict False.");
console.log(coffee === 'espresso');

console.log("Is it morning? I predict True.");
console.log(isMorning); 

console.log("Is today 'Monday'? I predict True.");
console.log(dayOfWeek === 'Monday'); 

console.log("Is customer's age over 25? I predict True.");
console.log(customerAge > 25);

console.log("Is programming language 'Python'? I predict False.");
console.log(programmingLanguage === 'Python'); 

console.log("Is coffee not 'latte'? I predict True.");
console.log(coffee !== 'latte'); 

console.log("Is it afternoon? I predict False.");
console.log(!isMorning); 

console.log("Is today 'Sunday'? I predict False.");
console.log(dayOfWeek === 'Sunday'); 

console.log("Is customer's age less than 18? I predict False.");
console.log(customerAge < 18);
