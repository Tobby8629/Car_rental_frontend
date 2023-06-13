import React from 'react';

function AddCar() {
  return (
    <section className="container w-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-6 w-100">
          <h1 className="text-primary pb-1">Add New Car</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="carname" className="form-label text-primary">
                Car Name
                <input
                  type="text"
                  id="carname"
                  className="form-control"
                  placeholder="Car Name"
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="carPrice" className="form-label text-primary">
                Car Price

                <input
                  type="number"
                  className="form-control"
                  id="carPrice"
                  placeholder="Car Price"
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="carmodel" className="form-label text-primary">
                Car Model

                <input
                  type="number"
                  className="form-control"
                  id="carmodel"
                  placeholder="Car Model"
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="carImage" className="form-label text-primary">
                Car Image

                <input
                  type="file"
                  className="form-control"
                  id="carImage"
                  placeholder="Car Image"
                  required
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="carDescription" className="form-label text-primary">
                Car Description

                <textarea
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
}

export default AddCar;
