import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import Rect from '../raphael/Rect';

export interface SubProcessProps extends BaseElementProps {
  radius?: number;
}

export default class SubProcess extends React.Component<SubProcessProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 32,
    height: 32,
    radius: 4,
    strokeWidth: 1,
  }

  render() {
    const { radius, ...others } = this.props;
    const { data } = others;
    return (<Tooltip data={data}>
      <Rect r={radius} {...others} />
    </Tooltip>);
  }
}
