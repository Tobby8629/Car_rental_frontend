import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cars from './components/Cars';
import Reserve from './components/Reserve';
import MyReservation from './components/MyReservation';
import AddCar from './components/AddCar';
import DeleteCar from './components/DeleteCar';
import Login from './components/login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import CarDetails from './components/CarDetails';
import Showreserve from './components/Showreserve';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Cars />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="myreserve" element={<MyReservation />} />
        <Route path="add" element={<AddCar />} />
        <Route path="delete" element={<DeleteCar />} />
        <Route path="/:carId" element={<CarDetails />} />
        <Route path="showreserve" element={<Showreserve />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </div>
);

export default App;
