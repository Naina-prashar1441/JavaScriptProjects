let userName = document.getElementById('userName');
let password = document.getElementById('password');
let flag = 1;

function validateForm(){
    if(userName.value == ""){
        document.getElementById('userError').innerHTML = 'username is empty';
        flag = 0;
    }
    else if(userName.value.length < 3){
        document.getElementById('userError').innerHTML = "Minimum 3 words required";
        flag = 0;
    }else{
        document.getElementById('userError').innerHTML = "";
        flag = 1;
    }

    if(password.value == ""){
        document.getElementById('passError').innerHTML = 'password required';
        flag = 0;
    }else{
        document.getElementById('passError').innerHTML = "";
        flag = 1;
    }
    
    if(flag){
        return true;
    }else{
        return false;
    }
}