import React from 'react'

export default function Offers() {
    return (
        <section className="offers2" style={{marginBottom:"150px"}}>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-1">
                            <h5>Stay</h5>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-2">
                            <h5>Dine</h5>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-3">
                            <h5>Unwind</h5>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a href="#" className="item" data-tab="tab-4">
                            <h5>Celebrate</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="glry-img">
                <img id="tab-1" src="img/rooms/01.jpg" alt="" className="tab-img current" />
                <img id="tab-2" src="img/banner/03.jpg" alt="" className="tab-img" />
                <img id="tab-3" src="img/banner/04.jpg" alt="" className="tab-img" />
                <img id="tab-4" src="img/banner/05.jpg" alt="" className="tab-img" />
            </div>
        </section>
    )
}
