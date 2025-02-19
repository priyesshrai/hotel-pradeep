import React from 'react'

export default function Video() {
  return (
    <section className="video-wrapper section-padding bg-img" data-overlay-dark="4" data-background="img/banner/01.jpg">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-12 text-center rotatex">
                    <a href="https://youtu.be/hG7Ok0HvDcU" data-lity="video" className="rotate-box vid">
                        <div className="rotate-circle rotate-text">
                            <svg className="textcircle" viewBox="0 0 500 500">
                                <defs>
                                    <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"> </path>
                                </defs>
                                <text>
                                    <textPath xlinkHref="#textcircle" textLength="900"> rixos luxury resort hotel </textPath>
                                </text>
                            </svg>
                        </div> <span className="icon"> <i className="fas fa-play"></i> </span>
                    </a>
                </div>
            </div>
        </div>
        <div className="video-text">videos</div>
    </section>
  )
}
