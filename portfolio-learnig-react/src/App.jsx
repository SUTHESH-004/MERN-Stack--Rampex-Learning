import { assets } from "./assets/images/assets";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div
        className="fixed z-1 top-0 h-[100vh] w-[100vw]"
        style={{
          backgroundImage: `url(${assets.staticWallpaper})`,
        }}
      ></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
