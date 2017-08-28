import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBaseSet } from '../raphael/RaphaelBaseSet';
import Pool from './Pool';
import Lanes from './Lanes';

export interface PoolsProps {
  pools?: Array<any>;
}

const defaultPools: Array<any> = [];

export default class Pools extends React.Component<PoolsProps, any> {
  static defaultProps = {
    pools: defaultPools,
  }

  render() {
    const { pools } = this.props;

    if (!pools || !pools.length) return null;

    return (<RaphaelBaseSet>
      {pools.map((pool, i) => {
          const { lanes, ...others } = pool;
          return (<RaphaelBaseSet key={i}>
            <Pool {...others} />
            <Lanes lanes={pool.lanes} />
          </RaphaelBaseSet>);
        })
      }
    </RaphaelBaseSet>);
  }
}
