import * as React from 'react';
import Element from './Element';

export interface PathProps {
  d: string & Array<String>;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
  transform?: string;
}

export default class Path extends React.Component<any, any> {
  static defaultProps = {
    stroke: '#000',
    strokeWidth: 2,
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="path"
      {...this.props}
    />);
  }
}
