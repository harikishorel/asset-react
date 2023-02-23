// import Container from "react-bootstrap/Container";
// // import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import { useLocation } from "react-router-dom";


function Header() {
  return (
    <body className='Header'> 
  	<header class="header">
		<h1 class="logo"><a href="#">Assetwarranty</a></h1>
      <ul class="main-nav">
          
          <li><a href="#" class='profile' placeholder="Profile">profile</a></li>
      </ul>
	</header> 
</body>

  );
}

export default Header;
