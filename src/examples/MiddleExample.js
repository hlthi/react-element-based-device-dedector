import React, { Component } from 'react';
import ElementBasedDeviceDedector from '../lib/ElementBasedDeviceDedector';
import './MiddleExample.css';

const devices = [
  {
    name: 'mobile1',
    breakpointPx: 300,
  },
  {
    name: 'mobile2',
    breakpointPx: 400,
  },
  {
    name: 'mobile3',
    breakpointPx: 500,
  },
  {
    name: 'mobile4',
    breakpointPx: 600,
  },
];

class MiddleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      lastBreakpoint: null,
    };
  }

  handleChangeType = (type, lastBreakpoint) => {
    this.setState({
      type,
      lastBreakpoint,
    });
  };

  render() {
    const { type, lastBreakpoint } = this.state;
    return (
      <div id="middle-example">
        <div className="fake-bar">Fake Bar</div>
        <div className="example-bar">
          <h2>{`My Parent type : ${type}, Last BreakPoint : ${lastBreakpoint} px`}</h2>
          <ElementBasedDeviceDedector onChangeType={this.handleChangeType} refreshRate={500} devices={devices} />
        </div>
        <div className="fake-bar">Fake Bar</div>
      </div>
    );
  }
}

MiddleExample.propTypes = {};

export default MiddleExample;
