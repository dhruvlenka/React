import { createRoot} from "react-dom/client";
import App from "./App";
import "./global.css"

//div: var, root: public/index.html, root is mutable you can take anything
let div = document.getElementById("root");

//calling div and rendering App.jsx on root
createRoot(div).render(<App></App>);
