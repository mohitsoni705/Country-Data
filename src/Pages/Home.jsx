import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World,One Country at a Time
          </h1>
            <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort search and fliter through countries to find the details you want.
            </p>
            <button className='btn btn-darken btn-inline bg-white-box'>
             <NavLink to="/country"> Start Exploring <FaLongArrowAltRight/></NavLink>
            </button>
            </div>
        <div className="hero-image">
          <img src="/images/world.png" alt="world img" className='banner-image' />
        </div>
        </div>
    </main>
  )
}

export default Home
