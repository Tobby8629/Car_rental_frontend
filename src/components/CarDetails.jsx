/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { BiLeftArrow, BiRotateRight, BiChevronRightCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const CarDetails = () => (
  <section>
    <div className="container mt-3">
      <div className="row w-100">
        <div className="col-md-6">
          <img
            src="./assets/mobile.jpg"
            alt="Ford Mustang"
          />
        </div>
        <div className="col-md-6">
          <h1>
            Ford Mustang
            {' '}
            <span>678</span>
          </h1>
          <p>Finance fee: $56</p>
          <p>Option to purchase fee: $56</p>
          <p>Total amount payable: $567</p>
          <p>Duration: 48 Months</p>
          <p>
            {' '}
            <strong>5.9% APR </strong>
            Representative
          </p>
          <a href="/" style={{ textTransform: 'uppercase', color: 'black' }}>
            Discover More Models
            <FaChevronRight fill="#97BF0F" />
          </a>
        </div>
      </div>

      <div className="row w-100 mt-5">
        <div className="col-md-4">
          <Link to="/">
            <button type="button" className="btn btn-warning btn-rounded">
              <BiLeftArrow fill="white" size={30} />
            </button>
          </Link>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn">
            <BiRotateRight fill="black" size={30} />
            <br />
            <span>Rotate Vehicle</span>
          </button>
        </div>
        <div className="col-md-4">
          <button type="button" className="reserve-btn btn btn-warning btn-rounded d-flex justify-content-between align-items-center gap-3 text-white">
            <FiSettings fill="#FFC108" size={30} />
            <h4> Reserve </h4>
            <BiChevronRightCircle fill="yellow" size={30} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CarDetails;
