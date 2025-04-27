import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

import music from "./assets/music/Erik.mp3";
import Header from "./component/HeaderComponent/Header";
import Footer from "../src/component/FooterComponent/Footer";
function App() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const newAudio = new Audio(music);
      newAudio.loop = true;
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    }
  };

  return (
    <Router>
      <Header />
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 left-5 p-2 text-center rounded-full bg-red-500 text-white text-2xl shadow-lg"
      >
        {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
      </button>
      <div className="px-20 pt-[200px] py-12 bg-white">
        <Routes>
          {routes.map(({ path, page: Page }, index) => (
            <Route key={index} path={path} element={<Page />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
