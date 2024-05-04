import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className=" w-full h-screen"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-4">
        <div className="bg-slate-100 px-5 py-4 rounded-2xl flex flex-wrap justify-center shadow-lg  gap-3">
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Grey" }}
          >
            Grey
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Gold" }}
          >
            Gold
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Silver" }}
          >
            Silver
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "blueviolet" }}
          >
            Voilet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
