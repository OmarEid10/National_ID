export const IDAnalayse = async (req, res) => {
  try {
    const { id } = req.body;
    let year = 0;
    const month = id[3] + id[4];
    const day = id[5] + id[6];
    const cityCode = id[7] + id[8];
    let isBornabroad = false;
    let gender = "";

    const cityCodes = {
      "01": "القاهرة",
      "02": "الإسكندرية",
      "03": "بورسعيد",
      "04": "السويس",
      11: "دمياط",
      12: "الدقهلية",
      13: "الشرقية",
      14: "القليوبية",
      15: "كفر الشيخ",
      16: "الغربية",
      17: "المنوفية",
      18: "البحيرة",
      19: "الإسماعيلية",
      21: "الجيزة",
      22: "بني سويف",
      23: "الفيوم",
      24: "المنيا",
      25: "أسيوط",
      26: "سوهاج",
      27: "قنا",
      28: "أسوان",
      29: "الأقصر",
      31: "البحر الأحمر",
      32: "الوادي الجديد",
      33: "مطروح",
      34: "شمال سيناء",
      35: "جنوب سيناء",
      88: "مولود بالخارج",
    };
    const city = cityCodes[cityCode];

    if (id[0] == "2") {
      year += 1900 + parseInt(id[1] + id[2]);
    } else {
      year += 2000 + parseInt(id[1] + id[2]);
    }

    if (id[12] % 2 == 0) {
      gender = "أنثى";
    } else {
      gender = "ذكر";
    }

    if (city == "مولود بالخارج") {
      isBornabroad = true;
    }
    console.log("year", city);

    res.status(200).json({
      id: id,
      year: year,
      month: month,
      day: day,
      city: city,
      isBornabroad: isBornabroad,
      gender: gender,
    });
  } catch (error) {
    console.log("Error in National id controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
