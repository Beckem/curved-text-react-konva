import React, { useEffect, useRef } from "react";
import { Path, TextPath, Transformer } from "react-konva";

function TextCurvedNode({ onSelect, onChange, shapeProps, isSelected }) {
  const { diameterX, diameterY, x, y, rotation, letterSpacing, textBaseline } =
    shapeProps;
  const shapeRef = useRef();
  const trRef = useRef();
  const path = `M 0 100 a ${diameterX} ${diameterY} 0 1 1 1 0`;
  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <>
      <Path
        fill={`${isSelected ? "#999" : "#fff"}`}
        x={x}
        y={y}
        data={path}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        rotation={rotation}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            rotation: node.rotation(),
            diameterX: Math.min(300, diameterX * scaleX),
            diameterY: Math.min(300, diameterY * scaleY),
          });
        }}
      />
      <TextPath
        x={x}
        y={y}
        data={path}
        text="Hello everyone"
        fill="#333"
        fontSize="16"
        fontFamily="Arial"
        rotation={rotation}
        letterSpacing={+letterSpacing}
        textBaseline={textBaseline}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}

export default TextCurvedNode;
