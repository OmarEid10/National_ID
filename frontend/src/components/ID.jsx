import  { useState } from "react";
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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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
    } finally {
      setLoading(false);
    }
    // Submit the valid ID (implement your logic here)
    setBackButton(true);
    console.log("Valid National ID submitted:", id);
  };

  const idForm = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200">
          <div className="p-6 space-y-6">
            <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
              أدخل الرقم القومى المكون من 14 رقم
            </h1>
            <input
              className="w-full p-3 border bg-inherit rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="الرقم القومى"
              onChange={handleChange}
              value={id}
            />
            <button
              type="button"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium rounded-lg py-3 px-4 text-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
              onClick={handleButtonClick}
              disabled={loading}
            >
              {loading ? "جاري التحميل..." : "إدخال"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const loadingComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200 p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-lg text-gray-700">جاري تحميل البيانات...</p>
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
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[60vh]">
      {loading ? loadingComponent() : validateId == "" ? idForm() : idDetails()}
      {backButton && !loading ? (
        <button
          className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 px-6 mt-4 rounded-lg flex items-center gap-2 transition duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          onClick={() => handleBackButton()}
        >
          <IoMdArrowRoundBack />
          رجوع
        </button>
      ) : null}
    </div>
  );
}

export default ID;
