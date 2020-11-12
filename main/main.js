const mySiema = new Siema({
    selector: '.siema',
});

const siemas = document.querySelectorAll('.siema');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());