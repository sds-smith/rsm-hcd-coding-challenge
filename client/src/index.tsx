import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { ClientProvider } from "./context/client.context";
import { BreweryProvider } from "./context/brewery.context";

import App from './App'

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ClientProvider>
            <BreweryProvider>
                <App />
            </BreweryProvider>
        </ClientProvider>

    </BrowserRouter>
)