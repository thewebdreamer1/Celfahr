var celfield = document.getElementById("celsius");
var fahrfield = document.getElementById("fahrenheit");

celfield.onchange = function celsiusToFahrenheit () {

     var cel = celfield.value;
     var Fahrenheit = (cel * (9/5)) + 32;
   var Fahrround = Math.round(Fahrenheit*10)/10;
   fahrfield.value = Fahrround;

}

fahrfield.onchange = function fahrenheitToCelsius () {

  var Fahr = fahrfield.value;
    var Celsius = (Fahr - 32) * (5/9);
  var Celsiusround = Math.round(Celsius*10)/10;
  celfield.value = Celsiusround;

}