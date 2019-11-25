import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Switch} from "react-router-dom";
import Route from 'react-router-dom/Route'
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
    <BrowserRouter>
        <App> </App>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();



