import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './componentsCss/reservation.css';
import { useNavigate } from 'react-router-dom';
import { createReserve } from '../Redux/ReservationSlice';

function Reservation() {
  const cars = useSelector((state) => state.Cars.cars);
  const storage = localStorage.getItem('token');
  const user = JSON.parse(storage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [reserve, setreserve] = useState({
    userId: user.id, city: '', pickup: '', date: '', returnDate: '', carId: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    const {
      city, pickup, date, returnDate, carId,
    } = reserve;

    if (!city || !pickup || !date || !returnDate || !carId) {
      e.target.querySelector('.redone').style.display = 'block';
      return;
    }

    if (Date.parse(date) > Date.parse(returnDate)) {
      e.target.querySelector('.red').style.display = 'block';
      return;
    }

    try {
      await dispatch(createReserve({
        user: reserve.userId,
        city: reserve.city,
        pickup: reserve.pickup,
        date: reserve.date,
        car: reserve.carId,
        return: reserve.returnDate,
      }));
      navigate('/');
    } catch (error) {
      // Handle any errors from the dispatch or getTokenFromLocalStorage
      // console.error(error);
    }
  };
  return (
    <section>
      <div className="reservation form">
        <form onSubmit={submit}>
          <h2>Make reservation with us</h2>
          <div className="redone"> All field must be filled</div>
          <input type="text" id="city" value={reserve.city} placeholder="city" onChange={(e) => setreserve({ ...reserve, city: e.target.value })} />
          <input type="text" id="pickup" value={reserve.pickup} placeholder="pickup" onChange={(e) => setreserve({ ...reserve, pickup: e.target.value })} />
          <input type="date" id="date" value={reserve.date} placeholder="date" onChange={(e) => setreserve({ ...reserve, date: e.target.value })} />
          <input type="date" id="date" value={reserve.returnDate} placeholder="date" onChange={(e) => setreserve({ ...reserve, returnDate: e.target.value })} />
          <div className="red">your return must not be before your pickup date</div>
          <select onChange={(e) => { setreserve({ ...reserve, carId: e.target.value }); }}>
            <option value="">select</option>
            {cars.map((e) => (
              <option value={e.id} key={e.id}>{e.name}</option>
            ))}
          </select>
          <div className="form-btn">
            <button type="submit">Reserve</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
