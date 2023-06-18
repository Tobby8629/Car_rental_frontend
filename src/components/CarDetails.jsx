/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import './componentsCss/details.css';
import { BiLeftArrow } from 'react-icons/bi';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularprogressBar from './CircularprogressBar';
import { Car } from '../Redux/CarSlice';

const CarDetails = () => {
  const dispatch = useDispatch();
  const { carId } = useParams();

  useEffect(() => {
    dispatch(Car(carId));
  });

  const data = useSelector((state) => state.Cars.car);

  return (
    <section className="details">
      <h1 className="mobile">{data.name}</h1>
      <div className="image">
        <img src={data.photo} alt={data.name} />
      </div>
      <div className="container">
        <div className="wrap">
          <div className="desktop">
            <h1>{data.name}</h1>
          </div>
          <ul>
            <li>
              Rental price: $
              {data.price}
            </li>
            <li>
              Car year:
              {' '}
              {' '}
              {data.year}
            </li>
            <li>
              Car model:
              {' '}
              {' '}
              {data.model}
            </li>
            <li>
              car manufacturer:
              {' '}
              {' '}
              {data.manufacture}
            </li>
            <li>
              Car owner:
              {' '}
              {' '}
              {data.owner}
              {' '}
              tobby
            </li>
          </ul>
          <div className="col">
            <Link to="/" style={{ textTransform: 'uppercase', color: 'black' }}>
              Discover More Models
              <span><i className="fa-solid fa-angle-right" /></span>
            </Link>
            <CircularprogressBar percentage={90} />
          </div>
        </div>
        <button type="button" className="btt">
          <Link to="/reservee"> Reserve </Link>
          <span><i className="fa-solid fa-angle-right" /></span>
        </button>
      </div>
      <button className="next" type="button">
        <Link to="/"><BiLeftArrow fill="white" size={30} /></Link>
      </button>
    </section>
  );
};

export default CarDetails;
