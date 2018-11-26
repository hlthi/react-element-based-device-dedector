import React, { Component } from 'react';
import ElementBasedDeviceDedector from '../lib/ElementBasedDeviceDedector';
import './SmallWidthExample.css';

class SmallWidthExample extends Component {
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
      <div id="small-width-example">
        <div className="fake-bar">Fake Bar</div>
        <div className="example-bar">
          <h2>{`My Parent type : ${type}, Last BreakPoint : ${lastBreakpoint} px`}</h2>
          <ElementBasedDeviceDedector onChangeType={this.handleChangeType} refreshRate={500} />
        </div>
      </div>
    );
  }
}

SmallWidthExample.propTypes = {};

export default SmallWidthExample;
