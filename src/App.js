import AboutUs from "./components/AboutUs";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { Route,Routes } from "react-router-dom";
import AirportTransfer from "./pages/AirportTransfer";
import DayOut from "./pages/DayOut";
import NightOut from "./pages/NightOut";
import WhatsAppWidget from "react-whatsapp-chat-widget"
import "react-whatsapp-chat-widget/index.css"
import Icon from './assets/Favicon/android-chrome-512x512.png'
import Wedding from "./pages/Wedding";
import Event from "./pages/Event";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-gradient-to-b from-[#183A1D] to-[#E1EEDD] min-h-screen max-w-[1690px] m-auto">
      <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path ='/services/airporttransfer' element={<AirportTransfer/>}/>
        <Route path ='/services/dayout' element={<DayOut/>}/>
        <Route path= '/services/nightout' element={<NightOut/>}/>
        <Route path='/services/wedding' element={<Wedding/>}/>
        <Route path='/services/event' element={<Event/>}/>
      </Routes>
       <WhatsAppWidget
			phoneNo="447564881729"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="60"
			iconColor="white"
			iconBgColor="green"
			headerIcon={Icon}
			headerIconColor="pink"
			headerTxtColor="yellow"
			headerBgColor="green"
			headerTitle="Arima Hire"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Johnny"
			footerBgColor="#999"
			placeholder="Type a message.."
			btnBgColor="green"
			btnTxt="Start Chat"
			btnTxtColor="black"
		/>
    </div>
  );
}

export default App;
