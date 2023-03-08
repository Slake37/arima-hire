import { useState, useRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
  })

  const {name,surname,phoneNumber, email} = formData

  const handleChange = (e) => {
    setFormData ((prevState) => ({
      
        ...prevState,
        [e.target.id]:e.target.value
      }))
    
  }

  
  const navigate = useNavigate();
 

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const formDataCopy = {formData}
      formDataCopy.timeStamp = serverTimestamp()
      const docRef = await addDoc(collection(db,'bookings'),formDataCopy)
      navigate('/contact/thankyou')
    }catch(e){
      console.error(e)
    }
  }


  return (
    <div className="py-20 px-3 flex flex-col justify-center my-auto items-center">
      <h1 className="text-[#E1EEDD] font-bold text-xl md:text-4xl mt-3">
        Booking form
      </h1>
      <p className="text-[#E1EEDD]">Please fill in the form for a free quote</p>
      <form className="mt-4 flex flex-col w-full md:w-1/2 items-center justify-center my-auto" autocomplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id="name"
          placeholder="Your name"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          id="surname"
          placeholder="Your surname"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          id="phoneNumber"
          placeholder="Your phone number"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          placeholder="Your email"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-[#183A1D] py-2 w-full rounded-sm mt-3 text-[#FEFBE9] md:text-xl cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Contact;
