import './css/Navbar.css'

function Navbar() {
  
    const hideNavbar = () => {
        let navbar = document.getElementById("navbar");
        navbar.style.display = "none";
    };

    return (
        <>
            <nav id="navbar">
                <h1 onClick={hideNavbar} >X</h1>
            </nav>
        </>
    );
}

export default Navbar;
