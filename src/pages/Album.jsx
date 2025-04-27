import React, { useState } from "react";

// 2022
import img1 from "../assets/Img/Album/2022/1.png";
import img2 from "../assets/Img/Album/2022/2.png";
import img3 from "../assets/Img/Album/2022/3.png";
import img4 from "../assets/Img/Album/2022/4.png";
import img5 from "../assets/Img/Album/2022/5.png";
import img6 from "../assets/Img/Album/2022/6.png";
import img7 from "../assets/Img/Album/2022/7.png";
import img9 from "../assets/Img/Album/2022/9.png";
import img10 from "../assets/Img/Album/2022/10.png";
import img11 from "../assets/Img/Album/2022/11.png";
import img12 from "../assets/Img/Album/2022/12.png";
import img13 from "../assets/Img/Album/2022/13.png";
import img14 from "../assets/Img/Album/2022/14.png";
import img15 from "../assets/Img/Album/2022/15.png";

// 2023
import img17 from "../assets/Img/Album/2023/1.png";
import img18 from "../assets/Img/Album/2023/2.png";
import img19 from "../assets/Img/Album/2023/3.png";
import img20 from "../assets/Img/Album/2023/4.png";
import img21 from "../assets/Img/Album/2023/5.png";
import img22 from "../assets/Img/Album/2023/6.png";
import img23 from "../assets/Img/Album/2023/7.png";
import img24 from "../assets/Img/Album/2023/8.png";
import img25 from "../assets/Img/Album/2023/9.png";
import img26 from "../assets/Img/Album/2023/10.png";
import img27 from "../assets/Img/Album/2023/11.png";
import img28 from "../assets/Img/Album/2023/12.png";
import img29 from "../assets/Img/Album/2023/13.png";

// 2024
import img30 from "../assets/Img/Album/2024/1.png";
import img31 from "../assets/Img/Album/2024/2.png";
import img32 from "../assets/Img/Album/2024/3.png";
import img33 from "../assets/Img/Album/2024/4.png";
import img34 from "../assets/Img/Album/2024/5.png";
import img35 from "../assets/Img/Album/2024/6.png";
import img36 from "../assets/Img/Album/2024/7.png";
import img37 from "../assets/Img/Album/2024/8.png";
import img38 from "../assets/Img/Album/2024/9.png";
import img39 from "../assets/Img/Album/2024/10.png";
import img40 from "../assets/Img/Album/2024/11.png";
import img41 from "../assets/Img/Album/2024/12.png";
import img42 from "../assets/Img/Album/2024/13.png";
import img43 from "../assets/Img/Album/2024/14.png";
import img44 from "../assets/Img/Album/2024/15.png";

// 2025
import img45 from "../assets/Img/Album/2025/1.png";
import img46 from "../assets/Img/Album/2025/2.png";
const imagesByYear = {
  2022: [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ],
  2023: [
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
  ],
  2024: [
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
  ],
  2025: [img45, img46],
};

const Album = () => {
  const [selectedYear, setSelectedYear] = useState(2022);

  return (
    <div className="bg-[#f0fbf9] min-h-screen flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl font-bold text-[#0f766e] mb-8">Album</h1>

      {/* Year Selection */}
      <div className="flex gap-4 mb-10">
        {[2022, 2023, 2024, 2025].map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors ${
              selectedYear === year
                ? "bg-[#0f766e] text-white shadow-md"
                : "bg-white text-[#0f766e] border border-[#0f766e] hover:bg-[#d1fae5]"
            }`}
          >
            Năm {year}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {imagesByYear[selectedYear].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Ảnh ${selectedYear} - ${idx + 1}`}
            className="rounded-2xl shadow-lg object-cover h-[300px] w-full transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

      {/* Special Text for 2025 */}
      {selectedYear === 2025 && (
        <p className="text-xl text-center mt-8 text-[#0f766e]">
          Năm nay hơi ít ảnh nha, cùng anh làm đầy nó nào!
        </p>
      )}
    </div>
  );
};

export default Album;
