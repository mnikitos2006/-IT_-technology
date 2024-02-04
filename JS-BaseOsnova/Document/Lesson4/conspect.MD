## Модификации DOM.

### Создание элемента

1) document.createElement(tag) // Создает элемент с заданным тегом
2) document.createTextNode(text) // Создает текстовый узел с заданным текстом

```js
let div = document.createElement('div'); // создали элемент
div.className = "alert"; // добавили к элементу класс
div.innerHTML = "<strong>Внимание!</strong> Вы прочитали важное сообщение!" //добавили в элемент содержимое
```

### Добавление в документ

1) document.body.append(elem)

```js
document.body.append(div);
```

Методы для вставки:
- node.append(...nodes or strings) – добавляет узлы или строки в конец node,
- node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
- node.before(...nodes or strings) –- вставляет узлы или строки до node,
- node.after(...nodes or strings) –- вставляет узлы или строки после node,
- node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

```js
div.before('<p>Привет</p>', document.createElement('hr')); //вставит не как тег а как текст
```

### Альтернативный способ добавления - insertAdjacentHTML/Text/Element

elem.insertAdjacentHTML(where, html)
where:
- "beforebegin" – вставить html непосредственно перед elem,
- "afterbegin" – вставить html в начало elem,
- "beforeend" – вставить html в конец elem,
- "afterend" – вставить html непосредственно после elem

html - это HTML-строка, которая будет вставлена именно «как HTML»

```js
div.insertAdjacentHTML('beforebegin', '<p>Привет</p>')
```

elem.insertAdjacentText(where, text)
text:  вставляется «как текст»,

elem.insertAdjacentElement(where, elem)
elem: вставляется как элемент


### Удаление узлов

node.remove()

Все методы вставки автоматически удаляют узлы со старых мест.

### Клонирование узлов: cloneNode

elem.cloneNode(true) - создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами

elem.cloneNode(false) - клон без дочерних элементов


### Устаревшие методы

parentElem.appendChild(node)
parentElem.insertBefore(node, nextSibling)
parentElem.replaceChild(node, oldChild)
parentElem.removeChild(node)
document.write


Задание 
1) Добавить в форму из предыдущего урока функционал изменения заголовка по нажатию на кнопку,
2) Создать всплывающее окно об успешном входе.
3) Создать всплывающее окно о неправильно введенных данных.
4) Перенести функционал создания формы в js
5) 
Почитать https://learn.javascript.ru/modifying-document