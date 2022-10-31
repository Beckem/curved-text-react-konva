import { useState } from "react";
import { Stage, Layer, Path, TextPath } from "react-konva";

function App() {
  const [size, setSize] = useState(100);
  const [cx, setCx] = useState(150);
  const [cy, setCy] = useState(150);
  const [rotation, setRotation] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textBaseline, setTextBaseline] = useState("middle");
  const path = `M 0 ${size} a ${size} ${size} 0 1 1 1 0`;

  return (
    <>
      <div className="absolute top-10 right-10 border pl-4 py-6 pr-10 z-10 text-sm">
        <div className="grid grid-cols-2 gap-4 w-[400px]">
          <div className="space-x-4 ml-auto">
            <label>X</label>
            <input
              type="number"
              value={cx}
              onChange={(e) => {
                setCx(e.target.value);
              }}
              className="border w-20 p-1"
            />
          </div>
          <div className="space-x-4 ml-auto">
            <label>Y</label>
            <input
              type="number"
              value={cy}
              onChange={(e) => {
                setCy(e.target.value);
              }}
              className="border w-20 p-1"
            />
          </div>
          <div className="space-x-4 ml-auto">
            <label>R</label>
            <input
              type="number"
              value={rotation}
              onChange={(e) => {
                setRotation(e.target.value);
              }}
              className="border w-20 p-1"
            />
          </div>
          <div className="space-x-4 ml-auto">
            <label>Size</label>
            <input
              type="number"
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
              }}
              className="border w-20 p-1"
            />
          </div>
          <div className="space-x-4 ml-auto">
            <label>Letter Spacing</label>
            <input
              type="number"
              value={letterSpacing}
              onChange={(e) => {
                setLetterSpacing(e.target.value);
              }}
              className="border w-20 p-1"
            />
          </div>
          <div className="space-x-4 ml-auto">
            <label>Text Base</label>

            <select
              className="w-20 p-1 border"
              onChange={(e) => setTextBaseline(e.target.value)}
            >
              <option value="middle">middle</option>
              <option value="bottom">bottom</option>
              <option value="top">top</option>
            </select>
          </div>
          {/* <input
              type="number"
              value={letterSpacing}
              onChange={(e) => {
                setLetterSpacing(e.target.value);
              }}
              className="border w-20 p-1"
            /> */}
        </div>
      </div>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Path fill="green" x={cx} y={cy} data={path} />
          <TextPath
            x={cx}
            y={cy}
            data={path}
            text="Hello everyone"
            fill="#333"
            fontSize="16"
            fontFamily="Arial"
            rotation={rotation}
            letterSpacing={+letterSpacing}
            textBaseline={textBaseline}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
