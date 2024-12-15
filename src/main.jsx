import React from "react";
import { createRoot} from "react-dom/client";
const rootEl =document.querySelector("#root");
const root = createRoot(rootEl);
root.render(
    <React.StrictMode>
        <h1>Hello</h1>
    </React.StrictMode>
);