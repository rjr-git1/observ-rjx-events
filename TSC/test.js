var color = 'fuscia';
console.log(color);
var number = 6;
//console.log(number)
var myArray = ['a', 'b', 'c'];
var array2 = [];
var array3 = [];
var array4 = [];
var array5; // = [[]]
var color2 = "Verde"; // we define color variable of type "Colores"
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var c = Color.BLUE;
var colorName = color[2];
console.log(c);
console.log(colorName);
var miFuncion = function (color2) {
    return "esto es de color " + color2;
};
console.log(miFuncion("Verde"));
var miVehiculo = {
    ruedas: 4,
    motor: 1600,
    color: "verde"
};
console.log(miVehiculo);
var actores = [
    {
        nombre: "John Travolta",
        nacimiento: "18-02-1954",
        peliculas: [
            "Grease"
        ]
    }
];
var Car = /** @class */ (function () {
    function Car(engines, wheels) {
        this.engines = engines;
        this.wheels = wheels;
    }
    Car.prototype.getEngines = function () { return 5; };
    ;
    return Car;
}());
var mini = new Car(4, 4);
console.log(mini);
