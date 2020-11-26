(function (window, document) {

    'use strict'

    const search = document.querySelector('.search'),
        input = search.querySelector('input'),
        icon = search.querySelector('i');


    function iconClick(event) {
        alert("검색어를 입력하세요.");
    }

    function handleClick(event) {
        search.style.transition = '.5s linear';
        input.style.display = 'block';
        input.style.opacity = '1';
        search.classList.add('click');
        icon.addEventListener('click', iconClick);
    }

    if (search) {
        search.addEventListener('click', handleClick);
    }


})(window, document)