/* eslint-disable react/prop-types */


function Details({ id, year, month, day, isBornAbroad, gender, city }) {
  const birthCityText = isBornAbroad ? "مولود خارج البلاد" : city;

  return (
    <div dir="rtl" className="w-full max-w-md mx-auto bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden my-6">
      <div className="px-6 py-4">
        <div className="flex justify-center mb-4">
          <h1 className="font-bold text-2xl md:text-3xl text-center text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent border-2 border-blue-200 rounded-full px-6 py-2">
            بيانات الرقم القومى
          </h1>
        </div>

        <div className="space-y-3">

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 text-lg">الرقم القومي:</span>
            <span className="text-gray-900 text-lg font-mono">{id}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 text-lg">محافظة الميلاد:</span>
            <span className="text-gray-900 text-lg">{birthCityText}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 text-lg">سنة الميلاد:</span>
            <span className="text-gray-900 text-lg">{year}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 text-lg">تاريخ الميلاد:</span>
            <span className="text-gray-900 text-lg">{`${day}-${month}-${year}`}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 text-lg">الجنس:</span>
            <span className="text-gray-900 text-lg">{gender}</span>
          </div>

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
