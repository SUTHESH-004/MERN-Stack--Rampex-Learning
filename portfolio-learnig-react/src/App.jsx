import { assets } from "./assets/images/assets";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div
        className="fixed z-1 top-0 h-[100vh] w-[100vw]"
        style={{
          backgroundImage: `url(${assets.staticWallpaper})`,
        }}
      >
        {" "}
      </div>
      <div className="fixed z-0 h-[100vh] w-[100vw]">
        <Navbar />
      </div>
    </>
  );
}

export default App;
