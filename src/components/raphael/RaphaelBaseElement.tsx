import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createElement, removeElement, updateElement } from './Utils';

export class RaphaelBaseElement extends React.Component<any, any> {
  element: RaphaelElement;
  root: React.ReactInstance;

  constructor(props: any) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    const { id } = this.props;
    const root = ReactDOM.findDOMNode(this.root);
    const parentId = root.parentElement.getAttribute('data-id');
    const element = createElement(parentId, this.props.type, this.props, this.handleLoad.bind(this));
    this.element = element;
    if (id) { this.element.node.id = id; }
    this.setState({ loaded: true });
  }

  componentDidUpdate() {
    updateElement(this.element, this.props.type, this.props, this.handleUpdate.bind(this));
  }

  componentWillUnmount() {
    removeElement(this.element);
  }

  getElement() {
    return this.element;
  }

  handleLoad(element: RaphaelElement) {
    if (this.props.load) {
      this.props.load(element);
    }
  }

  handleUpdate(element: Element) {
    if (this.props.update) {
      this.props.update(element);
    }
  }

  render() {
    if (this.state.loaded) { return null; }
    return (<div ref={node => { this.root = node; }} className={`raphael-${this.props.type}`} />);
  }
}
