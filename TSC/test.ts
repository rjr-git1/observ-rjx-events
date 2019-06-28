
let color: string = 'fuscia';
console.log(color)
let number:number  = 6;
//console.log(number)
let myArray:string[] =['a','b','c'];
let array2 : Array<string>=[];
let array3:Array<object>=[];
let array4:Array<any>=[];
let array5:Array<Array<string>> // = [[]]

type Colores = "Verde" | "Rojo" | "Azul"; // custom variable type
let color2: Colores = "Verde" // we define color variable of type "Colores"

enum Color{RED,GREEN,BLUE};
let c:Color = Color.BLUE;
let colorName:string = color[2];
console.log(c);
console.log(colorName);


const miFuncion = (color2:Colores):string =>{
    return `esto es de color ${color2}`;
}
console.log(miFuncion("Verde"));


let miVehiculo:{
    ruedas:number,
    motor:number,
    color:string,
} = {
    ruedas:4,
    motor:1600,
    color:"verde"
}
console.log(miVehiculo)

type actor = {nombre:string, nacimiento:string, peliculas: string[]};
let actores : actor[] = [   // or Array<actor>
    {
        nombre: "John Travolta",
        nacimiento : "18-02-1954",
        peliculas:[
            "Grease"
        ]}
 ]
 
 interface Vehicle{ //sort of a class skeleton > bring structure to our code: only properties defined within the interface can be used within a class.
    engines:number,
    wheels:number,
    getEngines():number
 }

 class Car implements Vehicle {
   constructor(public engines:number, public wheels:number){}
    public getEngines():number {return 5};
   }

   let mini = new Car (4,4)
   console.log(mini)