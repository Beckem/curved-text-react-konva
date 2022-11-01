import { useState } from "react";
import { Stage, Layer, Path, TextPath } from "react-konva";

function App() {
  const [diameterX, setDiameterX] = useState(100);
  const [diameterY, setDiameterY] = useState(100);
  const [cx, setCx] = useState(150);
  const [cy, setCy] = useState(150);
  const [rotation, setRotation] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textBaseline, setTextBaseline] = useState("middle");
  const path = `M 0 100 a ${diameterX} ${diameterY} 0 1 1 1 0`;

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
          <div className="space-x-4 ml-auto flex items-center">
            <label>Diameter X</label>
            <div className="flex flex-col items-center">
              <div>{diameterX}</div>
              <input
                type="range"
                value={diameterX}
                min={1}
                max={300}
                onChange={(e) => {
                  setDiameterX(e.target.value);
                }}
                className="border w-20 p-1"
              />
            </div>
          </div>
          <div className="space-x-4 ml-auto flex items-center">
            <label>Diameter Y</label>
            <div className="flex flex-col items-center ">
              <div>{diameterY}</div>
              <input
                type="range"
                value={diameterY}
                min={1}
                max={300}
                onChange={(e) => {
                  setDiameterY(e.target.value);
                }}
                className="border w-20 p-1"
              />
            </div>
          </div>

          <div className="space-x-4 ml-auto flex items-center">
            <label>Rotate</label>
            <div className="flex flex-col items-center ">
              <div>{rotation}</div>
              <input
                type="range"
                value={rotation}
                min={0}
                max={360}
                onChange={(e) => {
                  setRotation(e.target.value);
                }}
                className="border w-20 p-1"
              />
            </div>
          </div>
          <div className="space-x-4 ml-auto flex items-center">
            <label>Letter Spacing</label>
            <div className="flex flex-col items-center ">
              <div>{letterSpacing}</div>
              <input
                type="range"
                value={letterSpacing}
                min={0}
                max={360}
                onChange={(e) => {
                  setLetterSpacing(e.target.value);
                }}
                className="border w-20 p-1"
              />
            </div>
          </div>
          <div className="space-x-4 ml-auto">
            <label>Text Base</label>

            <select
              className="w-20 p-1 border"
              onChange={(e) => setTextBaseline(e.target.value)}
            >
              <option value="middle">Middle</option>
              <option value="bottom">Bottom</option>
              <option value="top">Top</option>
            </select>
          </div>
        </div>
      </div>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Path fill="#666" x={cx} y={cy} data={path} />
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
