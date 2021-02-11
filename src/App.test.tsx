import React from "react";
import MainJSApp from './App';
import {render, unmountComponentAtNode} from "react-dom"

test('renders without crashing', () => {
  const div = document.createElement("div");
  render(<MainJSApp />, div);
  unmountComponentAtNode(div)
  
});
