import React from 'react'

export default function About() {
    return (
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-15">
                        <div className="section-subtitle">About Rixos</div>
                        <div className="section-title">Laid-back places for kindred spirits</div>
                        <p>Welcome to the <b>best five-star resort hotel</b> in New York. The experience elementum sesue the aucan vestibulum alesun usto in sapien rutrum volutan donec fermen.</p>
                        <p className="mb-40">Lorem ipsum quisque sodales miss in the varius drana miss turpis softtiton tellus in the fermen.</p>
                        <a href="#" className="button-3 mb-15">About Rixos</a>
                        <div className="phone"><a href="tel:+12345678910"><i className="fa-light fa-phone"></i>+1 234 567 8910</a></div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 mb-20 mt-45"> <img className="rounded-2 animation-float1" src="img/about01.jpg" alt="" /> </div>
                    <div className="col-lg-3 col-md-6 mb-20"> <img className="rounded-2 animation-float2" src="img/about02.jpg" alt="" /> </div>
                </div>
            </div>
        </section>
    )
}
