# 🪞 Palindrome Checker

Un verificador de **palíndromos** hecho en JavaScript, HTML y CSS.  
Un **palíndromo** es una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios, mayúsculas/minúsculas y símbolos.

Este proyecto cumple con las historias de usuario definidas en el reto de [freeCodeCamp](https://palindrome-checker.freecodecamp.rocks).

---

## 🚀 Funcionalidad

- El usuario puede ingresar un texto en el campo de entrada.
- Al presionar el botón **Check**, el programa verificará si el texto es un palíndromo.
- Si el campo está vacío, aparece un `alert` pidiendo un valor.
- El resultado se muestra debajo, indicando si el texto es o no un palíndromo.

---

## 📋 Historias de Usuario

1. Debes tener un elemento de entrada con `id="text-input"`.
2. Debes tener un botón con `id="check-btn"`.
3. Debes tener un elemento de resultado con `id="result"`.
4. Si el campo está vacío y haces clic en el botón, aparece un `alert` con:
5. Ejemplos de entrada → salida esperada:

| Entrada                         | Salida                                                      |
|---------------------------------|-------------------------------------------------------------|
| `A`                             | `A is a palindrome`                                         |
| `eye`                           | `eye is a palindrome`                                       |
| `_eye`                          | `_eye is a palindrome`                                      |
| `race car`                      | `race car is a palindrome`                                  |
| `not a palindrome`              | `not a palindrome is not a palindrome`                      |
| `A man, a plan, a canal. Panama`| `A man, a plan, a canal. Panama is a palindrome`            |
| `never odd or even`             | `never odd or even is a palindrome`                         |
| `nope`                          | `nope is not a palindrome`                                  |
| `almostomla`                    | `almostomla is not a palindrome`                            |
| `My age is 0, 0 si ega ym.`     | `My age is 0, 0 si ega ym. is a palindrome`                 |
| `1 eye for of 1 eye.`           | `1 eye for of 1 eye. is not a palindrome`                   |
| `0_0 (: /-\ :) 0-0`             | `0_0 (: /-\ :) 0-0 is a palindrome`                         |
| `five|\_/|four`                 | `five|\_/|four is not a palindrome`                         |

---

## 🛠️ Tecnologías

- **HTML5**: estructura de la aplicación.
- **CSS3**: estilos básicos y personalización.
- **JavaScript**: lógica para comprobar palíndromos.

---

## ▶️ Uso

1. Clona este repositorio:
```bash
git clone https://github.com/kikecastillocolombia/palindrome-checker.git
