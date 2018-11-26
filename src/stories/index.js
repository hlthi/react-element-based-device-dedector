import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import FullWidthExample from '../examples/FullWidthExample';
import SmallWidthExample from '../examples/SmallWidthExample';
import MiddleExample from '../examples/MiddleExample';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Full Width', module)
  .add('Full', () => <FullWidthExample />)
  .add('Small Size', () => <SmallWidthExample />)
  .add('Middle', () => <MiddleExample />);
