import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './src/Context/AuthProvider.js';
import About from './src/Pages/About/About/About.jsx';
import Approved from './src/Pages/Approved/Approved.jsx';
import Contact from './src/Pages/Contact/Contact/Contact.jsx';
import Dentist from './src/Pages/Dentist/Denitst/Dentist.jsx';
import Footer from './src/Pages/Home/Footer/Footer.jsx';
import Header from './src/Pages/Home/Header/Header.jsx';
import Home from './src/Pages/Home/Home/Home.jsx';
import Login from './src/Pages/Login/Login.jsx';
import NotFound from './src/Pages/NotFound/NotFound.jsx';
import Service from './src/Pages/Services/Service/Service.jsx';

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
