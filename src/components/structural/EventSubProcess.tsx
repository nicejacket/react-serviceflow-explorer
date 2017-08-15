import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import Rect from '../Raphael/Rect';

export interface EventSubProcessProps extends BaseElementProps {
  radius?: number;
}

export default class EventSubProcess extends React.Component<EventSubProcessProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 80,
    height: 40,
    radius: 4,
    strokeWidth: 1,
  }

  render() {
    const { radius, ...others } = this.props;
    return (<Tooltip>
      <Rect r={radius} {...others} />
    </Tooltip>);
  }
}