<!DOCTYPE html>
<html>
<head>
<style>
body {
    font-family: "serif";
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #00ffffff;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color:#CC5543;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #6D7696;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

#main {
    transition: margin-left .5s;
    padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
</head>
<body>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#"><p><a href="https://srhul.github.io/Portfolio/home.html">Home</a></p>
  <a href="#"><p><a href="https://srhul.github.io/Portfolio/aboutauthor.html">About Author</a></p>
  <a href="#">Latest Post</a>
  <a href="#">GWC</a>

</div>

<div id="main">

  <span style="font-size:30px;cursor:pointer" align="top" onclick="openNav()">&#9067; Navigation</span>
</div>

<script>
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
</script>
     
</body>
