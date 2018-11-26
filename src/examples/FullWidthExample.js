import React, { Component } from 'react';
import ElementBasedDeviceDedector from '../lib/ElementBasedDeviceDedector';
import './FullWidthExample.css';

class FullWidthExample extends Component {
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
      <div id="full-width-example">
        <h2>{`My Parent type : ${type}, Last BreakPoint : ${lastBreakpoint} px`}</h2>
        <ElementBasedDeviceDedector onChangeType={this.handleChangeType} refreshRate={500} />
      </div>
    );
  }
}

FullWidthExample.propTypes = {};

export default FullWidthExample;
