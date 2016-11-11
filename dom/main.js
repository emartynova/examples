console.log(document);
console.log(document.body);
console.log(document.parentNode); //вернёт null, document самый верхний
console.log(document.children);


var pageH1 = document.querySelector('h1');
pageH1.title = 'dd';
pageH1.className = 'dd';
pageH1.classList.add('dd1');
pageH1.classList.toggle('toggle'); //добавляет если нет, убирает есть есть