import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Password from './Password'
import { password } from '../stories/Password.stories';


export const test = {
    title: 'Password'
}

export const actions = {
    onTestClick: action('onTestClick'),
  };

storiesOf('Password', module)
.add('default', () => <Password Password={password} {...actions} />);