import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import  Home from "./Home";
import Cart from "./Cart";


export default function App() {
    return (
        <>
        <BrowserRouter>
            <NavBar />
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
           </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
}
