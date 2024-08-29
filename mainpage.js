let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() 
{
    if(sidebar.classList.contains("open"))
    {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }
    else 
    {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
}

//logout

function logout()
{
    alert('Are you sure want to logout?');
    window.location = 'indext.html';
}

//dashboard function

let Sname = "Yeye Badoy";
let SaccountNo = '0123456789';
let StotalBal = 50000;

let Cname = "Yeye Badoy";
let CaccountNo = '0123456789';
let CtotalBal = 1000000;


document.getElementById("SaccountName").innerHTML = Sname;
document.getElementById("SaccountNo").innerHTML = SaccountNo;
document.getElementById("StotalBal").innerHTML = StotalBal;

document.getElementById("CaccountName").innerHTML = Cname;
document.getElementById("CaccountNo").innerHTML = CaccountNo;
document.getElementById("CtotalBal").innerHTML = CtotalBal;


//modal for tranfer money
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





