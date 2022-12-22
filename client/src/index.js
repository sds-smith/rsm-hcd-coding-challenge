import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { ClientProvider } from "./context/client.context.jsx";
import { BreweryProvider } from "./context/brewery.context.jsx";

import App from './App.tsx'

const root = ReactDOM.createRoot(
    document.getElementById("root")
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