import React, { useEffect, useState } from 'react';
import './componentsCss/delete.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReserve, getReserve } from '../Redux/ReservationSlice';

function DeleteCar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserve());
  }, [dispatch]);

  const cars = useSelector((state) => state.Reserve.reservations);

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

  const Delete = async (id) => {
    try {
      await dispatch(deleteReserve(id));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="delete myreserve">
      {each.length > 0 ? (
        <>
          <div className="header">
            <h3>Here is the List of Reservations</h3>
          </div>

          <div className="all">
            {each.map((e) => (
              <div className="each" key={e.id}>
                <div className="image">
                  <img src={e.image} alt={e.name} />
                </div>
                <div className="text">
                  <h4>{e.name}</h4>
                  <div className="price">
                    <div>
                      <h5>
                        city:
                        <span className="small">
                          {' '}
                          {e.city}
                        </span>
                      </h5>
                      <h5>
                        pickup:
                        <span className="small">
                          {' '}
                          {e.pickup}
                        </span>
                      </h5>
                    </div>
                    <div>
                      <h5>
                        date:
                        <span className="small">
                          {' '}
                          {e.pick_up}
                        </span>
                      </h5>
                      <h5>
                        return date:
                        <span className="small">
                          {' '}
                          {e.return_date}
                        </span>
                      </h5>
                    </div>
                  </div>
                  <button type="button" onClick={() => Delete(e.id)}>cancel reservation</button>
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
        </>
      ) : (
        <div>
          <h2>
            You do not have any reservation, please add a
            <Link to="/reserve">new Reservation</Link>
          </h2>
        </div>
      )}
    </section>

  );
}

export default DeleteCar;
