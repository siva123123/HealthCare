import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider.js';
import About from './Pages/About/About/About.js';
import Approved from './Pages/Approved/Approved.js';
import Contact from './Pages/Contact/Contact/Contact.js';
import Dentist from './Pages/Dentist/Denitst/Dentist.js';
import Footer from './Pages/Home/Footer/Footer.js';
import Header from './Pages/Home/Header/Header.js';
import Home from './Pages/Home/Home/Home.js';
import Login from './Pages/Login/Login.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Service from './Pages/Services/Service/Service.js';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/dentist' element={<Dentist />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
