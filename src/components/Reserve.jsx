import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './componentsCss/reservation.css';

function Reservation() {
  // const cars = useSelector((state)=> state.Cars.cars)
  const storage = localStorage.getItem('token');
  const user = JSON.parse(storage);
  const [reserve, setreserve] = useState({
    userId: user.id, city: '', pickup: '', date: '', returnDate: '', carId: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    const {
      city, pickup, date, returnDate, carId,
    } = reserve;

    // if (!city || !pickup || !date || !returnDate || !carId) {

    // }

    // dispatch(postUser({
    //   reserve: {
    //     user: reserve.userId, city: reserve.city, pickup: reserve.pickup,
    //    date: reserve.date, car: reserve.carId, return: reserve.return_date,
    //   },
    // }));
  };
  return (
    <section>
      <div className="reservation form">
        <form onSubmit={submit}>
          <h2>Make reservation with us</h2>
          <input type="text" id="city" value={reserve.city} placeholder="city" onChange={(e) => setreserve({ ...reserve, city: e.target.value })} />
          <input type="text" id="pickup" value={reserve.pickup} placeholder="pickup" onChange={(e) => setreserve({ ...reserve, pickup: e.target.value })} />
          <input type="date" id="date" value={reserve.date} placeholder="date" onChange={(e) => setreserve({ ...reserve, date: e.target.value })} />
          <input type="date" id="date" value={reserve.return_date} placeholder="date" onChange={(e) => setreserve({ ...reserve, return_date: e.target.value })} />
          <div className="form-btn">
            <button type="submit">Reserve</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
