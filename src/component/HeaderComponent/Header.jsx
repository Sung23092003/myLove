import { useEffect, useState } from "react";
import { Link, useNavigate,useLocation  } from "react-router-dom";
import logo from "../../assets/Img/logo_header.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Dòng thời gian", path: "/timeline" },
    { label: "Thư tình số", path: "/letter" },
    { label: "Album ảnh", path: "/album" },
    { label: "Trò chơi", path: "/quiz" },
  ];

  return (
    <nav className="text-[#333] w-full min-h-[160px] flex items-center justify-center fixed top-0 left-0 z-10">
      <div
        className={`flex items-center justify-between px-20 bord shadow-md w-[80%] min-h-[120px] rounded-2xl font-medium text-[#333] ${
          isScrolled
            ? "bg-[#e0f7f4] shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* logo */}
        <div
          onClick={() => navigate("/")}
          className="w-[100px] h-[100px] cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        {/* nav */}
        <ul className="flex items-center space-x-6 w-[70%]">
  {navItems.map((item) => (
    <li key={item.path}>
      <Link
        to={item.path}
        className={`text-lg transition-colors duration-300 ${
          location.pathname === item.path
            ? "text-[#0f766e] font-semibold"
            : "hover:text-gray-400"
        }`}
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Header;
