import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCircle from '../icons/RaphaelIconCircle';
import DiagramIconContainerEvent from '../icons/DragramIconContainerEvent';

export interface BoundaryEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  signalFill?: string;
  type?: string;
}

export default class BoundaryEvent extends React.Component<BoundaryEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    circleRadiusInner: 12,
    circleRadiusOuter: 15,
    width: 30,
    height: 30,
    stroke: '#585858',
    fill: '#FFF',
    fillOpacity: '',
    strokeWidth: 1,
    signalFill: 'none',
  }

  render() {
    const { circleRadiusInner, circleRadiusOuter, signalFill, fill, type, ...others } = this.props;
    return (<Tooltip>
      <RaphaelIconCircle radius={circleRadiusOuter} fill={fill} {...others} />
      <RaphaelIconCircle radius={circleRadiusInner} fill={fill} {...others} />
      <DiagramIconContainerEvent fill={signalFill} type={type} {...others} />
    </Tooltip>);
  }
}