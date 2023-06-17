/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './componentsCss/details.css';
import { BiLeftArrow } from 'react-icons/bi';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useParams } from 'react-router-dom';

const CarDetails = () => {
  const cars = [
    {
      id: 1,
      name: 'range rover',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car1.jpg',
    },
    {
      id: 2,
      name: 'mercedes',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car2.jpg',
    },
    {
      id: 3,
      name: 'chevrolet',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car3.jpg',
    },
    {
      id: 4,
      name: 'dodge',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car4.jpg',
    },
    {
      id: 5,
      name: 'porshe',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car5.jpg',
    },
    {
      id: 6,
      name: 'bentley',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car6.jpg',
    },
  ];
  const { carId } = useParams();
  const data = cars.find((e) => e.id === parseInt(carId, 10));
  console.log(data);
  return (
    <section className="details">
      <h1 className="mobile">{data.name}</h1>
      <div className="image">
        <img src={data.image} alt={data.name} />
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
              {data.year}
            </li>
            <li>
              Car model:
              {data.transmission}
            </li>
            <li>
              car manufacturer:
              {data.manufacture}
            </li>
            <li>
              Car owner:
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
            <div className="circle">
              <div className="smallcircle" />
            </div>
          </div>
        </div>
        <button type="button" className="btt">
          <Link to="/reservee"> Reserve </Link>
          <span><i className="fa-solid fa-angle-right" /></span>
        </button>
      </div>
      <div className="absolute">
        <Link to="/"><BiLeftArrow fill="white" size={30} /></Link>
      </div>
    </section>
  );
};

export default CarDetails;
