import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from './components/raphael/Paper';
import Set from './components/raphael/Set';
import Gateway from './components/gateways/Gateway';
import InclusiveGateway from './components/gateways/InclusiveGateway';
import ParallelGatway from './components/gateways/ParallelGateway';
import ExclusiveGateway from './components/gateways/ExclusiveGateway';
import EventGateway from './components/gateways/EventGateway';
import Event from './components/events/Event';
import DiagramIconTimer from './components/icons/DiagramIconTimer';
import DiagramIconMessage from './components/icons/DiagramIconMessage';
import DiagramIconError from './components/icons/DiagramIconError';
import DiagramIconSignal from './components/icons/DiagramIconSignal';
import DiagramIconContainerEvent from './components/icons/DragramIconContainerEvent';
import StartEvent from './components/events/StartEvent';
import EndEvent from './components/events/EndEvent';
import BoundaryEvent from './components/boundary-events/BoundaryEvent';
import ThrowEvent from './components/boundary-events/ThrowEvent';
import IntermediateCatchingEvent from './components/intermediate-catching-events/IntermediateCatchingEvent';
import Pool from './components/swimlanes/Pool';
import Lane from './components/swimlanes/Lane';
import SubProcess from './components/structural/SubProcess';
import EventSubProcess from './components/structural/EventSubProcess';
import DiagramIconUser from './components/icons/DiagramIconUser';
import RaphaelIconBoxPublish from './components/raphael/icons/RaphaelIconBoxPublish';
import RaphaelIconBusinessRule from './components/raphael/icons/RaphaelIconBusinessRule';
import RaphaelIconCamel from './components/raphael/icons/RaphaelIconCamel';
import RaphaelIconManual from './components/raphael/icons/RaphaelIconManual';
import RaphaelIconGoogleDrivePublish from './components/raphael/icons/RaphaelIconGoogleDrivePublish';
import RaphaelIconMule from './components/raphael/icons/RaphaelIconMule';
import RaphaelIconReceive from './components/raphael/icons/RaphaelIconReceive';
import RaphaelIconRestCall from './components/raphael/icons/RaphaelIconRestCall';
import RaphaelIconScript from './components/raphael/icons/RaphaelIconScript';
import RaphaelIconSend from './components/raphael/icons/RaphaelIconSend';
import RaphaelIconService from './components/raphael/icons/RaphaelIconService';

ReactDOM.render(<Paper width={400} height={500}>
  <Set>
    <Gateway x={0} y={100} />
    <InclusiveGateway x={0} y={140} />
    <ParallelGatway x={0} y={180} />
    <ExclusiveGateway x={0} y={220} />
    <EventGateway x={0} y={260} />
    <DiagramIconTimer x={0} y={300} />
    <DiagramIconMessage x={0} y={340} />
    <DiagramIconError x={0} y={380} />
    <DiagramIconSignal x={0} y={420} />
    <DiagramIconContainerEvent x={0} y={460} type="timer" />
  </Set>
  <Set>
    <Event x={100} y={0} eventDefinition={{ type: 'timer' }} />
    <StartEvent x={100} y={40} />
    <EndEvent x={100} y={80} />
    <BoundaryEvent x={100} y={120} type="timer" />
    <ThrowEvent x={100} y={150} type="error" />
    <IntermediateCatchingEvent x={100} y={180} type="message" />
  </Set>
  <Set>
    <Pool x={160} y={0} text="这个是个提示信息pool" width={100} height={36} />
    <Lane x={160} y={40} text="这个是个提示信息lane" width={100} height={36} />
    <SubProcess x={160} y={80} width={100} height={36} stroke="green" fill="#FFF" />
    <EventSubProcess x={160} y={120} width={100} height={36} stroke="red" fill="#FFF" />
    <DiagramIconUser x={160} y={160} />
    <RaphaelIconBoxPublish x={180} y={160} width={20} height={20} />
    <RaphaelIconBusinessRule x={200} y={160} stroke="#000" fill="red" />
    <RaphaelIconCamel x={220} y={160} stroke="#000" fill="green" />
    <RaphaelIconManual x={240} y={160} stroke="blue" fill="yellow" />
    <RaphaelIconGoogleDrivePublish x={260} y={160} />
    <RaphaelIconMule x={160} y={200} />
    <RaphaelIconReceive x={180} y={200} />
    <RaphaelIconRestCall x={200} y={200} />
    <RaphaelIconScript x={220} y={200} />
    <RaphaelIconSend x={240} y={200} />
    <RaphaelIconService x={260} y={200} />
  </Set>
</Paper>, document.getElementById('example'));
