//PARTE 1

//N°1
interface Direccion{
    calle: string,
    ciudad: string,
    pais: string,
}
interface Estudiante{
    nombre: string,
    edad: number,
    curso: string,
    direccion:Direccion,
    mostrarInfo: ()=>string ,
}

const estudiante:Estudiante = {
nombre: 'Juan',
edad: 22,
curso: 'Matemáticas',
direccion: {
calle: 'Av. Siempre Viva',
ciudad: 'Bogotá',
pais: 'Colombia'
},
mostrarInfo() {
return `${this.nombre} estudia ${this.curso} en
${this.direccion.ciudad}`;
}
};
console.log(estudiante.mostrarInfo());

//N°2
interface Producto{
    id:number,
    nombre: string,
    precio: number,
    stock: number,
    mostrarDetalle:() => string,
}

const producto:Producto = {
id: 1,
nombre: 'Laptop',
precio: 3500,
stock: 10,
mostrarDetalle() {
return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
unidades disponibles`;
}
};
console.log(producto.mostrarDetalle());

//N°3
interface Pelicula{
    titulo:string,
    director: string,
    duracion:number,
    genero: string,
    reproducir:()=> string,
}
const pelicula:Pelicula = {
titulo: 'Avengers: Endgame',
director: 'Anthony y Joe Russo',
duracion: 181,
genero: 'Acción',
reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por
${this.director}`;
}
};
console.log(pelicula.reproducir());

//N°4
interface Vehiculo{
    marca:string,
    modelo:string,
    anio:2022,
    encender:()=>string,
}

const vehiculo:Vehiculo = {
marca: 'Toyota',
modelo: 'Corolla',
anio: 2022,
encender() {
return `${this.marca} ${this.modelo} está encendido`;
}
};
console.log(vehiculo.encender());

//N°5
interface Usuario{
    username: string,
    password: string,
    roles: string[],
    login: () => string,
}

const usuario:Usuario = {
username: 'admin01',
password: '123456',
roles: ['admin', 'editor'],
login() {
return `Usuario ${this.username} ha iniciado sesión con roles:
${this.roles.join(', ')}`;
}
};
console.log(usuario.login());

//PARTE 2
let myValue: number | string | true = 10; //
console.log(myValue)

let myBoolean: boolean = true; // La escritura Correcta es boolean y no Boolean y difiere en eso
console.log(myBoolean)

let healthPoints: number = 150; // Se le estaba pasando "150" es decir un string a una variable que solo acepta datos de tipo number
console.log(healthPoints)

let otherMultipleDataType: number | boolean | "myTag" = "myTag"; // Se estaba pasando "otraEtiqueta" en lugar de myTag y al estar escrito diferente no se reconoce el tipo de dato
console.log(otherMultipleDataType)

let myVar;
myVar = 123;
myVar = true;
myVar = "texto"; 
myVar = {};       //La Variable Let no se encuentra tipada lo correcto seria tiparla y que reciba solo un valor, pero de igual Funciona
console.log(myVar)

const myConstant: number = 25; //Las constantes se deben inicializar en este caso no estaba inicializada por lo tanto daba error
console.log(myConstant)

let inferedDataType = "Texto inicial";
inferedDataType = '123'; //Se inicializo de tipo string por lo tanto no se le puede cambiar el valor a uno númerico
console.log(inferedDataType)

const isActive: boolean = true; // Una Constante que está tipada como booleano no se le puede asignar un número
console.log(isActive)

let mixed: number | string = '200'; // La variable solo admite datos de tipo number o string y se le está pasando un valor booleano
console.log(mixed)

let correccion: string = "Hola"; //While es una palabra reservada por lo tanto se le debe cambiar el nombre a la Variable
console.log(correccion)

let myNumber: number = 10; //El tipo de dato estaba digitado como numer pero correctamente para que sea tomado como un tipo de dato debe ser number
console.log(myNumber)

let numeros: number[] = [1, 2, 3]; // Dentro del arreglo se le estaba pasando un string pero este estaba definido como arreglo de tipo number
console.log(numeros)

let tupla: (string|number) [] = ["Hola"]; // los tipos de datos para un arreglo se deben especificar con () no dentro de las [] ademas de ello los tipos de datos deben estar separados por | no por ,
console.log(tupla)

let otraTupla: (string|boolean) []= [true, "Hola"]; // los tipos de datos para un arreglo se deben especificar con () no dentro de las [] ademas de ello los tipos de datos deben estar separados por | no por ,
console.log(otraTupla)

let texto = "Hola mundo";
texto = 'null'; //No se puede pasar un valor nulo a una variable de tipo string
console.log(texto)

let color: "rojo" | "verde" | "azul" = "rojo"; //Dentro de los valores admitidos no se reconoce el color amarillo por lo tanto se lo cambia por uno de los valores aceptados
console.log(color)

let valor: any = 'hola';
valor.toUpperCase();  //El método solicitado cambia de minusculas a mayusculas en este caso como el valor es un numero no lo hace
console.log(valor)
