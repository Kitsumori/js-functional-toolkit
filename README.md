# js-functional-toolkit

## Ejercicios del libro javascript elocuentemente

### Chapter 4 - Estructuras de datos: Objetos y Arrays

#### Arrays

File: arrayEcersices.js

##### La suma de un rango

La introducción de este libro insinuó lo siguiente como una forma agradable de
calcular la suma de un rango de números:
console.log(sum(range(1, 10)));

Escribe una función range que tome dos argumentos, inicio y fin, y devuelva
un array que contenga todos los números desde inicio hasta fin, incluyendo
fin.

Luego, escribe una función sum que tome un array de números y devuelva la
suma de estos números. Ejecuta el programa de ejemplo y verifica si realmente
devuelve 55.

Como asignación adicional, modifica tu función range para que tome un
tercer argumento opcional que indique el valor de “paso” utilizado al construir
el array. Si no se proporciona un paso, los elementos deberían aumentar en
incrementos de uno, correspondiendo al comportamiento anterior. La llamada
a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. Asegúrate de
que esto también funcione con valores de paso negativos, de modo que range
(5, 2, -1) produzca [5, 4, 3, 2].

##### Reversión de un array

Los arrays tienen un método reverse que cambia el array invirtiendo el orden en el que aparecen sus elementos. Para este ejercicio, escribe dos funciones, reverseArray y reverseArrayInPlace. 
La primera, reverseArray, debería tomar un array como argumento y producir un nuevo array que tenga los mismos elementos en orden inverso.
La segunda, reverseArrayInPlace, debería hacer lo que hace el método reverse: modificar el array dado como argumento invirtiendo sus elementos. Ninguna de las funciones puede utilizar el método reverse estándar.

##### Lista

Como bloques genéricos de valores, los objetos se pueden utilizar para construir
todo tipo de estructuras de datos. Una estructura de datos común es la lista
(no confundir con arrays). Una lista es un conjunto anidado de objetos, donde
el primer objeto contiene una referencia al segundo, el segundo al tercero, y así
sucesivamente:

```javascript
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
```

Una ventaja de las listas es que pueden compartir partes de su estructura.
Por ejemplo, si creo dos nuevos valores {value: 0, rest: list} y {value: -1, rest: list} (siendo list la referencia definida anteriormente), son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos. La lista original también sigue siendo válida como una lista de tres elementos.
Escribe una función arrayToList que construya una estructura de lista como la mostrada cuando se le da [1, 2, 3] como argumento.

También escribe una función listToArray que produzca un array a partir de una lista. 

Agrega las funciones auxiliares prepend, que toma un elemento y una lista y crea una nueva lista que añade el elemento al principio de la lista de entrada, y nth, que toma una lista y un número y devuelve el elemento en la posición dada en la lista (siendo cero el primer elemento) o undefined cuando no hay tal elemento.

##### Comparación profunda

El operador == compara objetos por identidad, pero a veces preferirías comparar
los valores de sus propiedades reales.
Escribe una función deepEqual que tome dos valores y devuelva true solo si
son el mismo valor o son objetos con las mismas propiedades, donde los valores
de las propiedades son iguales cuando se comparan con una llamada recursiva
a deepEqual.

Para saber si los valores deben compararse directamente (usando el operador
=== para eso) o si sus propiedades deben compararse, puedes usar el operador
typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero debes tener en cuenta una excepción tonta: debido a un accidente histórico, typeof null también produce "object".
La función Object.keys será útil cuando necesites recorrer las propiedades
de los objetos para compararlas

### Chapter 5 - Funciones de orden superior

#### Aplanamiento

Utiliza el método reduce en combinación con el método concat para “aplanar”
un array de arrays en un único array que contenga todos los elementos de los
arrays originales.

#### Tu propio bucle

Escribe una función de orden superior loop que proporcione algo similar a una
declaración for loop. Debería recibir un valor, una función de prueba, una
función de actualización y una función de cuerpo. En cada iteración, primero
debe ejecutar la función de prueba en el valor actual del bucle y detenerse si
devuelve falso. Luego debe llamar a la función de cuerpo, dándole el valor
actual, y finalmente llamar a la función de actualización para crear un nuevo
valor y empezar de nuevo desde el principio.
Al definir la función, puedes usar un bucle regular para hacer el bucle real.

#### Everything

Los arrays también tienen un método every análogo al método some. Este
método devuelve true cuando la función dada devuelve true para cada elemento
en el array. En cierto modo, some es una versión del operador || que actúa en
arrays, y every es como el operador &&.

Implementa every como una función que recibe un array y una función de
predicado como parámetros. Escribe dos versiones, una usando un bucle y otra
usando el método some.

#### Dirección de escritura dominante

Escribe una función que calcule la dirección de escritura dominante en una cadena de texto. Recuerda que cada objeto script tiene una propiedad direction
que puede ser "ltr" (de izquierda a derecha), "rtl" (de derecha a izquierda) o
"ttb" (de arriba a abajo).