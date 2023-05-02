


var password ;


var pass0 = "admin"
var ayman = "ayman"
var tonoy = "tonoy"
var aryan = "aryan"


password=prompt('Enter Security Code !');


if(password==pass0){

    alert("Unauthorized Login Detected")

}
else if(password==ayman){
    window.location="ayman.html"
}

else if(password==tonoy){
    window.location="tonoy.html"
}
else if(password==aryan){
    window.location="aryan.html"
}
else{

    window.location="unautorizedlogin.html"
}




    
    

