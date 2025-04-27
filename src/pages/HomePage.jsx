import {
  FaHeart,
  FaCameraRetro,
  FaGamepad,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import couple1 from "../assets/Img/home/coup1.png";
import couple2 from "../assets/Img/home/coup3.png";
import couple3 from "../assets/Img/home/coup2.png";

const Homepage = () => {
  return (
    <div className="bg-[#f0fbf9] flex flex-col items-center justify-start px-4 py-24 space-y-24">
      {/* Hero section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0f766e]">
          Trang web này anh làm ra dành cho tụi mình
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Nơi lưu giữ những kỷ niệm đẹp nhất, những dòng thư yêu thương và những
          khoảnh khắc không bao giờ quên.
        </p>
      </section>

      {/* Photo gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[couple1, couple2, couple3].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Kỷ niệm ${idx + 1}`}
            className="rounded-2xl shadow-lg object-cover h-[300px] w-full transition-transform duration-300 hover:scale-105"
          />
        ))}
      </section>

      {/* Feature cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        <FeatureCard
          icon={<FaEnvelopeOpenText size={30} />}
          title="Thư tình số"
          desc="Nơi viết và lưu trữ những dòng thư yêu thương dành cho nhau."
          to="/letter"
        />
        <FeatureCard
          icon={<FaGamepad size={30} />}
          title="Trò chơi"
          desc="Những trò chơi thú vị để hiểu nhau hơn và gắn kết hơn."
          to="/quiz"
        />
        <FeatureCard
          icon={<FaCameraRetro size={30} />}
          title="Album ảnh"
          desc="Cùng nhau lưu giữ mọi khoảnh khắc qua từng bức ảnh."
          to="/album"
        />
        <FeatureCard
          icon={<FaHeart size={30} />}
          title="Ký ức thời gian"
          desc="Góc nhỏ để xem lại hành trình tình yêu của tụi mình."
          to="/timeline"
        />
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, to }) => (
  <Link to={to}>
    <div className="bg-white rounded-2xl cursor-pointer shadow-md p-6 flex flex-col items-center text-center space-y-3 hover:shadow-xl transition-shadow duration-300">
      <div className="text-[#14b898]">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </Link>
);

export default Homepage;
