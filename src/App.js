import AboutUs from "./components/AboutUs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {
  return (
    <div className="bg-gradient-to-b from-[#183A1D] to-[#E1EEDD] min-h-screen max-w-[1690px] m-auto">
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default App;
