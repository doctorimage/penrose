import * as React from "react";

import { IGPIPropsDraggable } from "./types";
import draggable from "./Draggable";
import { toScreen, toHex, EndArrowhead } from "./Util";

class Arrow extends React.Component<IGPIPropsDraggable> {
  public render() {
    const { shape, canvasSize, onClick } = this.props;
    // const style = shape.style.contents;
    const [sx, sy] = toScreen(
      [shape.startX.contents, shape.startY.contents],
      canvasSize
    );
    const [ex, ey] = toScreen(
      [shape.endX.contents, shape.endY.contents],
      canvasSize
    );
    const color = toHex(shape.color.contents);
    return (
      <g
        pointerEvents="bounding-box"
        onMouseDown={onClick}
      >
        <EndArrowhead id="arrowhead" color={color} />
        <path
          d={`M${sx} ${sy} L${ex} ${ey}`}
          fill={color}
          stroke={color}
          stroke-width={shape.thickness.contents}
          markerEnd="url(#arrowhead)"
        />
        <title>{shape.name.contents}</title>
      </g>
    );
  }
}
export default draggable(Arrow);