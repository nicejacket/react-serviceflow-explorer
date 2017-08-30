import * as React from 'react';
import * as PropTypes from 'prop-types';
import { RaphaelBasePaper } from './raphael/RaphaelBasePaper';
import { DiagramModel, DiagramElementModel, DiagramFlowElementModel, DiagramAssociationElementModel } from '../models/DiagramModel';
import StartEvent from './events/StartEvent';
import ExclusiveGateway from './gateways/ExclusiveGateway';
import InclusiveGateway from './gateways/InclusiveGateway';
import EventGateway from './gateways/EventGateway';
import ParallelGatway from './gateways/ParallelGateway';
import EndEvent from './events/EndEvent';
import UserTask from './activities/UserTask';
import ManualTask from './activities/ManualTask';
import ServiceTask from './activities/ServiceTask';
import ReceiveTask from './activities/ReceiveTask';
import ScriptTask from './activities/ScriptTask';
import BusinessRuleTask from './activities/BusinessRuleTask';
import BoundaryEvent from './boundary-events/BoundaryEvent';
import ThrowEvent from './boundary-events/ThrowEvent';
import IntermediateCatchingEvent from './intermediate-catching-events/IntermediateCatchingEvent';
import SubProcess from './structural/SubProcess';
import EventSubProcess from './structural/EventSubProcess';
import SequenceFlow from './SequenceFlow';
import Pools from './swimlanes/Pools';
import Association from './Association';
import Task from './activities/Task';

const PADDING_WIDTH: number = 60;
const PADDING_HEIGHT: number = 60;

export interface DiagramProps {
  diagram: DiagramModel;
  customerActivities?: (ele: DiagramElementModel) => any;
  onClick?: (e: any) => void;
}

export default class Diagram extends React.Component<DiagramProps, any> {
  static defaultProps = {
    onClick: () => {}
  };

  static childContextTypes = {
    onClick: PropTypes.func
  };

  constructor(props: DiagramProps) {
    super(props);
    const { diagram } = props;
    this.state = { diagram };
  }

  getChildContext() {
    return { onClick: this.props.onClick };
  }

  componentWillReceiveProps({ diagram }: DiagramProps) {
    this.setState({ diagram });
  }

  renderElement = (ele: DiagramElementModel) => {
    if (this.props.customerActivities) {
      const element = this.props.customerActivities(ele);
      if (element) { return element; }
    }
    const { x, y, width, height, ...data } = ele;
    const { id, name } = data;
    const props = { x: +x, y: +y, width: +width, height: +height, data };
    switch (ele.type) {
    case 'StartEvent':
      return <StartEvent {...props} key={id} />;
    case 'ExclusiveGateway':
      return <ExclusiveGateway {...props} key={id} />;
    case 'InclusiveGateway':
      return <InclusiveGateway {...props} key={id} />;
    case 'EventGateway':
      return <EventGateway {...props} key={id} />;
    case 'ParallelGateway':
      return <ParallelGatway {...props} key={id} />;
    case 'EndEvent':
      return <EndEvent {...props} key={id} />;
    case 'CallActivity':
    case 'Task':
      return <Task {...props} text={name} key={id} />;
    case 'UserTask':
      return <UserTask {...props} text={name} key={id} />;
    case 'ManualTask':
      return <ManualTask {...props} text={name} key={id} />;
    case 'ServiceTask':
      return <ServiceTask {...props} text={name} key={id} />;
    case 'ReceiveTask':
      return <ReceiveTask {...props} text={name} key={id} />;
    case 'ScriptTask':
      return <ScriptTask {...props} text={name} key={id} />;
    case 'BusinessRuleTask':
      return <BusinessRuleTask {...props} text={name} />;
    case 'BoundaryEvent':
      return <BoundaryEvent {...props} key={id} />;
    case 'ThrowEvent':
      return <ThrowEvent {...props} key={id} />;
    case 'IntermediateCatchEvent':
      return <IntermediateCatchingEvent {...props} key={id} />;
    case 'SubProcess':
      return <SubProcess {...props} key={id} />;
    case 'EventSubProcess':
      return <EventSubProcess {...props} key={id} />;
    }
  }

  render() {
    const { diagram: { diagramBeginX, diagramBeginY, diagramWidth, diagramHeight, elements, flows, pools, associations } } = this.props;
    return (<RaphaelBasePaper
      x={diagramBeginX}
      y={diagramBeginY}
      width={diagramWidth + PADDING_WIDTH}
      height={diagramHeight + PADDING_HEIGHT}
    >
      {elements.map(this.renderElement)}
      {flows.map((flow: DiagramFlowElementModel) => <SequenceFlow flow={flow} key={flow.id} />)}
      {associations.map((association: DiagramAssociationElementModel) => <Association association={association} key={association.id} />)}
      {pools ? <Pools pools={pools} /> : null}
    </RaphaelBasePaper>);
  }
}
