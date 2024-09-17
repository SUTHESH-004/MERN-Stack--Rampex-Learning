import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-blue flex flex-col justify-center items-center">
        <div className=" w-[40%] h-[60%] bg-blue-100 flex flex-col justify-center items-center gap-5 rounded-lg shadow-black  ">
          <div>LOGIN</div>
          <div>
            <input
              className="h-[100%]"
              type="email"
              placeholder="Enter your name"
            />
          </div>
          <div className="h-30%">
            <input
              className="h-[100%]"
              type="password"
              placeholder="Enter the password"
            />
          </div>
          <div>
            <button onClick={SubmitEvent}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
