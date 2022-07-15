// Objects

// basic object using literal notation, primero vacío
// explicar propiedad -> valor
// puede ser primitivo u otro object
// podría agregar una función, contenedor de información
// almacenar otro objecto u array

// const student = {};
// empty object
// console.log(student);

// const student = {
//   firstName: 'Andres',
//   surName: 'Alcaraz',
//   age: 25,
//   isGraduated: false,
//   currentSubjects: ['Math', 'Ethic', 'Physics', 'Sports'],
//   contact: {
//     phone: '+57 31313131313',
//     email: 'andres@mail.com',
//     availableHours: ['8:00', '12:00', '14:00']
//   },
//   getFullName: function() { return this.firstName + this.surName },
//   getFullNameOp2() {
//     return this.firstName + this.surName; // interpolacion de strings
//   }
// };

// console.log(student);
// console.log(student.getFullName());
// console.log(student.getFullNameOp2());

// currentSubjects: [
  //   {
  //     id: '01',
  //     name: 'Math',
  //     teacher: 'Erick'
  //   },
  //   {
  //     id: '02',
  //     name: 'Science',
  //     teacher: 'Nathaly'
  //   },
  //   {
  //     id: '03',
  //     name: 'Sports',
  //     teacher: 'Brian'
  //   },
  //   {
  //     id: '04',
  //     name: 'Ethics',
  //     teacher: 'Sara'
  //   }
  // ],

// // acceso a valores
// const studentName = student.firstName;
// const studentName2 = student['firstName'];

// destructuring
// const { firstName } = student;

// console.log(studentName);
// console.log(studentName2);
// console.log(firstName);

// acceso a valor no definidos
// const notDefined = student.password;
// console.log(notDefined);

// // Sobreescribir valores
// student.isGraduated = true;
// console.log(student);

// // agregar nuevas propiedades
// student.grade = 0.5;
// console.table(student);

// // recorrer un objeto

// explicar que es el object keys
// devuelve un array y por esto se puede iterar posible iteracción
// Object.keys(student);
// Object.values(student);
// Object.entries(student);

// // por claves
// Object.keys(student).forEach((key) => { // o con map, for
//   console.log(key);
// });

// // por valores
// Object.values(student).forEach((val) => {
//   console.log(val);
// });

// // por clave y valor
// Object.entries(student).forEach((entry) => {
//   console.log(` ${entry[0]} ===> ${entry[1]} `);
// });

// creación de objetos con función constructora
// son funciones diseñanas para construir un nuevo objecto.
// donde this se refiere a un objecto recien creado
// function Cellphone(brand, version, so) {
//   this.brand = brand;
//   this.version = version;
//   this.so = so;
//   this.displayVersion = () => {
//     console.log(`${this.version} :o:o`);
//   }
// }

// const redmi = new Cellphone('xiaomi', 2.0, 'android');

// console.table(redmi);
// console.log(redmi.brand);
// redmi.displayVersion();

// Tarea
// | key             | value                 | type    |
// | --------------- | --------------------- | ------- |
// | id              | 45223                 | number  |
// | brand           | CHEVROLET ONIXTURBORS | string  |
// | engine          | 12 valves             | string  |
// | fuel_type       | gasoline              | string  |
// | color           | red                   | string  |
// | height          | 1443                  | number  |
// | weight          | 1731                  | number  |
// | abs             | FALSE                 | boolean |
// | airbags         | TRUE                  | boolean |
// | collision_alert | FALSE                 | boolean |
// | year            | 2010                  | number  |

// 1] Crear un objeto con las siguientes propiedades con el método que prefieras, e imprimirlo por consola
// 2] Agregar las siguientes propiedades al objeto e imprimirlo por consola

// | key             | value                 | type    |
// | --------------- | --------------------- | ------- |
// | insurance       | TRUE                  | boolean |
// | doors           | 4                     | string  |

// 3] Recorrer las entradas del arreglo e imprimirlos con este formato
// key ===> [ value ]

// 4]
// Agregar una función constructora e incluir un metodo que devuelva si el carro cumple con
// revisión de tecnomecanica
