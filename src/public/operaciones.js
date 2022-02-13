function GetCampos() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/campos/" + document.getElementById("nombre").value, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {


      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        var camp = document.getElementById("campos");

        camp.innerHTML = "";
        JSON.parse(this.responseText).forEach(function (data, index) {
          camp.innerHTML += "<p>" + data.Campos + "</p>";
        });
      }
    };
  }


  function GetCampos2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/campo/" + document.getElementById("nombre").value, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {


      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var tbody = document.getElementById("campos2").querySelector("tbody");
        tbody.innerHTML = "";
        JSON.parse(this.responseText).forEach(function (data, index) {
          tbody.innerHTML += "<tr><td>" + data.NomInv + "</td></tr>";
          
        });

        document.getElementById("btnContinuar").style.display='block';

      }else if(this.readyState == 4 && this.status == 404){

        var tbody = document.getElementById("campos2").querySelector("tbody");
        tbody.innerHTML = "";
        document.getElementById("btnContinuar").style.display='none';

        var camp = document.getElementById("campos");

        camp.innerHTML = "";
         
        Swal.fire(
          'Error',
          'El nombre ingresado no existe',
          'error'
      )
      }
    };
  }




  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, { 'height': 650, 'indicators': false });
  });


  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const mins = document.getElementById("min");
  const seconds = document.getElementById("sec");

  const newYear = '20 Aug 2022';

  function countTimer() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);

    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;



  }
  countTimer();

  setInterval(countTimer, 1000);


  function SetUserName()
{
    var pnr = document.getElementById('nombre').value;

    window.localStorage.setItem('text1', pnr);

    const storedFnamn = localStorage.getItem('text1'); 


    window.location.href = "/conf";

}


function fun()
{

var nom3=document.getElementById("fname");
nom3.value=localStorage.getItem("text1");
}


function act()
{

document.getElementById("fname").disabled=false;
}


function prin()
{
 


    window.location.href = "/";

}










