import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';

/**
 * https://usehooks.com/
 */

class ElementBasedDeviceDedector extends PureComponent {
  constructor(props) {
    super(props);
    this.lastType = null;
  }

  onResize = width => {
    this.dedectDeviceType(width);
  };

  dedectDeviceType = width => {
    const { onChangeType, devices: _devices } = this.props;

    // sort descending devices by breakpoint px
    const devices = _devices.sort((device1, device2) =>
      device1.breakpointPx > device2.breakpointPx ? -1 : device1.breakpointPx === device2.breakpointPx ? 0 : 1,
    );

    console.log(devices);

    // compare
    for (let i = 0; i < devices.length; i += 1) {
      // check breakpoint and dont recall if already set
      if (width > devices[i].breakpointPx) {
        if (this.lastType !== devices[i].name) {
          this.lastType = devices[i].name;
          console.log(devices[i].name);
          onChangeType(devices[i].name, devices[i].breakpointPx);
        }
        break;
      }
    }
  };

  render() {
    const { devices, ...otherProps } = this.props;
    return <ReactResizeDetector handleWidth onResize={this.onResize} {...otherProps} />;
  }
}

ElementBasedDeviceDedector.propTypes = {
  onChangeType: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      breakpointPx: PropTypes.number,
    }),
  ),
};

ElementBasedDeviceDedector.defaultProps = {
  devices: [
    // below 768px
    {
      name: 'mobile',
      breakpointPx: 768,
    },
    // 768px - 991px
    {
      name: 'tablet',
      breakpointPx: 992,
    },
    // 992px - 1200px
    {
      name: 'computer',
      breakpointPx: 1200,
    },
  ],
};

export default ElementBasedDeviceDedector;



