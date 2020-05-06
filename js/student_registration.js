var login = document.getElementById('login_form');
var loginForm = document.getElementById('login_form2');
var loginBtn = document.getElementById('gotoLogin');

var register = document.getElementById('registration_form');

document.getElementById('jumpToRegister').addEventListener('', function(){
   login.style.display = 'none';
   register.style.display = 'block';
 });

function progressBar(value){
  if(value){
    document.getElementById('loader').style.display = 'block';
    document.getElementById('parent').style.opacity = '0.5';
  }else{
    document.getElementById('loader').style.display = 'none';
    document.getElementById('parent').style.opacity = '1';
  }
}
progressBar(false);


loginBtn.addEventListener('click', function(){
 
  var initial = document.getElementById('initials').value;
  
  var name = document.getElementById('name').value;
  var mobile = document.getElementById('mobile').value;
  var address1 = document.getElementById('address1').value;
  var email = document.getElementById('email').value;
  var pwd = document.getElementById('pwd').value;
  var status = document.getElementById('login_status');
  var address2 = document.getElementById('address2').value;
  var zipcode = document.getElementById('zipcode').value;
  var gender = document.getElementById('gender').value;
  var name_letters = /^[A-Za-z ]+$/;
  var address_letters = /^[0-9a-zA-Z ,]+$/;
  var zipcode_numbers = /^[0-9]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneno = /^\d{10}$/;
  if(email.length===0 || pwd.length===0 ||gender.length===0||zipcode.length===0|| initial.length===0 || name.length===0 || mobile.length===0 || address1.length===0){
    
    status.style.display = "block";
    status.innerHTML = "Please fill all the input fields !";
  }else{
    if(!email.match(mailformat)){
      status.style.display = "block";
      status.innerHTML = "Please enter email in correct format !";
      
    }else{
      if(pwd.length < 8){
        status.style.display = "block";
        status.innerHTML = "Password length should be 8 or more than 8 !";
    }else{
      if(!name.match(name_letters)){
        status.style.display = "block";
        status.innerHTML = "Name must have alphabet characters only";
       
    }else{
      if(!address1.match(address_letters)){
        status.style.display = "block";
        status.innerHTML = "Address1 must have alphanumeric characters only";
        
    }else{
      if(!mobile.match(phoneno)){
        status.style.display = "block";
        status.innerHTML = "please enter valid mobile number";
        
    }else{
      if(!address2.match(address_letters)){
        status.style.display = "block";
        status.innerHTML = "Address2 must have alphanumeric characters only";
        
    }else{
      if(!zipcode.match(zipcode_numbers)){
        status.style.display = "block";
        status.innerHTML = "ZIP code must have numeric characters only";
        
        
      }else{
        status.style.display = "none";
        status.innerHTML = "";

        
        login.style.display = 'none';
        register.style.display = 'block';
        
        document.getElementById("insert_name").innerHTML='Name : '+ initial+ ' '+name;
        document.getElementById("insert_gender").innerHTML= 'Sex: '+ gender;
        document.getElementById("insert_email").innerHTML= 'Email : '+ email;
        document.getElementById("insert_password").innerHTML='Password : '+ pwd;
        document.getElementById("insert_mobile").innerHTML= 'Mobile : '+mobile;
        document.getElementById("insert_address1").innerHTML= 'Address line 1 : '+address1 ;
        document.getElementById("insert_address2").innerHTML= 'Address line 2 : '+address2 ;
        document.getElementById("insert_zipcode").innerHTML= 'Zipcode : '+zipcode ;
      }
    }
  }}}}}
}
});
