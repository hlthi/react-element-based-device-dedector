import React from 'react';
import { storiesOf } from '@storybook/react';
import FullWidthExample from '../examples/FullWidthExample';
import SmallWidthExample from '../examples/SmallWidthExample';
import MiddleExample from '../examples/MiddleExample';
import DomDevice from '../examples/DomDeviceExample';

storiesOf('Examples', module)
  .add('Full', () => <FullWidthExample />)
  .add('Small Size', () => <SmallWidthExample />)
  .add('Middle', () => <MiddleExample />)
  .add('Hook', () => <DomDevice />);
