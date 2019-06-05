
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
    document.getElementById("parafixms").text="Your donation makes you a member of WWF. A monthly gift of $100+ makes you a Partner in Conservation";
    document.getElementById("thankyou").style.display="inline";
}


function afterLoad(){
    var myButton = document.getElementById("btn_submit");
    myButton.onclick=thankyou;
}

