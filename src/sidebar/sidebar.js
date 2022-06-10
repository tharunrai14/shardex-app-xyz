import "./sb.css";
return(
<div id="mySidenav" class="sidenav">
<a href="#" class="closebtn" onclick="closeNav()">&times;</a>
<a href="#">About</a>
<a href="#">Services</a>
<a href="#">Clients</a>
<a href="#">Contact</a>
</div>

function  openNav ()  {
document.getElementById("mySidenav").style.width = "20px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}
<span style="font-size:30px;cursor:pointer" onclick={openNav}">&#9776; open</span>
)
export default sidebar;