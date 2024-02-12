let words = document.getElementById('words');
let char = document.getElementById('char');
let textbox = document.getElementById('textbox');

textbox.addEventListener('input', function(){
    let inp = this.value;
    let len = inp.length;
    char.innerHTML = len;

    inp.trim();
    let arr = inp.split(" ");

    let cleanArray = arr.filter(function(ele){
        return ele!="";
    })

    let len1 = cleanArray.length;
    words.innerHTML = len1;
})