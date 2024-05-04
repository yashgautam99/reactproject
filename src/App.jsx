import { useState } from "react";
import Heading from "./components/Heading";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className=" w-full h-screen text-center flex justify-center"
        style={{ backgroundColor: color }}
      >
        <Heading />
        {/* <div className="text-center">Hello</div> */}
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-4">
        <div className="bg-indigo-100 px-5 py-4 rounded-2xl flex flex-wrap justify-center shadow-lg  gap-3">
          <button
            onClick={() => setColor("red")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Grey")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("purple")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Gold")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Gold" }}
          >
            Gold
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("Silver")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "Silver" }}
          >
            Silver
          </button>
          <button
            onClick={() => setColor("brown")}
            className=" px-4 py-2 rounded-3xl shadow-slate-950 outline-none"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("blueviolet")}
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
