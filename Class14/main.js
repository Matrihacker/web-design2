
function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("burger").style.display = "none";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("burger").style.display = "block";

  }

  function thankyou(){
    document.getElementById("disapr").style.display="none";
    document.getElementByClassName("header").style.display="none";
    document.getElementById("parafixms").style.display="none";
    document.getElementById("thankyou").style.display="inline";
}

  var myButton = document.getElementsByClassName("submitd");
  
  myButton.addEventListener ("click", thankyou);

  