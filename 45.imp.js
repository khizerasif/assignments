function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < args.length; i += 2) {
        var key = args[i];
        var value = args[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional details
var carInfo = createCar('Toyota', 'Camry', 'color', 'red', 'year', 2023);
// Print the Object returned
console.log(carInfo);
