import * as PropTypes from 'prop-types';
import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBaseMultilineText } from '../raphael/RaphaelBaseMultilineText';
import { RaphaelBaseRect } from '../raphael/RaphaelBaseRect';
import Tooltip from '../tooltip/Tooltip';
import { getStrokeAndFill } from '../Utils';

export interface TaskProps extends BaseElementProps {
  radius?: number;
  text?: string;
}

export default class Task extends React.Component<TaskProps, any> {
  static defaultProps = { x: 0, y: 0, radius: 4 };
  static contextTypes = { onClick: PropTypes.func };

  rect: RaphaelBaseRect;
  text: RaphaelBaseMultilineText;

  bindEvent = () => {
    if (!this.rect || !this.text) {
      setTimeout(this.bindEvent, 50);
    } else {
      this.rect.getElement().click(this.onClickHandler);
      this.text.getElement().click(this.onClickHandler);
      React.Children.forEach(this.props.children, (child: any) => {
        if (child.getElement && child.getElement().click) {
          child.getElement().click(this.onClickHandler);
        }
      });
    }
  }

  componentDidMount() {
    this.bindEvent();
  }

  componentWillUnmount() {
    this.rect.getElement().unclick(this.onClickHandler);
    this.text.getElement().unclick(this.onClickHandler);
    React.Children.forEach(this.props.children, (child: any) => {
      if (child.getElement && child.getElement().click) {
        child.getElement().unclick(this.onClickHandler);
      }
    });
  }

  onClickHandler = () => {
    if (this.context.onClick) {
      this.context.onClick(this.props.data);
    }
  }

  render() {
    const { x, y, width, height, radius, text, data, children } = this.props;
    const {stroke, strokeWidth, fill, fillOpacity} = getStrokeAndFill(data);

    return (<Tooltip data={data}>
      <RaphaelBaseRect
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
        ref={node => { this.rect = node; }}
      />
      <RaphaelBaseMultilineText
        x={x + width / 2}
        y={y + height / 2}
        text={text}
        width={width}
        ref={node => { this.text = node; }}
      />
      {children}
    </Tooltip>);
  }
}
