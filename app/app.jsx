import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

const app = document.createElement('div');
document.body.appendChild(app);
const props = {
  name: 'juan',
  age: 20
};
ReactDOM.render(<Profile {...props} />, app);
