import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import SendTask from './SendTask';
import MuleTask from './MuleTask';
import RestCallTask from './RestCallTask';
import GoogleDrivePublishTask from './GoogleDrivePublishTask';
import CamelTask from './CamelTask';
import BoxPublishTask from './BoxPublishTask';
import ServiceTask from './ServiceTask';

export interface ContainerServiceTaskProps extends BaseElementProps {
  text: string;
  type?: string;
}

export default class ContainerServiceTask extends React.Component<ContainerServiceTaskProps, any> {
  render() {
    const { type, ...others } = this.props;
    switch (type) {
      case 'mail':
        return <SendTask {...others} />;
      case 'camel':
        return <CamelTask {...others} />;
      case 'mule':
        return <MuleTask {...others} />;
      case 'rest_call':
        return <RestCallTask {...others} />;
      case 'google_drive_publish':
        return <GoogleDrivePublishTask {...others} />;
      case 'box_publish':
        return <BoxPublishTask {...others} />;
      default:
        return <ServiceTask {...others} />;
    }
  }
}
