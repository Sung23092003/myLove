import React, { useState, useRef, useEffect } from 'react';
import CanvasDraw from "react-canvas-draw";
import { toast, Toaster } from 'react-hot-toast';

const LovePictionary = () => {
  const canvasRef = useRef(null);

  const [drawnImage, setDrawnImage] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [isDrawing, setIsDrawing] = useState(true);
  const [guessedWord, setGuessedWord] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000'); 

  const words = [
    "Trà sữa",
    "Sting",
  ];

  const colors = [
    "#000000", // Đen
    "#f87171", // Đỏ hồng
    "#fb923c", // Cam
    "#facc15", // Vàng
    "#4ade80", // Xanh lá
    "#60a5fa", // Xanh dương
    "#a78bfa", // Tím
    "#ec4899", // Hồng
  ];

  const getRandomWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
  };

  const handleGuess = () => {
    if (guessedWord.trim().toLowerCase() === currentWord.toLowerCase()) {
      toast.success("Đúng rùi nè");
    } else {
      toast.error("Không đúng rồi! 😢");
    }
  };

  const handleClear = () => {
    canvasRef.current?.clear();
    setDrawnImage('');
    setIsDrawing(true);
    getRandomWord();
    setGuessedWord('');
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        canvasRef.current?.undo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-8 flex flex-col items-center min-h-screen bg-[#f0fdfa]">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f766e] mb-6">
        Trò chơi Love Pictionary 💕
      </h2>

      {isDrawing ? (
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-[#0f766e] mb-2">
            Vẽ từ khóa: <strong>{currentWord}</strong>
          </h3>

          {/* Bảng chọn màu */}
          <div className="flex justify-center gap-2 mb-4 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black scale-110' : 'border-white'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Canvas */}
          <CanvasDraw
            ref={canvasRef}
            brushColor={selectedColor}
            brushRadius={3}
            lazyRadius={0}
            canvasWidth={500}
            canvasHeight={400}
            className="border rounded-lg shadow"
            onChange={(canvas) => setDrawnImage(canvas.getDataURL())}
          />
          <div className="mt-4 space-x-4">
            <button
              className="bg-[#14b898] text-white p-3 rounded-lg font-semibold"
              onClick={() => setIsDrawing(false)}
            >
              Hoàn thành vẽ
            </button>
            <button
              className="bg-yellow-400 text-white p-3 rounded-lg font-semibold"
              onClick={() => canvasRef.current?.undo()}
            >
              Undo (Ctrl + Z)
            </button>
            <button
              className="bg-gray-500 text-white p-3 rounded-lg font-semibold"
              onClick={handleClear}
            >
              Làm lại
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-[#0f766e]">Đoán từ khóa:</h3>
          <input
            type="text"
            placeholder="Nhập từ bạn đoán"
            value={guessedWord}
            onChange={(e) => setGuessedWord(e.target.value)}
            className="p-2 border rounded-lg mt-2 w-72"
          />
          <div className="mt-4 space-x-4">
            <button
              className="bg-[#14b898] text-white p-3 rounded-lg font-semibold"
              onClick={handleGuess}
            >
              Đoán
            </button>
            <button
              className="bg-gray-500 text-white p-3 rounded-lg font-semibold"
              onClick={handleClear}
            >
              Làm lại
            </button>
          </div>
        </div>
      )}

      {drawnImage && (
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-[#0f766e]">Hình bạn vừa vẽ:</h3>
          <img
            src={drawnImage}
            alt="Drawing"
            className="mt-2 border rounded shadow-lg w-[90%] max-w-md"
          />
        </div>
      )}
    </div>
  );
};

export default LovePictionary;
