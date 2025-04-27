import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../assets/Img/mylove/traSua.png";
import img2 from "../assets/Img/mylove/tinhDau.png";
import img3 from "../assets/Img/mylove/HoiAn.png";
import img4 from "../assets/Img/mylove/ghen.png";
import img5 from "../assets/Img/mylove/sinhNhatEmDau.png";
import img6 from "../assets/Img/mylove/boPhimDauTien.png";
import img7 from "../assets/Img/mylove/DepDoi.png";
import img8 from "../assets/Img/mylove/DiHue2002.png";
import img9 from "../assets/Img/mylove/BoHoa2002.png";
import img10 from "../assets/Img/mylove/sinhNhatAnh2022.png";
import img11 from "../assets/Img/mylove/ukm2022.png";
import img12 from "../assets/Img/mylove/sangNamMoi2022.png";
import img13 from "../assets/Img/mylove/giaothua2023.png";
// 2023
import img14 from "../assets/Img/mylove/chayVaoVoiEm.png";
import img15 from "../assets/Img/mylove/HoiAn2023.png";
import img16 from "../assets/Img/mylove/boPhimNam2023.png";
import img17 from "../assets/Img/mylove/AnhThe.png";
import img18 from "../assets/Img/mylove/GapThu.png";
import img19 from "../assets/Img/mylove/HoaDep.png";
import img20 from "../assets/Img/mylove/xemVanNghe.png";
import img21 from "../assets/Img/mylove/ki.png";
import img22 from "../assets/Img/mylove/sinhNhatEm2.png";
import img23 from "../assets/Img/mylove/koBietNoigi.png";
import img24 from "../assets/Img/mylove/sinhNhatAnh2023.png";
import img25 from "../assets/Img/mylove/giaDinh.png";
import img26 from "../assets/Img/mylove/cauHon.png";
import img27 from "../assets/Img/mylove/HoiAn2023Lan2.png";
import img28 from "../assets/Img/mylove/giaothua2024.png";
// 2024
import img29 from "../assets/Img/mylove/DiHue2024.png";
import img30 from "../assets/Img/mylove/boPhimNam2024.png";
import img31 from "../assets/Img/mylove/KiNiem2Nam.png";
import img32 from "../assets/Img/mylove/sinhNhatEm3.png";
import img33 from "../assets/Img/mylove/quanSu.png";
import img34 from "../assets/Img/mylove/nauAn.png";
import img35 from "../assets/Img/mylove/sinhNhatAnh2024.png";
import img36 from "../assets/Img/mylove/giaothua2025.png";
// 2025
import img37 from "../assets/Img/mylove/nam2025.png";

