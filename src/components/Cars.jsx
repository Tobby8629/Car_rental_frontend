import React, { useEffect, useState } from 'react';
import './componentsCss/cars.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../Redux/CarSlice';

function Cars() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const cars = useSelector((state) => state.Cars.cars);

  const [buttondis, setbuttondis] = useState(false);
  const [prevdis, setprev] = useState(false);
  const [car, setcar] = useState(1);
  const perpage = 3;
  const last = car * perpage;
  const first = last - perpage;
  const each = cars.slice(first, last);
  const next = () => {
    if (car >= Math.round(cars.length / 3)) {
      setbuttondis(true);
    } else {
      setbuttondis(false);
      setcar(car + 1);
      setprev(false);
    }
  };

  const prev = () => {
    if (car <= 1) {
      setprev(true);
    } else {
      setprev(false);
      setcar(car - 1);
      setbuttondis(false);
    }
  };

  return (
    <section className="cars">
      <div className="header">
        <h2>Need a Car to rent ?</h2>
        <p>checkout our available cars</p>
      </div>

      <div className="all">
        {each.map((e) => (
          <div className="each" key={e.id}>
            <div className="image">
              <img src={e.photo} alt={e.name} crossOrigin="anonymous | use-credentials" />
            </div>
            <Link to={`/${e.id}`} className="link">{e.name}</Link>
            <p>
              {e.description.split(' ').slice(0, 15).join(' ')}
              . . .
            </p>
            <ul>
              <li><i className="fa-brands fa-twitter" /></li>
              <li><i className="fa-brands fa-facebook-f" /></li>
              <li><i className="fa-brands fa-instagram" /></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="prev" type="button" disabled={prevdis} onClick={prev}>
          <i className="fa-solid fa-caret-left" />
        </button>
        <button className="next" type="button" disabled={buttondis} onClick={next}>
          <i className="fa-solid fa-caret-right" />
        </button>
      </div>
    </section>
  );
}

export default Cars;
