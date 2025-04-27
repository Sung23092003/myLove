import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Letter = () => {
  const [letters, setLetters] = useState([]);
  const [content, setContent] = useState("");

  // Lấy dữ liệu từ localStorage khi component được mount
  useEffect(() => {
    const storedLetters = localStorage.getItem("letters");
    if (storedLetters) {
      setLetters(JSON.parse(storedLetters)); // Nếu có dữ liệu, parse và cập nhật lại state
    }
  }, []); // Chạy một lần khi component mount

  // Mỗi khi letters thay đổi, lưu vào localStorage
  useEffect(() => {
    if (letters.length > 0) {
      localStorage.setItem("letters", JSON.stringify(letters)); // Cập nhật localStorage với state mới
    }
  }, [letters]); // Mỗi khi letters thay đổi, gọi để lưu vào localStorage

  const handleSend = () => {
    if (content.trim()) {
      const newLetter = {
        id: Date.now(),
        content,
        date: new Date().toLocaleString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      const updatedLetters = [newLetter, ...letters]; // Thêm thư mới vào mảng letters
      setLetters(updatedLetters); // Cập nhật lại state
      setContent(""); // Xóa nội dung sau khi gửi thư
    }
  };

  const handleDelete = (id) => {
    const updatedLetters = letters.filter((letter) => letter.id !== id); // Lọc thư cần xóa
    setLetters(updatedLetters); // Cập nhật lại state
  };

  return (
    <div className="bg-[#fff0f3] min-h-screen px-4 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#c9184a] mb-6">Thư tình số</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Viết cho nhau những dòng tâm sự yêu thương, giữ lại cảm xúc mỗi ngày trôi qua 📝💌
      </p>

      {/* Form viết thư */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md space-y-4">
        <textarea
          rows={6}
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#c9184a]"
          placeholder="Viết thư cho người ấy..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={handleSend}
            className="bg-[#c9184a] text-white px-6 py-2 rounded-full hover:bg-[#a10e37] transition"
          >
            Gửi thư 💌
          </button>
        </div>
      </div>

      {/* Danh sách thư đã gửi */}
      <div className="w-full max-w-2xl mt-10 space-y-6">
        {letters.length === 0 ? (
          <p className="text-center text-gray-500">Chưa có bức thư nào cả...</p>
        ) : (
          letters.map((letter) => (
            <div
              key={letter.id}
              className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#c9184a] relative"
            >
              <p className="text-gray-800 whitespace-pre-line">{letter.content}</p>
              <p className="text-right text-sm text-gray-500 mt-2">{letter.date}</p>
              <button
                onClick={() => handleDelete(letter.id)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                title="Xoá thư"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Letter;
