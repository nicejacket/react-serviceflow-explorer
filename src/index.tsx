import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from './components/Raphael/Paper';
import Set from './components/Raphael/Set';
import IconBoxPublish from './components/Icon/IconBoxPublish';
import Gateway from './components/gateways/Gateway';

ReactDOM.render(<Paper width={400} height={400}>
  <Set>
    <IconBoxPublish />
    <Gateway />
  </Set>
</Paper>, document.getElementById('example'));
