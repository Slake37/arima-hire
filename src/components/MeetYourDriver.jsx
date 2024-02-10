import React from "react";
import profilePicture from "../assets/ionut_profile.jpg";
import vanPicture1 from "../assets/1.jpg";
import vanPicture2 from "../assets/2.jpg";
import vanPicture3 from "../assets/3.jpg";
import vanPicture4 from "../assets/4.jpg";

function MeetYourDriver() {
  return (
    <div className="py-[7rem] px-2 md:px-[5rem] mx-auto w-fit ">
      <h1 className="text-[#FEFBE9] font-Roboto-Condensed font-bold text-4xl md:text-5xl w-fit">
        Hello
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 w-fit mx-auto">
        <img
          src={profilePicture}
          alt="Your driver"
          className="md:w-1/4  rounded-md"
        />
        <p className="text-lg font-bold mt-5 mx-5 md:w-1/3">
          My name is Johnny. Actual is Ionut but translates into Johnny, so is
          easier for everyone. Originally I am from Transylvania ( you know,
          Dracula land), but lived in U.K. for more than 10 years. At the minute
          I have 2 jobs. One job is NHS mental healt (doing that for the past 8
          years) and the other one I wouldn't consider it a job, it's my private
          hire business. I have all the trainings and my DBS under close
          supervision by the NHS and Durham Council. If you require more
          information about me don't hesitate to ask me.
        </p>
      </div>
      <div className="flex flex-wrap w-full gap-2 margin-auto justify-center items-center">
        <img
          src={vanPicture1}
          alt="Arima Hire van picture"
          className="object-contain rounded-md dropshadow-md max-w-[320px]"
        />
        <img
          src={vanPicture2}
          alt="Arima Hire van picture"
          className="object-contain rounded-md dropshadow-md max-w-[320px]"
        />
        <img
          src={vanPicture4}
          alt="Arima Hire van picture"
          className="object-contain rounded-md dropshadow-md max-w-[320px]"
        />
      </div>
    </div>
  );
}

export default MeetYourDriver;
