import React, { useState, useEffect } from 'react';
import './componentsCss/delete.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Deletecar, getCars } from '../Redux/CarSlice';

function DeleteCar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  const cars = useSelector((state) => state.Cars.cars);
  const [buttondis, setbuttondis] = useState(false);
  const [prevdis, setprev] = useState(false);
  const [car, setcar] = useState(1);
  const perpage = 6;
  const last = car * perpage;
  const first = last - perpage;
  const each = cars.slice(first, last);
  const navigate = useNavigate();
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

  const Delete = async (id) => {
    try {
      await dispatch(Deletecar({ id }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="delete">
      <div className="header">
        <h3>Here is the List of all your Cars</h3>
      </div>

      <div className="all">
        {each.map((e) => (
          <div className="each" key={e.id}>
            <div className="image">
              <img src={e.photo} alt={e.name} />
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
                <button type="button" onClick={() => Delete(e.id)}>Delete</button>
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
