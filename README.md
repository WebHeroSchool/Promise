---
# JavaScript Best Practice Guide. О том, как красиво и правильно писать на JavaScript. 
---

:relaxed:  **Использовать `===` вместо `==`** 

В JavaScript существует два разных типа операций сравния: `=== / !== и == / !=` 
**Считается хорошим тоном всегда использовать первую пару для сравнения.**
“Если два операнда одного типа и значения, то `===` вернет "true", а `!==` "false”


:smile:  **Перемещать скрипты вниз страницы**

Основная цель этого совета — заставить страницу грузиться как можно быстрее. Когда браузер грузит скрипт он не продолжит рендеринг пока весь файл не будет загружен. Таким образом пользователю придется ждать дольше.
Если ваши JS скрипты служат для добавления функционала — например, обработки кликов кнопки то вам стоит перенести скрипты вниз поставив их перед закрывающимся тегом body.
```
<p>Вот и все! теперь вы знаете о том, кто убил герцогиню.</p>  
<script type="text/javascript" src="path/to/file.js"></script>  
<script type="text/javascript" src="path/to/anotherFile.js"></script>  
</body>  
</html>
```
:wink:  **Объявлять переменные для 'for' вне циклов**

Когда выполняете долгий цикл «for» не заставляйте делать движок больше работы чем нужно:
```
for(var i = 0; i < someArray.length; i++) {  
   var container = document.getElementById('container');  
   container.innerHtml += 'my number: ' + i;  
   console.log(i);  
}  

```
Обратите внимание как мы должны высчитываем длинну массива для каждой итерации и как мы обходим дерево для поиска #container:
```
var container = document.getElementById('container');  
for(var i = 0, len = someArray.length; i < len;  i++) {  
   container.innerHtml += 'my number: ' + i;  
   console.log(i);  
}  
```
:heart_eyes:  **Уменьшать количество глобальных переменных**

**Грустный пример:**
```
let name = 'Sveta';  
let lastName = 'Sve';  
  
function doSomething() {...}  
  
console.log(name); // Jeffrey -- or window.name  
```

**Хороший:**
```
let nameInOne = {  
   name : 'Sveta',  
   lastName : 'Sve',  
   doSomething : function() {...}  
}  
console.log(DudeNameSpace.name); // Jeffrey  
```
Мы уменьшили количество глобальных переменных до одного, странным образом названного, обьекта «DudeNameSpace».

:smirk: **Комментировать код**

Кажется, что это лишнее, но нет. Что случится когда вы вернетесь к проекту через несколько месяцев чтобы обнаружить что не помните что этот кусок кода делаете.  Всегда, повторяю всегда комментируйте **важные части** кода. 
// Cycle through array and echo out each name.   
for(var i = 0, len = array.length; i < len; i++) {  
   console.log(array[i]);  
}  

Но не обязательно комментить все подряд! Например, вот в этом кусочке комментарии явно мешают читабельности кода: 
```
let name; // add name
name = "Gera"; // add name Gera
function GeraGoToSchool = {} // to create function to make step Gera
```

:smiley:  **Использовать `{}` вместо `New Object()`**

Есть несколько путей для создания объектов в JavaScript. Возможно наиболее традиционный это использование конструктора «new»:
```
let o = new Object();  
o.name = 'Masha';  
o.lastName = 'Ma';  
o.someFunction = function() {  
   console.log(this.name);  
}  
```

Хотя этот метод получил штамп «плохой практики» он таковой не является. Вместо него можно использовать более надежный метод c литералом обьекта:
```
let o = {  
   name: 'Masha',  
   lastName = 'Ma',  
   someFunction : function() {  
      console.log(this.name);  
   }  
};  
```

Заметка — если вы хотите создать пустой обьект, то {} сделает это

let o = {};  

:yellow_heart:  **Использовать [] вместо new Array()**

**Правило выше годится и для массивов.**
```
var a = new Array();  
a[0] = "Joe";  
a[1] = 'Plumber';  

```
Маст хев: 
```
var a = ['Joe','Plumber'];  
```
>«Распространенная ошибка в JavaSсript программах — использование объекта, где нужен массив или массива где нужен обьект. Простое правило: когда названия свойств это небольшие последовательные числа — используйте массив. В противном случае — объект.

**(с)Douglas Crockford**


:yum:  **Вместо `let` / `const` использовать запятые в длинном списке переменных**
```
let someItem = 'some string';  
let anotherItem = 'another string';  
let oneMoreItem = 'one more string';  
```

Маст хев:

```
let someItem = 'some string',  
    anotherItem = 'another string',  
    oneMoreItem = 'one more string';  
```
Этот код должен говорить сам за себя. Я сомневаюсь что тут есть какие-то подвижки в скорости, но код выглядит чище.

:sparkles:  **Точка с запятой!**

Технически, большинство браузеров позволят вам не использовать их.
```
var someItem = 'some string'  
function doSomething() {  
  return 'something'  
}  
```

Но использование подобную практики потенциально может привести к гораздо более большим и что еще хуже плохо отлавливаемым проблемам.

Ииии! Конечно же, лучше: 
```
var someItem = 'some string';  
function doSomething() {  
  return 'something';  
}  
```
:relieved:  **Читать!**

 Всегда держать книгу по разработке на прикроватной тумбочке. Вот несколько любимых книг автора статьи по JavaScript-у.

>**Object-Oriented JavaScript**
**JavaScript: The Good Parts**
**Learning jQuery 1.3**
**Learning JavaScript**

Данный скрипт создан на основе переведенной статьи Jeffrey Way. Ссылка на русскоязычную статью [тут](https://habr.com/ru/post/175283/).

