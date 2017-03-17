import React from "react";
import { render } from "react-dom";
import App from "./containers/App/";

render(<App />, document.getElementById("app"));
// render(React.createElement(App), document.getElementById("app"));