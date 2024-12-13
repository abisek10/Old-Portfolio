import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <>
      <div className='body'>
        <div className='outerBox1'>
          <div className='box1'>
            <div className='insideBox1'>
              <div>
                <h1>Hi!  I  Am <span>Developer</span>  Abisek  Karki</h1>
              </div>
              <div className='para'>
                <p>I am a fronted developer.</p>
              </div>
              <div className='nav2'>
                <button>Hire Me</button>
                <p><Link to={'/projects'} className='nav-link'>Projects &#8599;</Link></p>
              </div>
              <div className='infos'>
                <div className='info'>
                  <h3>5</h3>
                  <p>Project Done</p>
                </div>
                <div className='info'>
                  <h3>Contact</h3>
                  <p>abisekkarki654@gamil.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className='insideBox2'>
            <div className='statistics'>
              <div><h2>Project Statistics 2024</h2></div>
              <div><button>Know More</button></div>
            </div>
            <div className='s'>
              <div className='stat'><p>Web Design</p><p>5</p></div><hr />
              <div className='stat'><p>Mobile App Design</p><p>5</p></div><hr />
              <div className='stat'><p>Brand Identity</p><p>5</p></div><hr />
            </div>
          </div>
        </div>
        <div className="box2">
          <h1>Create Your Website</h1>
          <div className='skills'>
            <img className='img1' src="html.png" alt="" />
            <img className='img2' src="css.png" alt="" />
            <img className='img3' src="js.png" alt="" />
            <img className='img4' src="react.png" alt="" />
            <img className='img5' src="tailwindcss.png" alt="" />
            <img className='img6' src="vite.png" alt="" />
            <img className='img7' src="npm.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Body