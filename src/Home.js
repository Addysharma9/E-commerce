import React from 'react'
import Slider from './Slider'
import InfiniteSlider from "./Infiniteslider";
import NewArrivals from './NewArrivals'
import DressStyle from "./DressStyle";
import CustomerReviews from "./Customerreview";
export default function Home() {
  return (
    <>
    <Slider/>
    <InfiniteSlider/>
    <NewArrivals title="NEW ARRIVALS" />
    <NewArrivals title="TOP SELLING" />
    <DressStyle/>
    <CustomerReviews/>
    </>
  )
}
