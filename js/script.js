'use strict';

const codeList = {
    code: ['<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
    ]
};


const listOfEntry = {
    list: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let entryModule = document.getElementById('entry_module');
let simpleText = document.querySelector('.header-discription');
let listOfModule = document.querySelectorAll('.list-group-item');

listOfModule.innerHTML = "";

function hover() {

    listOfEntry.list.forEach((film, i) => {
        listOfModule.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

}


entryModule.addEventListener('click', hover);