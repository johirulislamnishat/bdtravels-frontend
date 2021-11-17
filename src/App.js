import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/SinglePages/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/NotFound/Notfound';
import Destination from './Components/SinglePages/Destination';
import Footer from './Components/Footer/Footer';
import AddDestination from './Components/Dashboard/AddDestination/AddDestination';
import Registration from './Components/Authentication/Registration/Registration';
import Login from './Components/Authentication/Login/Login';
import DestinationDetails from './Components/SinglePages/DestinationDetails'
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/SinglePages/PrivateRoute';
import UpdateBooking from './Components/SinglePages/UpdateBooking';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ManageAll from './Components/Dashboard/ManageOrder/ManageOrder';
import MyOrders from './Components/SinglePages/MyOrders';


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/registration'>
              <Registration />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/destination'>
              <Destination />
            </Route>

            <Route path='/update-booking'>
              <UpdateBooking />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <PrivateRoute path='/admin/add-destinations'>
              <AddDestination />
            </PrivateRoute>

            <PrivateRoute path='/admin'>
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path='/manage-orders'>
              <ManageAll />
            </PrivateRoute>

            <PrivateRoute path='/destination-details/:id'>
              <DestinationDetails />
            </PrivateRoute>

            <PrivateRoute path='/my-orders'>
              <MyOrders />
            </PrivateRoute>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
