import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddnewCar } from '../Redux/CarSlice';

const AddCar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storage = localStorage.getItem('token');
  const user = JSON.parse(storage);
  const [carDatas, setCarDatas] = useState({
    name: '',
    description: '',
    photo: '',
    price: '',
    model: '',
    user_id: user.id || null,
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!carDatas.name || !carDatas.price || !carDatas.model || !carDatas.photo) {
      setError('Please Fill All The Fields');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    const formData = new FormData();

    formData.append('car[name]', carDatas.name);
    formData.append('car[description]', carDatas.description);
    formData.append('car[photo]', carDatas.photo);
    formData.append('car[price]', carDatas.price);
    formData.append('car[model]', carDatas.model);
    formData.append('car[user_id]', carDatas.user_id);

    await dispatch(AddnewCar(formData));
    setCarDatas({
      name: '',
      description: '',
      photo: '',
      price: '',
      model: '',
    });
    setSuccess('Car Added Successfully');
    navigate('/');
  };

  const handleChange = (e) => {
    setCarDatas({ ...carDatas, [e.target.name]: e.target.value });
  };

  return (
    <section className="container w-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-10 w-100">
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="text-primary">Add New Car</h1>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
              <label htmlFor="carname" className="form-label text-primary">
                Car Name
                <input
                  type="text"
                  name="name"
                  value={carDatas.name}
                  onChange={handleChange}
                  id="carname"
                  className="form-control"
                  placeholder="Car Name"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="carPrice" className="form-label text-primary">
                Car Price
                <input
                  type="number"
                  name="price"
                  value={carDatas.price}
                  onChange={handleChange}
                  className="form-control"
                  id="carPrice"
                  placeholder="Car Price"
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="carmodel" className="form-label text-primary">
                Car Model

                <input
                  type="text"
                  name="model"
                  value={carDatas.model}
                  onChange={handleChange}
                  className="form-control"
                  id="carmodel"
                  placeholder="Car Model"
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="carImage" className="form-label text-primary">
                Car Image

                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setCarDatas({ ...carDatas, photo: file });
                  }}
                  className="form-control"
                  id="carImage"
                  placeholder="Enter your image url"
                />

              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="carDescription" className="form-label text-primary">
                Car Description

                <textarea
                  name="description"
                  value={carDatas.description}
                  onChange={handleChange}
                  className="form-control"
                  id="carDescription"
                  rows="3"
                />
              </label>
            </div>
            <div className="mb-3">
              <input type="submit" className="btn btn-primary" value="Add Car" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCar;
