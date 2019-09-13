import { HelloWorld as ReactHelloWorld } from 'component';
import { render } from 'react-dom';

import React from 'react';
import ReactDOM from 'react-dom';

function renderHelloWorld(element) {
  render(<ReactHelloWorld />, element);
}

export {
  ReactHelloWorld,
  renderHelloWorld,
  React,
  ReactDOM
}
