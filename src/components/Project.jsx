import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div>
        <section id="lib" className="js-fullheight" data-section="home" style={{marginBottom:"0"}}>
          <div className="flexslider js-fullheight" >
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row" style={{backgroundImage: "linear-gradient(to left bottom, #F2E3C6 0%, #A7A1A5 100%)"}} >
                    <div className="col-md-7 col-md-offset-5 col-md-pull-3 col-sm-7 col-sm-offset-4 col-xs-7 col-xs-offset-2 js-fullheight slider-text" >
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" style={{background:"#fff", boxShadow:"0 0 60px rgba(0, 0, 0, 0.3)", padding:"4em"}}>
                          <div>
                          <div className="image"></div>
                            <h1 style={{fontSize:"3em", fontWeight:"Normal"}}>Hi! <br/> I'm <b>Bhavya Cheruku</b></h1>
                            <h2 style={{fontSize:"2em"}}>I am a UI/Full stack Developer</h2>
                            
                          </div>
                          <ul style={{display:"flex"}}>
                            <li style={{minHeight:0, display:'block', marginRight:"1em"}}><a href="https://www.linkedin.com/in/bhavyacheruku24/" target="_blank" rel="noopener noreferrer" className="links"><i className="icon-linkedin2" /></a></li>
                            <li style={{minHeight:0, display:'block', marginRight:"1em"}}><a href="https://github.com/bhavyacheruku" target="_blank" rel="noopener noreferrer" className="links"><i className="icon-github"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div className="overlay" />
                <div className="container-fluid">
                  <div className="row" style={{backgroundImage: "linear-gradient(to left bottom, #F2E3C6 0%, #A7A1A5 100%)"}} >
                    <div className="col-md-7 col-md-offset-5 col-md-pull-3 col-sm-7 col-sm-offset-4 col-xs-7 col-xs-offset-2 js-fullheight slider-text" >
                      <div className="slider-text-inner">
                        <div className="desc" style={{background:"#fff", boxShadow:"0 0 60px rgba(0, 0, 0, 0.3)"}}>
                          
                          <div className="colorlib-narrow-content">
                            <div className="row row-pt-md">    
                                                                            
                              <div className="col-md-6 text-center animate-box">       
                              <h2 className="colorlib-heading" style={{marginBottom:"4em"}}>My Expertise</h2>          
                                <div className="services color-1">
                                  <span className="icon">
                                    <i className="icon-bulb" />
                                  </span>
                                  <div className="desc">
                                    <h3>Web Development</h3>
                                    <p>ReactJs, AngularJs, NodeJs, Javascript, HTML, CSS</p>
                                  </div>
                                </div>
                              </div>    
                                                       
                              <div className="col-md-6 text-center animate-box">
                              <h2 className="colorlib-heading" style={{marginBottom:"4em"}}>My Education</h2>  
                                <div className="services color-3">
                                  <span className="icon">
                                    <i className="icon-book" />
                                  </span>
                                  <div className="desc">
                                    <h3>Masters in Computer Science</h3>
                                    <p>from University of Houston-Clear Lake </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
