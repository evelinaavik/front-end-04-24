import React from 'react'
import Main from '../../components/Main/Main'
import sale2PNG from '../../components/Images/sale2.png'

function HomePage() {
  return (
    <div>
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