import React, { useState } from 'react';
import ElementBasedDeviceDedector from '../lib/ElementBasedDeviceDedector';

const DomDevice = props => {
  const { children } = props;
  const [type, setType] = useState(null);
  return (
    <div>
      <div>{`Device Type : ${type}`}</div>
      {children}
      <ElementBasedDeviceDedector onChangeType={deviceType => setType(deviceType)} />
    </div>
  );
};

DomDevice.propTypes = {};

export default DomDevice;
