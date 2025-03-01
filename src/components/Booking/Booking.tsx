'use client';
import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/app/context/Context';
import Form from '../Form/Form';

export default function Booking() {
    const { isFormOpen, setIsFormOpen, customerData, setCustomerData } = useAppContext();

    const [today, setToday] = useState('');
    const [tomorrow, setTomorrow] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);
        const formattedTomorrow = tomorrowDate.toISOString().split('T')[0];
        setTomorrow(formattedTomorrow);
        setToday(formattedDate);
    }, []);

    useEffect(() => {
        if (customerData.checkIn) {
            const selectedDate = new Date(customerData.checkIn);
            selectedDate.setDate(selectedDate.getDate() + 1);
            const newMinCheckOut = selectedDate.toISOString().split("T")[0];

            setTomorrow(newMinCheckOut);

            if (customerData.checkOut && customerData.checkOut < newMinCheckOut) {
                setCustomerData((prevData: any) => ({
                    ...prevData,
                    checkOut: "",
                }));
            }
        }
    }, [customerData.checkIn]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        localStorage.setItem('customerData', JSON.stringify(customerData));
        setIsFormOpen(!isFormOpen);
    }

    return (
        <section
            id='booking-form'
            className="section-padding bg-img bg-fixed"
            data-overlay-dark="5"
            data-background="/img/bg-image/varanasi.jpg"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mb-20">
                        <div className="section-subtitle">Hotel Experience</div>
                        <div className="section-title white">Booking Form</div>
                    </div>
                </div>
                <div className="booking-inner clearfix">
                    <form action="#" className="form1 clearfix" onSubmit={handleSubmit}>
                        <div className="col1 c1">
                            <div className="input1_wrapper border-l border-b border-t border-r">
                                <label>Check in</label>
                                <div className="input1_inner">
                                    <input
                                        value={customerData.checkIn || ''}
                                        onChange={handleChange}
                                        name="checkIn"
                                        type="date"
                                        className="form-control input"
                                        placeholder="Check in"
                                        min={today}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col1 c2">
                            <div className="input1_wrapper border-l border-b border-t border-r">
                                <label>Check out</label>
                                <div className="input1_inner">
                                    <input
                                        value={customerData.checkOut || ''}
                                        onChange={handleChange}
                                        name="checkOut"
                                        type="date"
                                        className="form-control input"
                                        placeholder="Check out"
                                        min={tomorrow}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col3 c3">
                            <div className="select1_wrapper border-l border-b border-t border-r">
                                <label>No. of Persons</label>
                                <div className="input1_inner rn">
                                    <input
                                        value={customerData.noOfPersons || ''} // Default to empty string if undefined
                                        onChange={handleChange}
                                        name="noOfPersons"
                                        type="number"
                                        className="form-control input"
                                        placeholder="No. Of Persons"
                                        min={1}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col3 c4">
                            <div className="select1_wrapper border-l border-b border-t border-r">
                                <label>No. Of Rooms</label>
                                <div className="input1_inner rn">
                                    <input
                                        value={customerData.noOfRooms || ''} // Default to empty string if undefined
                                        onChange={handleChange}
                                        name="noOfRooms"
                                        type="number"
                                        className="form-control input"
                                        placeholder="No. Of Rooms"
                                        min={1}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col3 c5">
                            <button type="submit" className="btn-form1-submit">
                                Check Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {isFormOpen && <Form />}
        </section>
    );
}