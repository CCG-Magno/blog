title: Arreglos
description: Introduccion a los Arreglos
pubDate: July 6, 2025
---
tags:
  - arreglos
  - ciencias
  - computacional
---

Imagina una fila de papel cuadriculado, cada cuadro va separado por la misma distancia y contiene espacio para ser rellenado. En las computadoras, podemos utilizar este ejemplo como metodo de visualización para manejar la memoria del sistema.  Cada celda es asignada una direccion (usualmente en hexadecimal) y puede acomodar bits o bytes que representan data.

Los "arreglos" en las computadoras son caracterizados por un puntero que, valga la redundancia, apunta a la dirección donde comienza la data y un "entero" el cuál indica cuantos elementos puede acoplar.

## Métodos

```c
int main(void) {
	int arreglo[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
	int brreglo* = (int *) malloc(10, sizeof(int));

	// asigna valores
	brreglo[0] = 99;
	arreglo[1] = 99;

	// remueve valores
	brreglo[9] = null;
	arreglo [9] = null;

    // accesa valores
    printf("Valor en posición %d es: %d", 0, arreglo[0]);
	free(brreglo);
}
```

Para acceder a los elementos dentro de ellos se utiliza un poco de aritmética. Se toma la localización base del arreglo y se añade. 
$$ i * tama\tilde{n}o$$

Por ejemplo, si se asume que tenemos un arreglo de elementos enteros 32-bits, y una localizacion 0x00000000:
- el primer elemento se encuentra desde 0x00000000 hasta 0x0000FFFF
- el segundo: 0x00010000 hasta 0x0001FFFF
- el tercero: 0x0002000 hasta 0x0002FFFF

Y así sucesivamente, hasta alcanzar la última posición del arreglo.

Así que podemos emular este comportamiento de la siguiente manera:

$$
elemento_i = direcci\acute{o}n \space base + (i * (tama\tilde{n}o \space elemento))
$$

Donde la "i" demarca la posición que queremos dentro del arreglo y va dentro del siguiente rango: 
	$$[0, n) \implies n \in \Bbb{Z^{+}} $$
```mermaid
graph LR;
0x00000000 --> 0x0000FFFF;
0x0000FFFF --> 0x00010000;
0x00010000 --> 0x0001FFFF;
```

