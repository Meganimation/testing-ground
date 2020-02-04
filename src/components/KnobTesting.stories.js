import {
    withKnobs,
    text, boolean, object, number
  } from '@storybook/addon-knobs'
  import { storiesOf } from '@storybook/react';
  import React, { Component } from 'react'

  const stories = storiesOf('Storybook Knobs', module);
  stories.addDecorator(withKnobs);
  stories.add('with a button', () => {
    const style = {
      backgroundColor: '#FFF',
      border: '1px solid #DDD',
      borderRadius: 2,
      outline: 0,
      fontSize: 15,
      cursor: 'pointer',
    };
  return (
      <button
        disabled={number('Disabled', true)}
        style={object('Style', style)}
      >
        {text('Label', 'Hello Button')}
      </button>
    );
  });