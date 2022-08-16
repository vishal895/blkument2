import React, { useState } from 'react'

const Navbar = () => {
    const[showNav,setshowNav] = useState(false)
    const handleToggleNavbar = () => {
        setshowNav(!showNav)
    }
  return (
    <>
    <nav className="navbar">
    
          <a className="desktopHome">Home</a>
          <ul className={`desktopView`}>
          <li className="homeHover">Products</li>
              <div className="hoverContent">
                  <div className="dropdown">
                      <div className="itm1">
                          <h3 className="d_head">Awesome Features</h3> 
                          <p className="d_para">Vulk is a Vue 3 UI kit that makes it easy to build gorgeous interfaces.</p>
                          <a className="d_link">Theme colors overview</a>
                      </div>
                      <div className="itm2">
                          <ul>
                              <li><h3 className="d_head">DEMOS</h3></li>
                              <li>Landing pages</li>
                              <li>About pages</li>
                              <li>Pricing pages</li>
                              <li>Subpages</li>
                          </ul>
                      </div>
                      <div className="itm3">
                          <ul>
                        
                          <li><h3 className="d_head">Blog pages</h3></li>
                          <li>Auth Pages</li>
                          <li>Layouts</li>
                          <li>components</li>
                          </ul>
                      </div>
                      <div className="itm4">
                      <h3 className="d_head">Vulk documentation</h3> 
                          <p className="d_para">Learn more about how you can get the most from the Vulk component library.</p>
                          <a className="d_link">Read Documentation</a>
                      </div>

                  </div>

              </div>
              <li>Pricing</li>

              <li className="homeHover">Company</li>
              <div className="hoverContent">
                  <div className="dropdown">
                      <div className="itm1">
                          <h3 className="d_head">We build the future</h3> 
                          <p className="d_para">We're maximizing the potential of sellers and brand owner through the power of data,Al,and marketplace expertise</p>
                          <a className="d_link">More about us</a>
                      </div>
                      <div className="itm2">
                          <ul>
                              <li><h3 className="d_head">WHO WE ARE</h3></li>
                              <li>Meet the teams</li>
                              <li>Work with us</li>
                              <li>Our values</li>
                              <li>Hire us</li>
                          </ul>
                      </div>
                      <div className="itm3">
                          <ul>
                          <li><h3 className="d_head">REACH US</h3></li>
                          <li>Contact</li>
                          <li>Help center</li>
                          <li>Support</li>
                          <li>Terms</li>
                          </ul>
                      </div>
                      <div className="itm4">
                      <div className="d_image">
                          <img src="	https://vulk.cssninja.io/assets/illustrations/features/calling.svg" className="d_pic"/>
                      </div>
                      </div>

                  </div>

              </div>

              <li className="homeHover">Resources</li>
              <div className="hoverContent">
                  <div className="dropdown">
                      <div className="itm1">
                          <h3 className="d_head">Resources</h3> 
                          <p className="d_para">Read our latest in business news, ecommerce, and data trends.Explore our customer resource</p>
                          <a className="d_link">Open components library</a>
                      </div>
                      <div className="itm2">
                          <ul>
                              <li><h3 className="d_head">LEARN</h3></li>
                              <li>component</li>
                              <li>Colour</li>
                              <li>Utilities</li>
                              <li>Plugins</li>
                          </ul>
                      </div>
                      <div className="itm3">
                          <ul>
                          <li><h3 className="d_head">BLOCKS</h3></li>
                          <li>Features</li>
                          <li>Content</li>
                          <li>Team</li>
                          <li>Testimonials</li>
                          </ul>
                      </div>
                      <div className="itm4">
                      <div className="d_image">
                          <img src="https://vulk.cssninja.io/assets/illustrations/features/calling.svg" className="d_pic"/>
                      </div>
                      </div>

                  </div>

              </div>
          </ul> 
          <div className="toggleBtn" onClick={() => handleToggleNavbar()}>
              <button className="btn">E</button>
          </div>
          <button className="desktopBtn">Buy now</button>
      </nav>
      <div className={`togglerContent ${showNav ? "" : "d-none"}`}>
          <ul>
              <li className="homeHover">Products</li>
              <div className="hoverContent">
                  <div className="dropdown">
                      <div className="itm1">
                          <h3 className="d_head">Awesome Features</h3> 
                          <p className="d_para">Vulk is a Vue 3 UI kit that makes it easy to build gorgeous interfaces.</p>
                          <a className="d_link">Theme colors overview</a>
                      </div>
                      <div className="itm2">
                          <ul>
                          <li><h3 className="d_head">LEARN</h3></li>
                              <li>Landing pages</li>
                              <li>About pages</li>
                              <li>Pricing pages</li>
                              <li>Subpages</li>
                          </ul>
                      </div>
                      <div className="itm3">
                          <ul>
                          <li><h3 className="d_head">BLOCKS</h3></li>
                          <li>Auth Pages</li>
                          <li>Layouts</li>
                          <li>components</li>
                          </ul>
                      </div>
                      <div className="itm4">
                      <h3 className="d_head">Vulk documentation</h3> 
                          <p className="d_para">Learn more about how you can get the most from the Vulk component library.</p>
                          <a className="d_link">Read Documentation</a>
                      </div>

                  </div>

              </div>
              <li>Pricing</li>

              <li className="homeHover">Company</li>
              <div className="hoverContent">
                  <div className="dropdown">
                      <div className="itm1">
                          <h3 className="d_head">We build the future</h3> 
                          <p className="d_para">We're maximizing the potential of sellers and brand owner through the power of data,Al,and marketplace expertise</p>
                          <a className="d_link">More about us</a>
                      </div>
                      <div className="itm2">
                          <ul>
                          <li><h3 className="d_head">WHO WE ARE</h3></li>
                              <li>Meet the teams</li>
                              <li>Work with us</li>
                              <li>Our values</li>
                              <li>Hire us</li>
                          </ul>
                      </div>
                      <div className="itm3">
                          <ul>
                          <li><h3 className="d_head">REACH US</h3></li>
                          <li>Contact</li>
                          <li>Help center</li>
                          <li>Support</li>
                          <li>Terms</li>
                          </ul>
                      </div>
                      <div className="itm4">
                      <div className="d_image">
                          <img src="https://vulk.cssninja.io/assets/illustrations/features/calling.svg" className="d_pic"/>
                      </div>
                      </div>

                  </div>

              </div>

              <li className="homeHover">Resources</li>
              <div className="hoverContent">
                  <div className="dropdown">
                      <div className="itm1">
                          <h3 className="d_head">Resources</h3> 
                          <p className="d_para">Read our latest in business news, ecommerce, and data trends.Explore our customer resource</p>
                          <a className="d_link">Open components library</a>
                      </div>
                      <div className="itm2">
                          <ul>
                          <li><h3 className="d_head">LEARN</h3></li>
                              <li>component</li>
                              <li>Colour</li>
                              <li>Utilities</li>
                              <li>Plugins</li>
                          </ul>
                      </div>
                      <div className="itm3">
                          <ul>
                          <li><h3 className="d_head">BLOCKS</h3></li>
                          <li>Features</li>
                          <li>Content</li>
                          <li>Team</li>
                          <li>Testimonials</li>
                          </ul>
                      </div>
                      <div className="itm4">
                      <div className="d_image">
                          <img src="https://vulk.cssninja.io/assets/illustrations/features/calling.svg" className="d_pic"/>
                      </div>
                      </div>

                  </div>

              </div>
          </ul>
      </div>
      </>
  )
}

export default Navbar