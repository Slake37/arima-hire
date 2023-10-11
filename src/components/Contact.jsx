import { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

function Contact() {
  const [method, setMethod] = useState("");
  const [service, setService] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const nameRef = useRef();

  /** @type React.MutableRefObject<HTMLInputElement> */
  const phoneRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const emailRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const detailsRef = useRef();

  const onOptionChange = (e) => {
    setMethod(e.target.value);
    console.log(method);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "bookings"), {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      pending: true,
      timestamp: serverTimestamp(),
      contactMethod: method,
      service: service,
      details: detailsRef.current.value,
    });
    navigate("/contact/thankyou");
  };

  return (
    <div className="py-10 flex  flex-col lg:flex-row mx-auto">
      <div className=" flex w-full lg:w-[75vw] lg:mt-10  flex-col justify-center lg:h-screen mt-10 mx-auto items-center">
        <h1 className="text-[#E1EEDD] font-bold text-xl md:text-4xl ">
          Booking form
        </h1>
        <p className="text-[#E1EEDD]">
          Please fill in the form for a free quote
        </p>
        <p className="text-center flex justify-center items-center gap-2 mt-2 bg-red-500 text-white font-bold p-3 rounded-md">
          <FiAlertCircle className="text-white hidden md:flex " />
          If your prefered contact method is e-mail please check your Spam
          folder also
        </p>
        <form
          className="mt-4 flex flex-col w-full lg:w-1/2 items-center justify-center my-auto px-3"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
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

          <select
            onChange={(e) => setService(e.target.value)}
            className="p-2 text-md w-full rounded-sm my-2 bg-[#E1EEDD] outline-none"
          >
            <option value="">Select the service you want a quote for</option>
            <option value="airport transfer">Airport transfer</option>
            <option value="wedding">Wedding</option>
            <option value="day out">Day out</option>
            <option value="night out">Night out</option>
            <option value="event">Event</option>
            <option value="other">Other</option>
          </select>
          <textarea
            ref={detailsRef}
            cols="30"
            rows="8"
            className="w-full p-2 outline-none bg-[#E1EEDD]"
            placeholder="Please provide more details about your booking"
          ></textarea>
          <div className="p-2 text-md w-full rounded-sm my-2  outline-none">
            <h3 className="text-md font-semibold">
              Your prefered contact method
            </h3>
            <div>
              <input
                type="radio"
                name="method"
                id="phone"
                value="Phone"
                checked={method === "Phone"}
                onChange={onOptionChange}
                className="mx-1"
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="radio"
                name="method"
                id="email"
                value="Email"
                checked={method === "Email"}
                onChange={onOptionChange}
                className="mx-1"
              />
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
    </div>
  );
}

export default Contact;
