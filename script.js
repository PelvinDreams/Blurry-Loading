const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


let load = 0

// load every 30 milliseconds
let int = setInterval(blurring, 30);

function blurring () {
    load++;


    // if the load is greater than 99 then we want to stop that
    if (load > 99) {
        clearInterval(int)
    }
   loadText.innerHTML = `${load}%`
    // map a range of numbers to another range of numbers
loadText.style.opacity = scale(load, 0, 100, 1, 0)
 bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
};

 const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
 }