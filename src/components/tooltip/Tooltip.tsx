import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Set from '../Raphael/Set';
import Element from '../Raphael/Element';
import './Tooltip.less';

const CLS_PREFIX = 'sf-tooltip-diagram';

interface TooltipState {
  visible?: boolean;
}

export interface TooltipProps {
  position?: string;
}

export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
}

export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static defaultProps = {
    position: POSITION.BOTTOM,
  }

  state = {
    visible: false,
  }

  root: React.ReactInstance = null;
  tooltip: React.ReactInstance = null;

  componentDidMount() {
    setTimeout(() => {
      this.loopSet((this.root as Set).getSet());
      window.addEventListener('scroll', this.onMouseLevelAndScrollHandler, true);
      window.addEventListener('touchstart', this.onMouseLevelAndScrollHandler);
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onMouseLevelAndScrollHandler);
    window.removeEventListener('touchstart', this.onMouseLevelAndScrollHandler);
  }

  loopSet = (set: RaphaelSet) => {
    set.forEach((item: any) => {
      if (item.type === 'set') {
        this.loopSet(item);
      } else {
        item.mouseup(this.onMouseEnterHandler);
        item.mouseover(this.onMouseEnterHandler);
        item.touchend(this.onMouseEnterHandler);
        item.mouseout(this.onMouseLevelAndScrollHandler);
      }
    })
  }

  onMouseEnterHandler = (e: any) => {
    const tooltip: any = ReactDOM.findDOMNode(this.tooltip);
    const props = e.target.getBoundingClientRect();
    const top = props.top + (props.height / 2);
    const marginLeft = -1 * (tooltip.offsetWidth / 2);
    const marginTop = -1 * (tooltip.offsetHeight / 2);
    
    let left = props.left + (props.width / 2);

    if (this.props.position === POSITION.LEFT || this.props.position === POSITION.RIGHT) {
      left = (props.width / 2);
      if (top + marginTop < 0) {
        tooltip.style.top = '0';
        tooltip.style.marginTop = '0';
      } else {
        tooltip.style.top = `${top}px`;
        tooltip.style.marginTop = `${marginTop}px`;
      }
    } else {
      if (left + marginLeft < 0) {
        tooltip.style.left = '0';
        tooltip.style.marginLeft = '0';
      } else {
        tooltip.style.left = `${left}px`;
        tooltip.style.marginLeft = `${marginLeft}px`;
      }
    }

    if (this.props.position === POSITION.TOP) {
      tooltip.style.top = props.top - tooltip.offsetHeight - 10 + 'px';
    } else if (this.props.position === POSITION.RIGHT) {
      tooltip.style.left = props.left + props.width + 10 + 'px';
    } else if (this.props.position === POSITION.LEFT) {
      tooltip.style.left = props.left - tooltip.offsetWidth - 10 + 'px';
    } else {
      tooltip.style.top = props.top + props.height + 10 + 'px';
    }

    this.onShowHandler();
  }

  onHideHandler = () => {
    this.setState({ visible: false });
  }

  onShowHandler = () => {
    this.setState({ visible: true });
  }

  onMouseLevelAndScrollHandler = (e: any) => {
    this.onHideHandler();
  }

  render() {
    const cls = this.state.visible ? `${CLS_PREFIX}-tooltip is-active` : `${CLS_PREFIX}-tooltip`;

    return (<Set ref={node => { this.root = node; }}>
      <div ref={node => { this.tooltip = node;}} className={cls}>
        <div className={`${CLS_PREFIX}-tooltip-header`}>类型 名字|id</div>
        <div className={`${CLS_PREFIX}-tooltip-body`}>
          <div className={`${CLS_PREFIX}-tooltip-name-property`}>
            <span className={`${CLS_PREFIX}-propertyName`}>name:</span>
            <span className={`${CLS_PREFIX}-propertyValue`}>小明</span>
          </div>
          <div className={`${CLS_PREFIX}-tooltip-general-property`}>
            <span className={`${CLS_PREFIX}-propertyName`}>name:</span>
            <span className={`${CLS_PREFIX}-propertyValue`}>小明</span>
          </div>
        </div>
      </div>
      {this.props.children}
    </Set>);
  }
}
