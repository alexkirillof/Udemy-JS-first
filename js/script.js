/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "aaa",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим sss",
        "Бэтмен"
    ]
};

const rekl = document.querySelectorAll('.promo__adv img'),
            bgimg = document.querySelector('.promo__bg'),
           genre = bgimg.querySelector('.promo__genre'),
           films = document.querySelector('.promo__interactive-list'); 
         


rekl.forEach(item => {
    
    item.remove();
});
genre.textContent = "Драма";
bgimg.style.cssText = "background: url('img/bg.jpg');background-repeat:no-repeat; background-position:center;background-size:cover";

films.innerHTML = " ";

movieDB.movies.forEach((item,j)=>{
    films.innerHTML += `<li class="promo__interactive-item">${j+1}. ${item}
    <div class="delete"></div>
</li>`;
});