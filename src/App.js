import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import About from './Pages/About';
import Services from './Pages/Services';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Footer from './component/Footer';
import ChineseCuisine from './menuPages/ChineseCuisine';
//import ChineseCuisine from './menuPages/ChineseCuisine';
import ContinentalCuisine from './menuPages/ContinentalCuisine';
import IndianCuisine from './menuPages/IndianCuisine';
import MughlaiCuisine from './menuPages/MughlaiCuisine';
import SouthIndianCuisine from './menuPages/SouthIndianCuisine';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/chinese" element={<ChineseCuisine />} /> */}
          {/* <Route path="/continental-cuisine" element={<ContinentalCuisine />} /> */}
          <Route path="/indian-cuisine" element={<IndianCuisine />} />
          {/* <Route path="/mughlai-cuisine" element={<MughlaiCuisine />} /> */}
          {/* <Route path="/south-indian-cuisine" element={<SouthIndianCuisine />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
