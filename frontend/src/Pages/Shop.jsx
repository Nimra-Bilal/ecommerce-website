import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div >
      
    {/* Hero Section */}
    <div >
      <div>
        <Hero />
      </div>
    </div>

    {/* Popular Products */}
    <div className="row mt-4">
      <div className="col-12">
        <Popular />
      </div>
    </div>

    {/* Special Offers */}
    <div className="row mt-4">
      <div className="col-12">
        <Offers />
      </div>
    </div>

    {/* New Collections */}
    <div className="row mt-4">
      <div className="col-12">
        <NewCollections />
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="row mt-4">
      <div className="col-lg-8 mx-auto">
        <NewsLetter />
      </div>
    </div>
  </div>
  )
}

export default Shop