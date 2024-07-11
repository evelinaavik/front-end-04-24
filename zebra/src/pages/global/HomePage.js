import React, { useState } from 'react'
import Main from '../../components/Main/Main'
import sale2PNG from '../../components/Images/sale2.png'
// import CarouselBanner from '../../components/CarouselBanner'


function HomePage() {
  return (
    <div>
      {/* <CarouselBanner/> */}
        <div className="banner"> 
           <img src={sale2PNG} alt="banner" className="sale"/> 
        </div>
        <div>
          <Main></Main>
        </div>
    </div>
  )
}

export default HomePage