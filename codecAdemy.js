/* Challenge => Météo à Kelvin :
 Convertissons Kelvin en Celsius, puis en Fahrenheit.Puis en Newton : */

// creation de variable et affectation de valeur :
const kelvin = 0;

// Convertissons Kelvin en Celsius :
let celsius = kelvin - 273;
// calculer Fahrenheit :
// Fahrenheit = celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;
// arrondissez la température Fahrenheit et affecter le resultat a la variable fahrenheit :
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// ---------------------------------->
// Newton = Celsius * (33/100)
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);

// Challenge => Dog Years :

//  cree une variable myAge et affecter la ton age :
const myAge = 38;

// cree une variable earlyYears et affecter la valeur 2-y:
let earlyYears = 2;
earlyYears *= 10.5;
//  earlyYears = earlyYears * 10.5 ;

// calcule de la variable laterYears :
let laterYears = myAge - 2;

//  calcule du nombre d'années de chien :

laterYears *= 4;
console.log(laterYears);

// calcule de myAgeInDogYears :
let myAgeInDogYears = earlyYears + laterYears;

// Convertissez le string en minuscule :
let myName = "LAMIA";
myName = myName.toLowerCase();

// Utilisez l'interpolation de chaîne pour afficher votre nom et votre âge en années de chien :
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
