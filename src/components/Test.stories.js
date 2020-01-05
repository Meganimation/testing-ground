import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Test from './Test'


export const test = {
    title: 'Test'
}

export const actions = {
    onTestClick: action('onTestClick'),
  };

storiesOf('Test', module)
.add('default', () => <Test test={test} {...actions} />);