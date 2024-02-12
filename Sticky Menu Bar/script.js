let nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    if(window.scrollY>= 186){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
});