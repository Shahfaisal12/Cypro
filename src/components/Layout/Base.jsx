import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Sidebar from './Sidebar'
// import Slides from '../utils/Slides'



const Base = (props) => {

  return (
    <>
      <Header />
        <div className='mains-content'>
            {props.children}
        </div>
      <Footer />
    </>
  )
}

export default Base
