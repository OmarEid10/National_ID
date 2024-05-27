import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import Details from "./Details";
import { IoMdArrowRoundBack } from "react-icons/io";

function ID() {
  const [id, setId] = useState("");
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("");
  const [isBornAbroad, setIsBornAbroad] = useState(false);
  const [validateId, setValidateID] = useState([]);
  const [backButton, setBackButton] = useState(false);

  const handleChange = (event) => {
    const allowedChars = /^\d{0,14}$/;
    if (allowedChars.test(event.target.value)) {
      setId(event.target.value);
    }

  };

  const validateID = (value) => {
    const month = value[3] + value[4];
    const day = value[5] + value[6];
    const cityCode = value[7] + value[8];
    const cityCodes = [
      "01",
      "02",
      "03",
      "04",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "31",
      "32",
      "33",
      "34",
      "35",
      "88",
    ];

    // Validation logic
    if (value.length !== 14) {
      toast.error("الرقم القومى يجب أن يتكون من 14 رقمًا"); // "National ID must be 14 digits"
      return "error";
    }
    if (value[0] != "2" && value[0] != "3") {
      toast.error("الرقم القومى يجب أن يبدأ برقم 2 أو 3");
      return "error";
    }
    if (value[0] == "3") {
      const year = value[1] + value[2];
      if (year >= 24) {
        toast.error("الرقم القومى غير صحيح");
        return "error";
      }
    }
    if (month > 12 || day > 31) {
      toast.error("الرقم القومى غير صحيح");
      return "error";
    }

    // Check if city code is valid
    for (let i = 0; i < cityCodes.length; i++) {
      if (cityCode == cityCodes[i]) {
        break;
      }
      if (i == cityCodes.length - 1 && cityCode != cityCodes[i]) {
        toast.error("الرقم القومى غير صحيح");
        return "error";
      }
    }

    return ""; // Empty string indicates valid ID
  };

  const handleButtonClick = async () => {
    const errorMessage = validateID(id);
    if (errorMessage) {
      // Display error message (already handled in handleChange)
      return;
    }
    setValidateID(id);

    try {
      const res = await fetch("https://national-id.onrender.com/api/national", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      setCity(data.city);
      setYear(data.year);
      setMonth(data.month);
      setDay(data.day);
      setGender(data.gender);
      setIsBornAbroad(data.isBornAbroad);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
    // Submit the valid ID (implement your logic here)
    setBackButton(true);
    console.log("Valid National ID submitted:", id);
  };

  const idForm = () => {
    return (
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full bg-[#948979] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl text-center">
              أدخل الرقم القومى المكون من 14 رقم
            </h1>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="الرقم القومى"
              onChange={handleChange}
            />
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
						focus:outline-none focus:ring-[#24292F]/50 
              font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center text-xl"
              onClick={handleButtonClick}
            >
              إدخال
            </button>
          </div>
        </div>
      </div>
    );
  };

  const idDetails = () => {
    return (
      <Details {...{ id, year, month, day, gender, isBornAbroad, city }} />
    );
  };

  const handleBackButton = () => {
    setValidateID("");
    setCity("");
    setYear("");
    setMonth("");
    setDay("");
    setGender("");
    setIsBornAbroad("");
    setBackButton(false);
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      {validateId == "" ? idForm() : idDetails()}
      {backButton ? (
        <button
          className="bg-[#4D869C] text-white hover:bg-blue-400 font-bold py-1 px-10 mt-10 rounded flex items-center
          "
          onClick={() => handleBackButton()}
        >
          رجوع
        </button>
      ) : null}
    </div>
  );
}

export default ID;
