import * as React from 'react';
import { getFillColour, getFillOpacity } from '../../services/DiagramColorService';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import Gateway from './Gateway';

export interface InclusiveGatewayProps extends BaseElementProps {
  radius?: number;
}

export default class InclusiveGateway extends React.Component<InclusiveGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 2.5,
    radius: 9.75
  };

  render() {
    const { x, y, width, height, radius, strokeWidth, data } = this.props;
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
        radius={radius}
        strokeWidth={strokeWidth}
        fill={getFillColour(data.id)}
        fillOpacity={getFillOpacity()}
      />
    </Gateway>);
  }
}
