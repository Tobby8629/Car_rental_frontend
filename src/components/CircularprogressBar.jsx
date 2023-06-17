import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularprogressBar = ({ percentage }) => (
  <div style={{ width: '100px' }}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={10}
      styles={buildStyles({
        textColor: '#333',
        pathColor: '#3f51b5',
        trailColor: '#f2f2f2',
      })}
    />
  </div>
);
CircularprogressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default CircularprogressBar;
