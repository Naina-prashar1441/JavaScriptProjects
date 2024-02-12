let count = 0;

function controller(x){
    count = count + x;
    slideshow(count);
}
slideshow(count);
function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        count = 0;
        num = 0;
    }
    if(num < 0){
        count = slides.length-1;
        num = slides.length-1;
    }
    for(let y of slides){
        y.style.display = 'none';
    }
    slides[num].style.display = 'block';
}