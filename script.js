$(document).ready(function(){

  $("#one").click(function(){
    document.forms.display.value  += 1;
  });
  $("#two").click(function(){
    document.forms.display.value  += 2;
  });
  $("#three").click(function(){
    document.forms.display.value  += 3;
  });
  $("#four").click(function(){
    document.forms.display.value  += 4;
  });
  $("#five").click(function(){
    document.forms.display.value  += 5;
  });
  $("#six").click(function(){
    document.forms.display.value  += 6;
  });
  $("#seven").click(function(){
    document.forms.display.value  += 7;
  });
  $("#eight").click(function(){
    document.forms.display.value  += 8;
  });
  $("#nine").click(function(){
    document.forms.display.value  += 9;
  });
  $("#zero").click(function(){
    document.forms.display.value  += 0;
  });
  $("#add").click(function(){
    document.forms.display.value  += "+";
  });
  $("#subs").click(function(){
    document.forms.display.value  += "-";
  });
  $("#multi").click(function(){
    document.forms.display.value  += "*";
  });
  $("#divide").click(function(){
    document.forms.display.value  += "/";
  });
  $("#dot").click(function(){
    document.forms.display.value  += ".";
  });
  $("#delete").click(function(){
    document.forms.display.value  = document.forms.display.value.substring(0,document.forms.display.value.length - 1) ;
  });
  $("#equal").click(function(){
    var ans = eval(document.forms.display.value);
    if (display.value == ""){
      alert("Please enter any numbers to calculate");
    }
    else{
      document.forms.display.value  = ans;
    }
  });
  $("#clear").click(function(){
    document.forms.display.value  = " ";
  });
$("#reset").click(function(){
  var ans = eval(document.forms.display.value);
    if (display.value == ""){
      alert("Please enter the numbers to calculate");
    }
    else{
      document.forms.display.value  = ans;
    }
  });
})