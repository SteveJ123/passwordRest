let password;
let repassword;


function displayPasswordMatch(){
    document.querySelector(".password-set-container").style.display = "none";
    document.querySelector(".password-changed-container").style.display = "block";
}


function displayPasswordDoNotMatch(){
    document.querySelector(".password-do-not-match").style.display = "block";
}

function checkPassword(){
    console.log("inside");
    if(password === repassword){
        console.log("same"); 
        displayPasswordMatch();       
    }else{
        console.log("not match");
        displayPasswordDoNotMatch();
    }
}

function passwordValue(){   
    password = document.querySelector(".new-password-text").value;
    repassword = document.querySelector(".re-new-password-text").value;
    checkPassword();
    
}