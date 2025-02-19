import React from 'react'

export default function Booking() {
  return (
    <section className="section-padding bg-img bg-fixed" data-overlay-dark="5" data-background="img/rooms/01.jpg">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center mb-20">
                <div className="section-subtitle">Hotel Experience</div>
                <div className="section-title white">Booking Form</div>
            </div>
        </div>
        <div className="booking-inner clearfix">
            <form action="#" className="form1 clearfix">
                <div className="col1 c1">
                    <div className="input1_wrapper border-l border-b border-t border-r">
                        <label>Check in</label>
                        <div className="input1_inner">
                            <input type="text" className="form-control input datepicker" placeholder="Check in" />
                        </div>
                    </div>
                </div>
                <div className="col1 c2">
                    <div className="input1_wrapper border-l border-b border-t border-r">
                        <label>Check out</label>
                        <div className="input1_inner">
                            <input type="text" className="form-control input datepicker" placeholder="Check out" />
                        </div>
                    </div>
                </div>
                <div className="col2 c3">
                    <div className="select1_wrapper border-l border-b border-t border-r">
                        <label>Adults</label>
                        <div className="select1_inner">
                            <select className="select2 select" style={{width: "100%"}}>
                                <option value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                                <option value="4">4 Adults</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col2 c4">
                    <div className="select1_wrapper border-l border-b border-t border-r">
                        <label>Children</label>
                        <div className="select1_inner">
                            <select className="select2 select" style={{width: "100%"}}>
                                <option value="1">Children</option>
                                <option value="1">1 Child</option>
                                <option value="2">2 Children</option>
                                <option value="3">3 Children</option>
                                <option value="4">4 Children</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col2 c5">
                    <div className="select1_wrapper border-l border-b border-t border-r">
                        <label>Rooms</label>
                        <div className="select1_inner">
                            <select className="select2 select" style={{width: "100%"}}>
                                <option value="1">1 Room</option>
                                <option value="2">2 Rooms</option>
                                <option value="3">3 Rooms</option>
                                <option value="4">4 Rooms</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col3 c6">
                    <button type="submit" className="btn-form1-submit">Check Now</button>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}
