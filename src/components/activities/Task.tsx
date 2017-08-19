import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import Rect from '../raphael/Rect';
import MultilineText from '../raphael/MultilineText';
import { getStrokeAndFill } from '../Utils';
import { MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface TaskProps extends BaseElementProps {
  radius?: number;
  text?: string;
}

export default class Task extends React.Component<TaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    radius: 4,
  }

  render() {
    const { x, y, width, height, radius, text, data, children } = this.props;
    const {stroke, strokeWidth, fill, fillOpacity} = getStrokeAndFill(data);
    const childProps: any = {};

    if (stroke !== MAIN_STROKE_COLOR) {
      childProps.stroke = stroke;
      childProps.fill = stroke;
    }

    return (<Tooltip data={data}>
      <Rect
        id={data.id}
        x={x}
        y={y}
        width={width}
        height={height}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <MultilineText
        x={x + width / 2}
        y={y + height / 2}
        color={stroke}
        text={text}
        width={width}
      />
      {
        React.Children.map(children, (child: any) => React.cloneElement(child, childProps))
      }
    </Tooltip>);
  }
}
