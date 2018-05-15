var person=[];
function changeName(user){
  return user;
};
function valid(){
  var name= form__reg.name.value;
  var email= form__reg.email.value;
  var password= form__reg.password.value;
  var sex= form__reg.man.value;

  var adr_pattern= /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;

  if(name)
 document.getElementById('message').innerHTML="";
 if(adr_pattern.test(email) )
 document.getElementById('message-email').innerHTML="";
 if(password )
 document.getElementById('message-password').innerHTML="";
 if(sex )
 document.getElementById('message-sex').innerHTML="";


  if(name == "" )
   document.getElementById('message').innerHTML="Укажите имя";
  else if(adr_pattern.test(email)==false )
   document.getElementById('message-email').innerHTML="Укажите Email";
  else if(password=="" )
   document.getElementById('message-password').innerHTML="Укажите Пароль";
  else if(sex=="" )
   document.getElementById('message-sex').innerHTML="Укажите Пол";



else {


var user={
 name:name,
 email:email,
 password:password,
 sex:sex,

};
person.push(user);

for(var i=0;i<person.length;i++)
  alert(person[i].name);
};



}
