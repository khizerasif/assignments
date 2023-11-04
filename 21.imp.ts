
interface Fruit {
    name: string;
    color: string;
    taste: string;
  }
  
  
  const fruits: Fruit[] = [
    { name: "Apple", color: "Red", taste: "Sweet" },
    { name: "Banana", color: "Yellow", taste: "Sweet" },
    { name: "Orange", color: "Orange", taste: "Citrusy" }
  ];
  
  
  fruits.forEach(fruit => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
  });
  