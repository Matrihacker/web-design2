
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
    document.getElementById("p_header").style.display="none";
    document.getElementById("parafixms").style.display="none";
    document.getElementById("parafixmsx").style.display="block";
    document.getElementById("thankyou").style.display="block";
}


function afterLoad(){
    var myButton = document.getElementById("btn_submit");
    myButton.onclick=thankyou;
}