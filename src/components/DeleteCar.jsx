/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './componentsCss/delete.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Deletecar, getCars } from '../Redux/CarSlice';

function DeleteCar() {
  const cars = [
    {
      id: 7,
      name: 'range rover',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car1.jpg',
    },
    {
      id: 8,
      name: 'mercedes',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car2.jpg',
    },
    {
      id: 9,
      name: 'chevrolet',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car3.jpg',
    },
    {
      id: 10,
      name: 'dodge',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car4.jpg',
    },
    {
      id: 11,
      name: 'porshe',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car5.jpg',
    },
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

  const [buttondis, setbuttondis] = useState(false);
  const [prevdis, setprev] = useState(false);
  const [car, setcar] = useState(1);
  const perpage = 6;
  const last = car * perpage;
  const first = last - perpage;
  const each = cars.slice(first, last);
  const next = () => {
    if (car >= Math.round(cars.length / 6)) {
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
    <section className="delete">
      <div className="header">
        <h3>Here is the List of all your Cars</h3>
      </div>

      <div className="all">
        {each.map((e) => (
          <div className="each" key={e.name}>
            <div className="image">
              <img src={e.image} alt={e.name} />
            </div>
            <div className="text">
              <h4>{e.name}</h4>
              <div className="price">
                <div>
                  <h5>
                    Price: $
                    {e.price}
                  </h5>
                  <h5>
                    Year:
                    {e.year}
                  </h5>
                </div>
                <button type="button">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="prev" type="button" disabled={prevdis} onClick={prev}>
          prev
        </button>
        <button className="next" type="button" disabled={buttondis} onClick={next}>
          next
        </button>
      </div>
    </section>
  );
}

export default DeleteCar;
