import React, { useState } from 'react';
import './componentsCss/delete.css';
import { Link } from 'react-router-dom';

function DeleteCar() {
  const cars = [
    {
      id: 1,
      name: 'range rover',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car1.jpg',
      city: 'lagos',
      date: '12-2-12',
      returndate: '12-3-12',
      pickup: 'ikeja',
    },
    {
      id: 2,
      name: 'mercedes',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car2.jpg',
      city: 'lagos',
      date: '12-2-12',
      returndate: '12-3-12',
      pickup: 'lekki',
    },
    {
      id: 3,
      name: 'chevrolet',
      price: 2000,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      year: 2022,
      image: 'car3.jpg',
      city: 'Ibadan',
      date: '12-2-12',
      returndate: '12-3-12',
      pickup: 'ojo',
    },
    {
      id: 4,
      name: 'dodge',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car4.jpg',
      city: 'Abeokuta',
      date: '12-2-12',
      returndate: '12-3-12',
      pickup: 'Ibara',
    },
    {
      id: 5,
      name: 'porshe',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car5.jpg',
      city: 'surulere',
      date: '12-2-12',
      returndate: '12-3-12',
      pickup: 'masha',
    },
    {
      id: 6,
      name: 'bentley',
      price: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      year: 2022,
      image: 'car6.jpg',
      city: 'Abuja',
      date: '12-2-12',
      returndate: '12-3-12',
      pickup: 'Gwaranpa',
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
    <section className="delete myreserve">
      <div className="header">
        <h3>Here is the List of Reservations</h3>
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
                    city:
                    <span className="small">{e.city}</span>
                  </h5>
                  <h5>
                    pickup:
                    <span className="small">{e.pickup}</span>
                  </h5>
                </div>
                <div>
                  <h5>
                    date:
                    <span className="small">{e.date}</span>
                  </h5>
                  <h5>
                    return date:
                    <span className="small">{e.returndate}</span>
                  </h5>
                </div>
              </div>
              <button type="button">cancel reservation</button>
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
        <button className="next" type="button">
          <Link to="/reserve">Add Reservation</Link>
        </button>
      </div>
    </section>
  );
}

export default DeleteCar;
