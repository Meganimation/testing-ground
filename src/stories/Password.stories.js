import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

function toggleEncryption() {
  var x = document.getElementById("pwInput")
  return (x.type === "password") ?  x.type = "text" : x.type = "password"
  }

  
export const password = () => (
<input type="password" id="pwInput" />
<input type="checkbox" onClick={toggleEncryption}/>
);


//create password box tonight with logic 