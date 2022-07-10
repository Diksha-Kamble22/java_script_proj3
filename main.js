
var work_first="add";
if (work_first=="add"){
  console.log("add into excel sheet");}
  else{
    console.log("multiply into excel sheet");
  }
  var work1="substract";
  work1="divide"
  if(work1=="substract"){
    console.log("substract into excel sheet");
  }
  else {
    console.log("divide into excel sheet");
  }
  var excel_sheet="substract";
   
  if (excel_sheet=="add"){
    console.log("add DATA into excel sheet");
  }else if (excel_sheet=="substract"){
    console.log("substract DATA into excelsheet");
  }  else if(excel_sheet=="multiply"){
    console.console.log("multiply DATA into excel sheet");
  }else if(excel_sheet="divide"){
    console.log("divide DATA into excel sheet" );
  }
  var AB=24;
  var BC="24";
console.log(AB==BC);
console.log(AB===BC);
console.log(AB!=BC);
console.log(AB!==BC);
 const queue_logins=["login_1","login_2","login_3"];
 const valid_logins=["login_2","login_3"];
 for( var i=0;i<queue_logins.length;i++){
  var current_login=queue_logins[i];
  var isVALIDlogin=false;
  for (var j=0;j<valid_logins.length;j++);{
 var valid_login_jth_index=valid_logins[j];
 if(current_login===valid_login_jth_index){
   is_VALIDlogin=true;}
 }
 console.log(queue_logins[i]);
 if(isVALIDlogin){
   console.log("login is valid");
 }else {
   console.log("login is invalid");
 }
 }