import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import Tooltip from '../tooltip/Tooltip';
import { getStrokeAndFill } from '../Utils';

export interface BoundaryEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  signalFill?: string;
}

export default class BoundaryEvent extends React.Component<BoundaryEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 1,
    circleRadiusInner: 12,
    circleRadiusOuter: 15,
    signalFill: 'none'
  };

  render() {
    const { x, y, width, height, circleRadiusInner, circleRadiusOuter, strokeWidth, signalFill, data } = this.props;
    const { stroke, fill, fillOpacity } = getStrokeAndFill(data);

    return (<Tooltip data={data}>
      <RaphaelIconCircle
        id={data.id}
        x={x + width / 2}
        y={y + height / 2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
        radius={circleRadiusOuter}
      />
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
        radius={circleRadiusInner}
      />
      <DiagramContainerIconEvent
        x={x}
        y={y}
        width={width}
        height={height}
        type={data && data.eventDefinition && data.eventDefinition.type}
        data={data}
        fill={signalFill}
      />
    </Tooltip>);
  }
}