import { AiFillHeart, AiOutlineHome } from "react-icons/ai";
import {
  FaRegGrinHearts,
  FaCameraRetro,
  FaBirthdayCake,
  FaFilm,
  FaAngry,
} from "react-icons/fa";
import {
  GiDiamondRing,
  GiCakeSlice,
  GiFlowerTwirl,
  GiFireworkRocket,
} from "react-icons/gi";
import { TbMilkshake } from "react-icons/tb";
import { MdOutlineCelebration } from "react-icons/md";
const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-[#14b898] flex flex-col items-center justify-start px-4 py-20">
      {/* Tiêu đề lớn */}
      <div
        className="h-[30vh] flex items-center justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center leading-snug">
          3 năm tuy không quá dài, <br /> nhưng là cả thanh xuân của tụi mình.
        </h1>
      </div>
      <div
        className="mt-96 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-5xl font-bold text-center flex items-center gap-2">
          Năm 2022
        </h1>
      </div>

      {/* Mốc 1: Ly trà sữa */}
      <div
        className="mt-20 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          16.03.2022 – Ly Trà Sữa Định Mệnh{" "}
          <TbMilkshake className="text-yellow-300 text-3xl" />
        </h1>
        <p className="text-white text-2xl font-medium text-center">
          Chỉ là một ly trà sữa thôi mà…
        </p>
        <p className="text-white text-2xl font-medium text-center">
          Nhưng là ly trà sữa đầu tiên anh mua cho một người mà tim đập nhanh
          tới vậy. <FaRegGrinHearts className="inline ml-2 text-red-400" />
        </p>

        <img
          src={img1}
          alt="Ly trà sữa định mệnh"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 2: Chính thức bên nhau */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          26.04.2022 – Chính Thức Bên Nhau{" "}
          <AiFillHeart className="text-red-500 text-3xl" />
        </h1>
        <p className="text-white text-2xl font-medium text-center">
          Mối tình đầu – và cũng là người cuối cùng anh muốn nắm tay đi hết cuộc
          đời này. <GiDiamondRing className="inline ml-2 text-white" />
        </p>
        <img
          src={img2}
          alt="Tình đầu"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 3: Hội An */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Hội An
          <FaCameraRetro className=" text-3xl" />
        </h1>
        <p className="text-white text-2xl font-medium text-center">
          Dưới ánh đèn lồng Hội An, mọi thứ như đẹp hơn khi có em bên cạnh.
        </p>
        <img
          src={img3}
          alt="Hội An"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 4: Lần đầu a ghen */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Ghen muốn cháy cả đầu ^^
        </h1>
        <p className="text-white text-2xl font-medium text-center">😅</p>
        <img
          src={img4}
          alt="Ghen lần đầu"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 5: Lần đầu a tổ chức sinh nhật cho bé nè */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Lần đầu a tổ chức sinh nhật cho bé nè{" "}
          <FaBirthdayCake className="text-yellow-400 text-3xl" />
        </h1>
        <p className="text-white text-2xl font-medium text-center">
          đẹp trai khum
          <GiCakeSlice className="inline ml-2 text-white" />
        </p>
        <img
          src={img5}
          alt="Sinh nhật đầu tiên"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 6: Bộ phim đầu tiên xem cùng nhau */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Bộ phim đầu tiên xem cùng nhau <FaFilm className="text-3xl" />{" "}
        </h1>
        <p className="text-white text-2xl font-medium text-center">
          Vừa lạnh vừa mỏi cổ haha
        </p>
        <img
          src={img6}
          alt="Bộ phim đầu tiên"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 7:*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Đẹp đôi hehe <AiFillHeart className="text-3xl text-red-500" />
        </h1>
        <img
          src={img7}
          alt="Đẹp đôi"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 8: về quê*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Về quê anh lần đầu nè{" "}
          <AiOutlineHome className="text-3xl text-blue-500" />
        </h1>
        <img
          src={img8}
          alt="đi huế"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 9: Bó hoa đầu tiên*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Bó hoa đầu tiên anh mua cho bé {`<3`}{" "}
          <GiFlowerTwirl className="text-pink-300 text-3xl" />
        </h1>
        <img
          src={img9}
          alt="đi huế"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 10: Sinh nhật của anh*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Quá đã lun <FaBirthdayCake className="text-yellow-300 text-3xl" />
        </h1>
        <img
          src={img10}
          alt="đi huế"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 11: Ghen*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Ukmmmmm <FaAngry className="text-red-400 text-3xl" />
        </h1>
        <img
          src={img11}
          alt="Ghen"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 12: về quê*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Chuẩn bị anh về quê đón tết{" "}
          <MdOutlineCelebration className="text-red-300 text-3xl" />
        </h1>
        <img
          src={img12}
          alt="về quê"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 13: Mùa giao thừa đầu tiên*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Mùa giao thừa đầu tiên cùng nhau {`<3`}{" "}
          <GiFireworkRocket className="text-yellow-300 text-3xl" />
        </h1>
        <img
          src={img13}
          alt="Giao thua"
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* 2023 */}
      <div
        className="mt-96 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-5xl font-bold text-center flex items-center gap-2">
          Năm 2023
        </h1>
      </div>

      {/* Mốc 1: Chạy vào với em*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Chạy vào với em kk {`<3`}{" "}
        </h1>
        <img
          src={img14}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 2: Hội an*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Hội An nữa nè {`<3`}{" "}
        </h1>
        <img
          src={img15}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 3: xem phim*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Dẫn bé đi xem bộ phim đầu năm {`<3`}{" "}
        </h1>
        <img
          src={img16}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 4: dẫn em đi chụp ảnh thẻ*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Làm tí ảnh thẻ không người đẹp {`<3`}{" "}
        </h1>
        <img
          src={img17}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 5: gắp thú bông*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Gắp gấu cho bé nè {`<3`}{" "}
        </h1>
        <img
          src={img18}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 6: tặng hoa*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Tặng hoa cho bó hoa đẹp nhất đời anh {`<3`}{" "}
        </h1>
        <img
          src={img19}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 7: đi xem bé diễn văn nghệ*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Nhìn như nam chính và nữ chính hen
        </h1>
        <img
          src={img20}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 8: xem bé tốt nghiệp*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          hehe
        </h1>
        <img
          src={img21}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 9: sinh nhật em*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Đón sinh nhật bé lần 2
        </h1>
        <img
          src={img22}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 11: hú*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Nhớ hăm
        </h1>
        <img
          src={img23}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 12: sinh nhật anh */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Đón sinh nhật anh lần 2 cùng nhau nè
        </h1>
        <img
          src={img24}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 13: gặp nhà anh */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Sợ hăm
        </h1>
        <img
          src={img25}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 14: CẦU HÔN */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Cầu hôn thành công, từ nay thành vợ tui nghe
        </h1>
        <img
          src={img26}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 15: Hội AN */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Năm ni đi Hội An hai lần luôn kk
        </h1>
        <img
          src={img27}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* Mốc 16: Giao thừa */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Tết đến kk
        </h1>
        <img
          src={img28}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* 2024 */}
      <div
        className="mt-96 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-5xl font-bold text-center flex items-center gap-2">
          Năm 2024
        </h1>
      </div>

      {/* Mốc 1:Đi huế*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Đi Huế hoyyy
        </h1>
        <img
          src={img29}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      {/* Mốc 2: Xem phim thôi*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Năm nào cũng đi xem phim đầu năm hen
        </h1>
        <img
          src={img30}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      {/* Mốc 3: */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Kĩ niệm 2 năm
        </h1>
        <img
          src={img31}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      {/* Mốc 4: */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Sinh nhật công chúa
        </h1>
        <img
          src={img32}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      
      {/* Mốc 6: */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Anh sau khi đi quân sự kk
        </h1>
        <img
          src={img33}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      {/* Mốc 7: */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Đảm đan mà ngồi kì nha kk
        </h1>
        <img
          src={img34}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      {/* Mốc 8: */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Sinh nhật anh, hạnh phúc quá lun
        </h1>
        <img
          src={img35}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
      {/* Mốc 9: */}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Năm mới rồi !!
        </h1>
        <img
          src={img36}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>

      {/* 2025 */}
      <div
        className="mt-96 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-5xl font-bold text-center flex items-center gap-2">
          Năm 2025
        </h1>
      </div>

      {/* Mốc 1:Đi huế*/}
      <div
        className="mt-80 flex flex-col items-center space-y-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h1 className="text-white text-3xl font-bold text-center flex items-center gap-2">
          Mong cho năm 2025 anh sẽ lo được cho bé
        </h1>
        <img
          src={img37}
          alt="..."
          className="w-full md:w-[500px] rounded-2xl shadow-lg mt-4"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default Timeline;
