interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other key-value pairs
  }
  
  function createCar(manufacturer: string, model: string, ...args: any[]): Car {
    let car: Car = {
      manufacturer,
      model
    };
  
    for (let i = 0; i < args.length; i += 2) {
      const key: string = args[i];
      const value: any = args[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required information and additional details
  const carInfo = createCar('Toyota', 'Camry', 'color', 'red', 'year', 2023);
  
  // Print the Object returned
  console.log(carInfo);
  