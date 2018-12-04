import * as React from "react";
import { toScreen, toHex } from "./Util";
import draggable from "./Draggable";
import { IGPIPropsDraggable } from "./types";

class Circle extends React.Component<IGPIPropsDraggable> {
  public render() {
    const { shape } = this.props;
    const { dx, dy, onClick } = this.props;
    const { canvasSize } = this.props;
    const [x, y] = toScreen([shape.x.contents, shape.y.contents], canvasSize);
    const fillColor = toHex(shape.color.contents);
    const fillAlpha = shape.color.contents[3];
    const strokeColor = toHex(shape.strokeColor.contents);
    const strokeAlpha = shape.strokeColor.contents[3];
    const thickness = shape.strokeWidth.contents;

    return (
      <circle
        cx={x - dx}
        cy={y + dy}
        r={shape.r.contents}
        fill={fillColor}
        fillOpacity={fillAlpha}
	stroke={strokeColor}
	strokeOpacity={strokeAlpha}
	strokeWidth={thickness}
        onMouseDown={onClick}
      >
        <title>{shape.name.contents}</title>
      </circle>
    );
  }
}
export default draggable(Circle);