import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Input from '.';

storiesOf('Input', module)
  .add('default', () => <Input text="test" />)
  .add('with label', () => <Input text="test" />)
  .add('with label and type', () => <Input text="test" />);
