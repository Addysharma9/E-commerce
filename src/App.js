import React from "react";
import Slider from './Slider'
import InfiniteSlider from "./Infiniteslider";
import NewArrivals from './NewArrivals'
import DressStyle from "./DressStyle";
import NavBar from "./Navbar";
import Footer from "./Footer";
import CustomerReviews from "./Customerreview";
export default function App() {
 return(
  <>
  <NavBar/>
  <Slider/>
  <InfiniteSlider/>
  <NewArrivals title="NEW ARRIVALS" />
  <NewArrivals title="TOP SELLING" />
  <DressStyle/>
  <CustomerReviews/>
  <Footer/>
  </>
 )
}
