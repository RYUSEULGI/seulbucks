(function (window, document) { 

  const description = document.querySelector('.p-news');

  let ttl = document.querySelectorAll('.p-news p'),
    index = 1;

  const firstClone = ttl[0].cloneNode(true),
    lastClone = ttl[ttl.length - 1].cloneNode(true);

  firstClone.id = 'firstClone';
  lastClone.id = 'lastClone';

  description.append(firstClone);
  description.prepend(lastClone);

  const slideHeight = ttl[index].clientHeight;

  description.style.transform = `translateY(${-slideHeight * index}px)`;

  function startSlide() {
    setInterval(moveNext, 2000);
  }

  function moveNext() {
    index++;
    description.style.transform = `translateY(${-slideHeight * index}px)`;
    description.style.transition = '.7s';
  }

  description.addEventListener('transitionend', function () {
    let ttl = document.querySelectorAll('.p-news p');

    if (ttl[index].id === firstClone.id) {
      description.style.transition = 'none';
      index = '1';
      description.style.transform = `translateY(${-slideHeight * index}px)`;
    }
  });

  startSlide();


})(window, document)