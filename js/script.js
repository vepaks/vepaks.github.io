'use strict';

const codeList = {
    code: ['<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
        '<script src="https://gist.github.com/vepaks/d25560bc5d81a94b6597bc7ca14c0cdf.js"></script>',
    ]
};

let entryModule = document.getElementById('entry_module');
let simpleText = document.querySelector('.header-discription');
let listOfModule = document.querySelectorAll('.list-group-item');


listOfModule.forEach(item => {
    console.log(item);
});

function hover() {
    listOfModule.forEach(item => {
        item.remove();
    });

    // simpleText.textContent = 'OK!';
}


entryModule.addEventListener('click', hover);



