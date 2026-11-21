import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router/index.tsx";

const app = document.getElementById("root")!;
const root = createRoot(app);

root.render(<RouterProvider router={router} />);
