import React from "react";
import Slider from './Slider'
import InfiniteSlider from "./Infiniteslider";
import NewArrivals from './NewArrivals'
import DressStyle from "./DressStyle";
export default function App() {
 return(
  <>
  <Slider/>
  <InfiniteSlider/>
  <NewArrivals title="NEW ARRIVALS" />
  <NewArrivals title="TOP SELLING" />
  <DressStyle/>
  </>
 )
}
