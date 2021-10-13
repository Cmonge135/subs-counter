const counter = document.querySelector('.counter');
const odometer = new Odometer({
    el: counter,
    animation: 'count',
    duration: 3000
})

counter.innerHTML = 3587;