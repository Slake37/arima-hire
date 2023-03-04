import AboutUs from "./components/AboutUs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Route,Routes } from "react-router-dom";
import AirportTransfer from "./pages/AirportTransfer";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#183A1D] to-[#E1EEDD] min-h-screen max-w-[1690px] m-auto">
      <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path ='/services/airporttransfer' element={<AirportTransfer/>}/>
      </Routes>
    </div>
  );
}

export default App;
