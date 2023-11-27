import AboutUs from './componet/Aboutus';
import './App.css';
import Login from './componet/login';
import Register from './componet/Register';
import Sofas from './componet/sofas';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './componet/home';
import SearchAppBar from './componet/bootnav';
import Footer from './componet/footer';
import SignUp from './componet/Register';
import SignIn from './componet/login';
import Dining from './componet/dining/dining';
import DenseAppBar from './componet/navbar2';
import Contact from './componet/Contact';
import ContactUs from './componet/Contact';
function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      
      <Router>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/r' element={<SignUp/>} />
      <Route path='/a' element={<AboutUs/>} />
      <Route path='/sofa' element={<Sofas/>} />
      <Route path='/dining' element={<Dining/>} />
      <Route path='/c' element={<ContactUs/>}/>
      <Route path='/home' element={<Home />} />
      

     </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

{/* <PrimarySearchAppBar/>
<DenseAppBar/>
<Imagg/>
<BasicGrid/>
<Footer/>
</Router> */}