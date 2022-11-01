import { useState } from "react";
import { Stage, Layer } from "react-konva";
import TextCurvedNode from "./components/TextCurvedNode";
const initState = [
  {
    x: 150,
    y: 150,
    diameterX: 100,
    diameterY: 100,
    rotation: 0,
    letterSpacing: 0,
    textBaseline: "middle",
    id: 1,
  },
];
function App() {
  const [selectedId, selectShape] = useState(1);
  const [textCurveds, setTextCurveds] = useState(initState);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  const selectedItem = selectedId
    ? textCurveds.find((item) => item.id === selectedId)
    : null;

  return (
    <>
      {selectedId && (
        <div className="absolute top-10 right-10 border pl-4 py-6 pr-10 z-10 text-sm">
          <div className="grid grid-cols-2 gap-4 w-[400px]">
            <div className="space-x-4 ml-auto">
              <label>X</label>
              <input
                type="number"
                value={Math.round(selectedItem.x)}
                onChange={(e) => {
                  const newTextCurves = textCurveds.slice();
                  const selectedIndex = selectedId
                    ? textCurveds.findIndex((item) => item.id === selectedId)
                    : null;
                  newTextCurves[selectedIndex] = {
                    ...newTextCurves[selectedIndex],
                    x: e.target.value,
                  };
                  setTextCurveds(newTextCurves);
                }}
                className="border w-24 p-1"
              />
            </div>
            <div className="space-x-4 ml-auto">
              <label>Y</label>
              <input
                type="number"
                value={Math.round(selectedItem.y)}
                onChange={(e) => {
                  const newTextCurves = textCurveds.slice();
                  const selectedIndex = selectedId
                    ? textCurveds.findIndex((item) => item.id === selectedId)
                    : null;
                  newTextCurves[selectedIndex] = {
                    ...newTextCurves[selectedIndex],
                    y: e.target.value,
                  };
                  setTextCurveds(newTextCurves);
                }}
                className="border w-24 p-1"
              />
            </div>
            <div className="space-x-4 ml-auto flex items-center">
              <label>Diameter X</label>
              <div className="flex flex-col items-center">
                <div>{Math.round(selectedItem.diameterX)}</div>
                <input
                  type="range"
                  value={selectedItem.diameterX}
                  min={1}
                  max={300}
                  onChange={(e) => {
                    const newTextCurves = textCurveds.slice();
                    const selectedIndex = selectedId
                      ? textCurveds.findIndex((item) => item.id === selectedId)
                      : null;
                    newTextCurves[selectedIndex] = {
                      ...newTextCurves[selectedIndex],
                      diameterX: e.target.value,
                    };
                    setTextCurveds(newTextCurves);
                  }}
                  className="border w-24 p-1"
                />
              </div>
            </div>
            <div className="space-x-4 ml-auto flex items-center">
              <label>Diameter Y</label>
              <div className="flex flex-col items-center ">
                <div>{Math.round(selectedItem.diameterY)}</div>
                <input
                  type="range"
                  value={selectedItem.diameterY}
                  min={1}
                  max={300}
                  onChange={(e) => {
                    const newTextCurves = textCurveds.slice();
                    const selectedIndex = selectedId
                      ? textCurveds.findIndex((item) => item.id === selectedId)
                      : null;
                    newTextCurves[selectedIndex] = {
                      ...newTextCurves[selectedIndex],
                      diameterY: e.target.value,
                    };
                    setTextCurveds(newTextCurves);
                  }}
                  className="border w-24 p-1"
                />
              </div>
            </div>

            <div className="space-x-4 ml-auto flex items-center">
              <label>Rotate</label>
              <div className="flex flex-col items-center ">
                <div>{Math.round(selectedItem.rotation)}</div>
                <input
                  type="range"
                  value={selectedItem.rotation}
                  min={0}
                  max={360}
                  onChange={(e) => {
                    const newTextCurves = textCurveds.slice();
                    const selectedIndex = selectedId
                      ? textCurveds.findIndex((item) => item.id === selectedId)
                      : null;
                    newTextCurves[selectedIndex] = {
                      ...newTextCurves[selectedIndex],
                      rotation: e.target.value,
                    };
                    setTextCurveds(newTextCurves);
                  }}
                  className="border w-24 p-1"
                />
              </div>
            </div>
            <div className="space-x-4 ml-auto flex items-center">
              <label>Letter Spacing</label>
              <div className="flex flex-col items-center ">
                <div>{selectedItem.letterSpacing}</div>
                <input
                  type="range"
                  value={selectedItem.letterSpacing}
                  min={0}
                  max={30}
                  onChange={(e) => {
                    const newTextCurves = textCurveds.slice();
                    const selectedIndex = selectedId
                      ? textCurveds.findIndex((item) => item.id === selectedId)
                      : null;
                    newTextCurves[selectedIndex] = {
                      ...newTextCurves[selectedIndex],
                      letterSpacing: e.target.value,
                    };
                    setTextCurveds(newTextCurves);
                  }}
                  className="border w-24 p-1"
                />
              </div>
            </div>
            <div className="space-x-4 ml-auto">
              <label>Text Base</label>

              <select
                className="w-24 p-1 border"
                onChange={(e) => {
                  const newTextCurves = textCurveds.slice();
                  const selectedIndex = selectedId
                    ? textCurveds.findIndex((item) => item.id === selectedId)
                    : null;
                  newTextCurves[selectedIndex] = {
                    ...newTextCurves[selectedIndex],
                    textBaseline: e.target.value,
                  };
                  setTextCurveds(newTextCurves);
                }}
              >
                <option value="middle">Middle</option>
                <option value="top">Bottom</option>
                <option value="bottom">Top</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {textCurveds.map((item, index) => {
            return (
              <TextCurvedNode
                key={index}
                shapeProps={item}
                isSelected={item.id === selectedId}
                onSelect={() => {
                  selectShape(item.id);
                }}
                onChange={(newAttrs) => {
                  console.log(newAttrs);
                  const newTextCurves = textCurveds.slice();
                  newTextCurves[index] = newAttrs;
                  setTextCurveds(newTextCurves);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </>
  );
}

export default App;
