import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heading from './Components/Heading/Heading';
import Body from "./Components/Body/Body"
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/LoginSignUp/Login';
import Signup from './Components/LoginSignUp/SignUp';
import Logout from './Components/Logout/Logout';
function App() {
  return (
    <Router>
      <>
      <Heading/>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
      <Footer/>
      </>
    </Router>
  );
}

export default App;
