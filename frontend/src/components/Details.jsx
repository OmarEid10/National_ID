import React from "react";
import { Link } from "react-router-dom";
import ID from "./ID";

function Details({ id, year, month, day, gender, isBornAbroad, city }) {
  // max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
  return (
    <div className="max-w-sm mx-auto  bg-[#948979] shadow-lg  border-gray-700 rounded-lg overflow-hidden my-4 ">
      <div className="px-6 py-4">
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl mb-2 text-[#153448] border rounded-full border-white p-4">
            بيانات الرقم القومى
          </h1>
        </div>
        <div className="mb-4">
          <p className="text-[#153448] text-2xl">
            <strong>الرقم القومي : </strong> {id}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#153448] text-2xl">
            <strong>محافظة الميلاد : </strong> {city}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#153448] text-2xl">
            <strong className=""> سنة الميلاد : </strong> {year}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#153448] text-2xl">
            <strong> تاريخ الميلاد :</strong> {`${day}-${month}-${year}`}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#153448] text-2xl">
            <strong> الجنس : </strong> {gender}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;

//   const res = await fetch("/api/users/likes", {
//     credentials: "include",
//   });
//   const data = await res.json();
//   if (data.error) throw new Error(data.error);

//   setLikes(data.likedBy);
// } catch (error) {
//   toast.error(error.message);
// }
