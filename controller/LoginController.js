let datUser = []

let thisUser = {uname : "straykids@gmail.com", psw : "straykids123"};
datUser.push(thisUser);

function LoadPage(){
    document.getElementById('loginPanel').style.visibility= "visible";
    document.getElementById('forgotPanel').style.visibility= "hidden";
    document.getElementById('registPanel').style.visibility= "hidden";
    document.getElementById('welcomePage').style.visibility= "hidden";
}

function CekValid(){
    if(datUser.find(u => u.uname == document.getElementById("u_email").value && u.psw == document.getElementById("u_password").value) != undefined){
        console.log("yey login");
        document.getElementById('loginPage').style.visibility= "hidden";
        document.getElementById('welcomePage').style.visibility= "visible";
    }
}

function forgetProccess(){
    console.log("see your email");
}

function RegisterConfirm(){
    console.log("prosese regis");
}

function changePanel (_panel){
    switch(_panel){
        case "login":
            document.getElementById('loginPanel').style.visibility= "visible";
            document.getElementById('forgotPanel').style.visibility= "hidden";
            document.getElementById('registPanel').style.visibility= "hidden";  
            break;
        case "register":
            document.getElementById('loginPanel').style.visibility= "hidden";
            document.getElementById('forgotPanel').style.visibility= "hidden";
            document.getElementById('registPanel').style.visibility= "visible"; 
            break;
        case "forget":
            document.getElementById('loginPanel').style.visibility= "hidden";
            document.getElementById('forgotPanel').style.visibility= "visible";
            document.getElementById('registPanel').style.visibility= "hidden"; 
            break;
    }
}