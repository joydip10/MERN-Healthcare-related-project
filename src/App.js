import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Doctors from './Components/Doctors/Doctors';
import LabTests from './Components/LabTests/LabTests';
import Therapies from './Components/Therapies/Therapies';
import SignUpOrIn from './Components/SignUpOrIn/SignUpOrIn';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import AboutUs from './Components/AboutUs/AboutUs';
import DetailsInfo from './Components/DetailsInfo/DetailsInfo';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route exact path="/labTests">
            <LabTests></LabTests>
          </Route>
          <Route exact path="/therapies">
            <Therapies></Therapies>
          </Route>
          <Route exact path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/signupin">
            <SignUpOrIn></SignUpOrIn>
          </Route>
          <PrivateRoute exact path="/details/:detailID">
            <DetailsInfo></DetailsInfo>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
