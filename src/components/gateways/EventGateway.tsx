import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import { RaphaelBasePentagon } from '../raphael/RaphaelBasePentagon';
import { getStrokeAndFill } from '../Utils';
import Gateway from './Gateway';

export interface EventGatewayProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  pentaStrokeWidth?: number;
}

export default class EventGateway extends React.Component<EventGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 0.5,
    circleRadiusInner: 10.4,
    circleRadiusOuter: 11.7,
    pentaStrokeWidth: 1.39999998
  };

  render() {
    const { x, y, width, height, circleRadiusInner, circleRadiusOuter, pentaStrokeWidth, strokeWidth, data } = this.props;
    const { stroke, fill, fillOpacity } = getStrokeAndFill(data);

    return (<Gateway
      x={x}
      y={y}
      width={width}
      height={height}
      data={data}
    >
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        radius={circleRadiusOuter}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        radius={circleRadiusInner}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <RaphaelBasePentagon
        x={x}
        y={y}
        stroke={stroke}
        strokeWidth={pentaStrokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </Gateway>);
  }
}
