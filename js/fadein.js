(function (window, document) {
    'use strict'

    const fadein = document.querySelectorAll('.fade-in'),
            slide = document.querySelectorAll('.slide');

    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
    };

    const appearScroll = new IntersectionObserver(function (entries, appearScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadein.forEach(fadein => {
        appearScroll.observe(fadein);
    });

    slide.forEach(slide => {
        appearScroll.observe(slide);
    });

})(window, document)