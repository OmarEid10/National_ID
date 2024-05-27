import React from "react";

function AboutId() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-8">
        شرح الرقم القمي بالتفصيل
      </h1>
      <div className="text-lg leading-relaxed text-[#ffffff]">
        <div>
          <p className="mb-2 text-xl">
            <spam className="font-bold">1</spam>0000000000000
          </p>

          <p className="mb-4 text-xl">
            اذا كان هذا الرقم 2 فالشخص مولود فوق عام 1900 وقبل 2000 و اذا كان
            هذا الرقم 3 فالشخص مولود فوق عام2000
          </p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            0<spam className="font-bold">11</spam>00000000000
          </p>

          <p className="mb-4 text-xl">الرقمان يشيران الى سنة الميلاد</p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            000<spam className="font-bold">11</spam>000000000
          </p>

          <p className="mb-4 text-xl"> الرقمان يشيران الى شهر الميلاد </p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            00000<spam className="font-bold">11</spam>0000000
          </p>

          <p className="mb-4 text-xl"> الرقمان يشيران الى يوم الميلاد </p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            0000000<spam className="font-bold">11</spam>00000
          </p>

          <p className="mb-4 text-xl">
            {" "}
            الرقمان يشيران الى كود المحافظة المولود فيها و اذا كان مولود بالخارج
            يكون الكود 88{" "}
          </p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            0000000000<spam className="font-bold">111</spam>00
          </p>

          <p className="mb-4 text-xl">
            هذه الارقام تشير إلى تسلسل الشخص على الكمبيوتر بين المواليد في يوم
            ميلاده
          </p>
        </div>

        {/* Add more paragraphs here if needed */}
      </div>
    </div>

  );
}

export default AboutId;
