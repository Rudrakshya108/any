import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
import './App.css';
import HeroSection from './components/FirstPage/HeroSection/HeroSection';
import AboutUs from "./components/Navbar/AboutUs";
import ContactUs from "./components/Navbar/ContactUs";
import Home from "./components/Navbar/Home";


function App() {
  return (
    <>

    
    <HeroSection/>
    {/*
      <Router>
		<Switch>
	
		<Route exact path="/" component={Home} />
			

	
			

		<Route path="/contactus" component={ContactUs} />
    <Route path="/aboutus" component={AboutUs} />
   
			
	
		<Redirect to="/" />
		</Switch>
	</Router>
    
    */}

  

    
    
    </>
   
  );
}

export default App;
