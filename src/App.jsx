import React, { useState } from "react";

function App() {
  const [colors, setColors] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colors }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColors("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button
            onClick={() => setColors("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setColors("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}>
            Blue
          </button>
          <button
            onClick={() => setColors("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "olive" }}>
            Olive
          </button>
          <button
            onClick={() => setColors("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "gray" }}>
            Gray
          </button>
          <button
            onClick={() => setColors("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>
          <button
            onClick={() => setColors("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "pink" }}>
            Pink
          </button>
          <button
            onClick={() => setColors("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "purple" }}>
            Purple
          </button>
          <button
            onClick={() => setColors("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "lavender" }}>
            Lavender
          </button>
          <button
            onClick={() => setColors("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "white" }}>
            White
          </button>
          <button
            onClick={() => setColors("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "black" }}>
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
