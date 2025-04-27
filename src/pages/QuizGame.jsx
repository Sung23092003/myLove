import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import diemImg from "../assets/Img/diem.png";
import { Link } from "react-router-dom";
const QuizGame = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);

  const gridSize = 4;

  const questions = [
    {
      id: 1,
      x: 1,
      y: 2,
      question: "Anh mua trà sữa cho em lần đầu vào ngày nào?",
      options: ["14/02", "16/03", "20/04", "01/05"],
      answer: 1,
    },
    {
      id: 2,
      x: 2,
      y: 1,
      question: "Ngày chính thức yêu nhau là ngày nào?",
      options: ["01/01", "14/03", "26/04", "30/04"],
      answer: 2,
    },
    {
      id: 3,
      x: 3,
      y: 1,
      question: "Câu đầu tiên em nhắn cho anh ở fb là gì?",
      options: ["Hiii", "Xời", "Chị qua đây nhanh rứa", "Chưa ngủ hả bà"],
      answer: 2,
    },
    {
      id: 4,
      x: 3,
      y: 3,
      question: "Yêu anh không?",
      options: ["Dạ cóa", "Không"],
      answer: 0,
    },
    {
      id: 5,
      x: 0,
      y: 3,
      question: "Bộ phim xem cùng nhau đầu tiên có tên là gì?",
      options: [
        "Mai",
        "Nhà Bà Lữ",
        "Điều ước cuối cùng của tù nhân",
        "Bộ tứ báo thủ",
      ],
      answer: 2,
    },
    {
      id: 6,
      x: 1,
      y: 0,
      question: "Mình đi Huế bao nhiêu lần rồi?",
      options: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      id: 7,
      x: 0,
      y: 2,
      question: "Áo đôi đầu tiên của tụi mình có màu gì?",
      options: ["Trắng", "Hồng", "Xanh", "Đen"],
      answer: 0,
    },
  ];

  const move = (dx, dy) => {
    const newX = position.x + dx;
    const newY = position.y + dy;
    if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
      const q = questions.find((q) => q.x === newX && q.y === newY);
      const currentQ = questions[currentLevel];

      if (q && q.id === currentQ.id && !answeredCorrectly.includes(q.id)) {
        setCurrentQuestion(q);
        setShowQuestion(true);
      } else {
        // Cho di chuyển tự do, nhưng không mở câu hỏi khác
        setPosition({ x: newX, y: newY });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showQuestion) return;
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          move(0, -1);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          move(0, 1);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          move(-1, 0);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          move(1, 0);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position, showQuestion]);

  return (
    <div className="p-8 flex flex-col items-center min-h-screen bg-[#f0fdfa]">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f766e] mb-6">
        {/* Trò chơi kỷ niệm của tụi mình 💕 */}
        Trả lời đúng hết tuii mới cho đi chơi
      </h2>

      <div className="grid grid-cols-4 gap-3 w-[350px] md:w-[420px] h-[350px] md:h-[420px] transition-all">
        {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
          const x = idx % gridSize;
          const y = Math.floor(idx / gridSize);
          const isPlayer = x === position.x && y === position.y;
          const q = questions.find((q) => q.x === x && q.y === y);
          const isAnswered = q && answeredCorrectly.includes(q.id);

          return (
            <div
              key={idx}
              className={`w-full h-full flex items-center justify-center border-2 rounded-xl font-bold text-xl md:text-2xl transition-all duration-200 ${
                isPlayer
                  ? "bg-pink-300 shadow-lg"
                  : q
                  ? isAnswered
                    ? "bg-green-200"
                    : q.id === questions[currentLevel]?.id
                    ? "bg-yellow-200"
                    : "bg-gray-200"
                  : "bg-gray-100"
              }`}
            >
              {isPlayer ? (
                // ? "🧍‍♂️"
                <img
                  src={diemImg}
                  alt="Player"
                  className="w-16 h-16 md:w-20 md:h-20 scale-150 object-contain"
                />
              ) : q ? (
                isAnswered ? (
                  "✔️"
                ) : q.id === questions[currentLevel]?.id ? (
                  "❓"
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

      {/* Câu hỏi popup */}
      {showQuestion && currentQuestion && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl rounded-2xl z-30 w-[90%] max-w-md text-center">
          <h3 className="font-bold text-xl text-[#0f766e]">
            {currentQuestion.question}
          </h3>
          <div className="mt-6 space-y-3">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                className="w-full bg-[#14b898] hover:bg-[#0f766e] text-white p-3 rounded-lg text-base font-semibold transition-all"
                onClick={() => {
                  if (idx === currentQuestion.answer) {
                    toast.success("Đúng rồi nèee 💖");
                    setAnsweredCorrectly((prev) => [
                      ...prev,
                      currentQuestion.id,
                    ]);
                    setCurrentLevel((prev) => prev + 1);
                  } else {
                    toast.error("Sai mất tiu 😢");
                  }
                  setShowQuestion(false);
                }}
              >
                {String.fromCharCode(65 + idx)}. {opt}
              </button>
            ))}
          </div>
        </div>
      )}
      <Link
        to="/quiz2"
        className="mt-8 text-lg font-semibold text-[#14b898] hover:text-[#0f766e]"
      >
        Trò thứ 2
      </Link>
    </div>
  );
};

export default QuizGame;
