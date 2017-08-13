import * as React from 'react';
import Path from '../Raphael/Path';

export interface IconCrossProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillOpacity?: string;
  strokeWidth?: number;
}

export default class IconCross extends React.Component<IconCrossProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 3,
  }

  render() {
    const { x, y, width, height } = this.props;
    const quarterWidth = width / 4;
    const quarterHeight = height / 4;

    const DATA = 'M' + (x + quarterWidth + 3) + ' ' + (y + quarterHeight + 3) +
      'L' + (x + 3 * quarterWidth - 3) + ' ' + (y + 3 * quarterHeight - 3) +
      'M' + (x + quarterWidth + 3) + ' ' + (y + 3 * quarterHeight - 3) +
      'L' + (x + 3 * quarterWidth - 3) + ' ' + (y + quarterHeight + 3);
    return <Path d={DATA} />;
  }
}
