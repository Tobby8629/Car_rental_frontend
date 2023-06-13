import React, { useState } from 'react';
import './componentsCss/cars.css';

function Cars() {
  const cars = [
    {
      name: 'range rover',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car1.jpg',
    },
    {
      name: 'mercedes',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car2.jpg',
    },
    {
      name: 'chevrolet',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car3.jpg',
    },
    {
      name: 'dodge',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car4.jpg',
    },
    {
      name: 'porshe',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car5.jpg',
    },
    {
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
  const perpage = 3;
  const last = car * perpage;
  const first = last - perpage;
  const each = cars.slice(first, last);
  // const [scar, setscar] = useState(1);
  // const sperpage = 1;
  // const lastpage = scar * sperpage;
  // const firstpage = lastpage - sperpage;
  // const one = cars.slice(firstpage, lastpage);
  const next = () => {
    if (car >= Math.floor(cars.length / 3)) {
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
      <h2>Latest Cars</h2>
      <div className="all">
        {each.map((e) => (
          <div className="each" key={e.name}>
            <div className="image">
              <img src={e.image} alt={e.name} />
            </div>
            <p>{e.description}</p>
            <ul>
              <li><i className="fa-brands fa-twitter" /></li>
              <li><i className="fa-brands fa-facebook-f" /></li>
              <li><i className="fa-brands fa-instagram" /></li>
              <li><i className="fa-brands fa-snapchat" /></li>
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
