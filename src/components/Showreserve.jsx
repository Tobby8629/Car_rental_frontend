import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './componentsCss/reservation.css';
import { useNavigate } from 'react-router-dom';
import { createReserve } from '../Redux/ReservationSlice';

function Showreserve() {
  const data = useSelector((state) => state.Cars.car);

  if (data) { localStorage.setItem('car', JSON.stringify(data)); }

  const storage = localStorage.getItem('token');
  const user = JSON.parse(storage);
  const carstorage = localStorage.getItem('car');
  const car = JSON.parse(carstorage);

  console.log(data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [reserve, setreserve] = useState({
    userId: user.id, city: '', pickUp: '', date: '', returnDate: '', carId: car.id,
  });

  const submit = async (e) => {
    e.preventDefault();
    const {
      city, pickUp, date, returnDate, carId, userId,
    } = reserve;

    if (!city || !pickUp || !date || !returnDate || !carId || !userId) {
      e.target.querySelector('.redone').style.display = 'block';
      return;
    }

    if (Date.parse(date) > Date.parse(returnDate)) {
      e.target.querySelector('.red').style.display = 'block';
      return;
    }

    try {
      await dispatch(createReserve({
        user_id: reserve.userId,
        city: reserve.city,
        pickUp: reserve.pickUp,
        date: reserve.date,
        car: reserve.carId,
        return_date: reserve.returnDate,
      }));
      localStorage.removeItem('car');
      navigate('/myreserve');
    } catch (error) {
      // Handle any errors from the dispatch or getTokenFromLocalStorage
      // console.error(error);
    }
  };
  return (
    <section className="rees">
      <div className="reservation form shw" style={{ '--bg': `url(${car.photo})` }}>
        <form onSubmit={submit}>
          <h2>Make reservation with us</h2>
          <div className="redone"> All field must be filled</div>
          <input type="text" id="city" value={reserve.city} placeholder="city" onChange={(e) => setreserve({ ...reserve, city: e.target.value })} />
          <input type="text" id="pickup" value={reserve.pickUp} placeholder="pickup" onChange={(e) => setreserve({ ...reserve, pickUp: e.target.value })} />
          <input type="date" id="date" value={reserve.date} placeholder="date" onChange={(e) => setreserve({ ...reserve, date: e.target.value })} />
          <input type="date" id="date" value={reserve.returnDate} placeholder="date" onChange={(e) => setreserve({ ...reserve, returnDate: e.target.value })} />
          <div className="red">your return must not be before your pickup date</div>
          {/* <select onChange={(e) => { setreserve({ ...reserve, carId: e.target.value }); }}>
            <option value="">select</option>
            {cars.map((e) => (
              <option value={e.id} key={e.id}>{e.name}</option>
            ))}
          </select> */}
          <div className="form-btn">
            <button type="submit">Reserve</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Showreserve;
