import { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

function Contact() {
  const[method, setMethod] = useState('')

   /** @type React.MutableRefObject<HTMLInputElement> */
  const nameRef = useRef()
   /** @type React.MutableRefObject<HTMLInputElement> */
  const surnameRef = useRef()
   /** @type React.MutableRefObject<HTMLInputElement> */
  const phoneRef = useRef()
   /** @type React.MutableRefObject<HTMLInputElement> */
  const emailRef = useRef()

 
  const onOptionChange = e => {
    setMethod(e.target.value)
    console.log(method)
  }
 

  
  const navigate = useNavigate();
 

  const handleSubmit = async (e) =>{
    e.preventDefault()
   
      await addDoc(collection(db,'bookings'),{
        name:nameRef.current.value,
        surname:surnameRef.current.value,
        phone:phoneRef.current.value,
        email:emailRef.current.value,
        pending:true,
        timestamp:serverTimestamp(),
        contactMethod:method
      })
      navigate('/contact/thankyou')
    
  }


  return (
    <div className="py-20 px-3 flex flex-col justify-center my-auto items-center">
      <h1 className="text-[#E1EEDD] font-bold text-xl md:text-4xl mt-3">
        Booking form
      </h1>
      <p className="text-[#E1EEDD]">Please fill in the form for a free quote</p>
      <form className="mt-4 flex flex-col w-full md:w-1/2 items-center justify-center my-auto" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          required
          
          id=""
          ref={nameRef}
          placeholder="Your name"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="text"
          name=""
          ref={surnameRef}
          required
         
          id=""
          placeholder="Your surname"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="text"
          name=""
          
          ref={phoneRef}
         required
          id=""
          placeholder="Your phone number"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <input
          type="email"
         
          
          
          ref={emailRef}
          id=""
          placeholder="Your email"
          className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
        />
        <div className="flex flex-col justify-start items-start w-full">
          <h3 className="text-md font-semibold">Your prefered contect method</h3>
          <div>
            <input type="radio" name="method" id="phone" value='Phone'  checked={method==='Phone'} onChange={onOptionChange} className="mx-1" />
            <label htmlFor="phone">Phone</label>
            <input type="radio" name="method" id="email" value='Email' checked={method === 'Email'} onChange={onOptionChange} className="mx-1" />
            <label htmlFor="email">E-mail</label>
          </div>
        </div>
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
