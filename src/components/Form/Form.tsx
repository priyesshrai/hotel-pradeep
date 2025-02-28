'use client'
import { useAppContext } from '@/app/context/Context'
import React, { useEffect, useRef, useState } from 'react'

export default function Form() {
  const { isFormOpen, setIsFormOpen, customerData, setCustomerData } = useAppContext();
  const close = useRef<HTMLDivElement | null>(null);
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
    function handleClickOutside(event: MouseEvent) {
      if (close.current && !close.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close, setIsFormOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.removeItem('customerData');
    setIsFormOpen(false);
    console.log(customerData);
  }

  return (
    <section className='form-section'>
      <div className="form-section-wraper">
        <div className="main-form-container" ref={close}>
          <div className="colse-btn" onClick={() => setIsFormOpen(!isFormOpen)}>
            <i className="fa-regular fa-xmark"></i>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="main-input-container">
              <label>Check In</label>
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
            <div className="main-input-container">
              <label>Check out</label>
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
            <div className="main-input-container">
              <label>No Of Persons</label>
              <input
                value={customerData.noOfPersons || ''}
                onChange={handleChange}
                name="noOfPersons"
                type="number"
                className="form-control input"
                min={1}
                required
              />
            </div>
            <div className="main-input-container">
              <label>No Of Rooms</label>
              <input
                value={customerData.noOfRooms || ''}
                onChange={handleChange}
                name="noOfRooms"
                type="number"
                className="form-control input"
                min={1}
                required
              />
            </div>
            <div className="main-input-container">
              <label>Type of Room</label>
              <select name="roomType" value={customerData.roomType || ''} onChange={handleChange} className="form-control input" required>
                <option value="">Select Room Type...</option>
                <option value="Delux">Delux</option>
                <option value="Super Delux">Super Delux</option>
                <option value="Executives">Executives</option>
              </select>
            </div>
            <div className="main-input-container">
              <label>Name</label>
              <input
                value={customerData.name || ''}
                onChange={handleChange}
                name="name"
                type="text"
                className="form-control input"
                required
              />
            </div>
            <div className="main-input-container">
              <label>Phone No.</label>
              <input
                value={customerData.phone || ''}
                onChange={handleChange}
                name="phone"
                type="tel"
                className="form-control input"
                required
              />
            </div>
            <div className="main-input-container">
              <label>E-Mail</label>
              <input
                value={customerData.email || ''}
                onChange={handleChange}
                name="email"
                type="tel"
                className="form-control input"
              />
            </div>
            <div className="main-input-container">
              <label>More Details</label>
              <textarea name="message"
                value={customerData.message || ''}
                onChange={handleChange}
                className="form-control input"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="main-input-container">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
