import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import initializeAuthentication from './Components/Authentication/Firebase/firebase.init';
import Home from './Components/SinglePages/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/SinglePages/About';
import Contact from './Components/SinglePages/Contact';
import Notfound from './Components/SinglePages/Notfound';
import Destination from './Components/SinglePages/Destination';
import Footer from './Components/SinglePages/Footer';
import AddDestination from './Components/AddDestination/AddDestination';
import Registration from './Components/Authentication/Registration/Registration';
import Login from './Components/Authentication/Login/Login';

initializeAuthentication();

function App() {
  return (
    <>
      <Router>
        <Navbar />
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

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/admin/add-destinations'>
            <AddDestination />
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
