import * as React from 'react';
import Path from './Path';

export interface LineProps {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  animate?: any;
  attr?: any;
  stroke?: string;
  strokeWidth?: number;
}

export default class Line extends React.Component<LineProps, any> {
  static defaultProps = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  }

  path: Path = null;

  getElement() {
    return this.path.getElement();
  }

  render() {
    const { x1, x2, y1, y2, animate, attr, stroke, strokeWidth } = this.props;
    const PATH = ['M', `${x1}`, `${y1}`, 'L', `${x2}`, `${y2}`];
    if (animate) {
      if (animate.anim) {
        for (const key in animate.anim) {
          animate.anim[key].x1 = animate.anim[key].x1 || x1;
          animate.anim[key].x2 = animate.anim[key].x2 || x2;
          animate.anim[key].y1 = animate.anim[key].y1 || y1;
          animate.anim[key].y2 = animate.anim[key].y2 || y2;
          animate.anim[key].path = ['M', animate.anim[key].x1, animate.anim[key].y1, 'L', animate.anim[key].x2, animate.anim[key].y2];
        }
      } else {
        animate.x1 = animate.x1 || x1;
        animate.x2 = animate.x2 || x2;
        animate.y1 = animate.y1 || y1;
        animate.y2 = animate.y2 || y2;
        animate.path = ['M', animate.x1, animate.y1, 'L', animate.x2, animate.y2];
      }
    }
    if (attr) {
      attr.x1 = attr.x1 || x1;
      attr.x2 = attr.x2 || x2;
      attr.y1 = attr.y1 || y1;
      attr.y2 = attr.y2 || y2;
      attr.path = ['M', attr.x1, attr.y1, 'L', attr.x2, attr.y2];
    }

    return (<Path
      ref={(node: any) => { this.path = node; }}
      d={PATH}
      attr={attr}
      animate={animate}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />);
  }
}
