function AboutId() {
  const items = [
    {
      title: "الرقم الأول",
      example: (
        <>
          <span className="text-yellow-300 font-bold">2</span>
          XXXXXXXXXXXXX
        </>
      ),
      desc: "إذا كان الرقم 2 فهذا يعني أن الشخص مولود بين عام 1900 و 1999، وإذا كان 3 فهو مولود بعد عام 2000.",
    },
    {
      title: "السنة",
      example: (
        <>
          2 <span className="text-yellow-300 font-bold">01</span>
          XXXXXXXXXXX
        </>
      ),
      desc: "الرقمان التاليان يشيران إلى آخر رقمين من سنة الميلاد.",
    },
    {
      title: "الشهر",
      example: (
        <>
          2 01 <span className="text-yellow-300 font-bold">05</span>
          XXXXXXXXX
        </>
      ),
      desc: "الرقمان التاليان يشيران إلى شهر الميلاد.",
    },
    {
      title: "اليوم",
      example: (
        <>
          2 01 05 <span className="text-yellow-300 font-bold">15</span>
          XXXXXXX
        </>
      ),
      desc: "الرقمان التاليان يشيران إلى يوم الميلاد.",
    },
    {
      title: "كود المحافظة",
      example: (
        <>
          2 01 05 15{" "}
          <span className="text-yellow-300 font-bold">01</span>
          XXXXX
        </>
      ),
      desc: "يشير إلى المحافظة التي وُلد بها الشخص، وإذا كان مولود بالخارج يكون الكود 88.",
    },
    {
      title: "الرقم التسلسلي",
      example: (
        <>
          2 01 05 15 01{" "}
          <span className="text-yellow-300 font-bold">123</span>
          XX
        </>
      ),
      desc: "هذا الرقم يحدد ترتيب الشخص بين المواليد في نفس اليوم.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          شرح الرقم القومي المصري
        </h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          دليل مبسط لفهم مكونات الرقم القومي خطوة بخطوة
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h2>

            {/* Example */}
            <div
              className="mb-3 text-sm font-mono bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg inline-block text-left"
              dir="ltr"
            >
              {item.example}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        الرقم القومي يتكون من 14 رقم، وكل جزء منه له معنى محدد.
      </div>
    </div>
  );
}

export default AboutId;