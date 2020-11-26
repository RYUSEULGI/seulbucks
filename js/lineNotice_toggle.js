

//ver.1
(function(window, document){     

    const toggle = document.querySelector('.toggle'),
        toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function(){
        toggle.classList.toggle('on');
        toggleBtn.classList.remove('fa-check-circle');
        toggleBtn.classList.add('fa-chevron-circle-up');
    });

})(window, document)
//ver.2

/* 

(function(window, document){     //전체영역을 더럽히지 않게 구분화 작업
    'use strict';
    
    const toggle = document.querySelector('.toggle'),
            toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    function toggleElements(){
        [].forEach.call(toggle, function(toggle){
            toggle.classList.toggle('on');
        });
    }

})(window, document)  

*/

