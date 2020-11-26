(function (window, document) {
        'use strict';

        const prom_slider = document.querySelector('.prom_slider'),
                prom_slides = document.querySelector('.prom_slides'),
                prevBtn = document.getElementById('prev-Btn'),
                nextBtn = document.getElementById('next-Btn');

        let prom_slide = document.querySelectorAll('.prom_slide'),
                index = 1,
                slideID;

        const firstClone = prom_slide[0].cloneNode(true),
                lastClone = prom_slide[prom_slide.length - 1].cloneNode(true);

        firstClone.id = 'firstClone';
        lastClone.id = 'lastClone';

        prom_slides.append(firstClone);
        prom_slides.prepend(lastClone);

        const slideWidth = prom_slide[index].clientWidth;
        prom_slides.style.transform = `translateX(${-slideWidth * index}px)`
        // console.log(prom_slide);

        function startSlide() {
                slideID = setInterval(function () {
                        moveNext();
                }, 2000);
        }

        prom_slides.addEventListener('transitionend', function () {
                prom_slide = document.querySelectorAll('.prom_slide');
                if (prom_slide[index].id === firstClone.id) {
                        prom_slides.style.transition = 'none';
                        index = 1; //index 초기화
                        prom_slides.style.transform = `translateX(${-slideWidth * index}px)`;
                }
                if (prom_slide[index].id === lastClone.id) {
                        prom_slides.style.transition = 'none';
                        index = prom_slide.length - 2;
                        prom_slides.style.transform = `translateX(${-slideWidth * index}px)`;
                }
        });

        function movePrev() {
                prom_slide = document.querySelectorAll('.prom_slide');
                if (index <= 0) return;
                index--;
                prom_slides.style.transform = `translateX(${-slideWidth * index}px)`;
                prom_slides.style.transition = '.7s';
        }

        function moveNext() {
                prom_slide = document.querySelectorAll('.prom_slide');
                if (index >= prom_slide.length - 1) return;
                index++;
                prom_slides.style.transform = `translateX(${-slideWidth * index}px)`;
                prom_slides.style.transition = '.7s';
        }

        prom_slider.addEventListener('mouseenter', function () {
                clearInterval(slideID);
        });
        prom_slider.addEventListener('mouseleave', startSlide);

        nextBtn.addEventListener('click', moveNext);
        prevBtn.addEventListener('click', movePrev);

        startSlide();

})(window, document)