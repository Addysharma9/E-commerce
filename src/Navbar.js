
import './css/Navbar.css'

function Navbar() {
  
    const hideNavbar = () => {
        let navbar = document.getElementById("navbar");
        navbar.style.display = "none";
    };

    return (
        <>
              <nav id="navbar">
              <div id="blacktop">
            <li>Sign up and get 20% off to your first order. <a href='X'>Sign Up Now</a></li>
        </div>
        <div id="Navbar">
            <div>
                SHOP.CO
            </div>
            <div>
                <ul>
                    <li>Shop <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" color="#000000" fill="none">
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></li>
                    <li>On Sale</li>
                    <li>New Arivals</li>
                    <li>Brands</li>
                </ul>
            </div>
            <div>
                <img  src="/Search_logo.png" alt=""></img>
                <input type="text" placeholder="Search for products..."></input>
            </div>
            <div>
                <img src="/Side_buttons.png" alt=""></img>
            </div>
        </div>
                <h1 onClick={hideNavbar} >X</h1>
            </nav>
        </>
    );
}

export default Navbar;
