import React from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./AppLayout";
import "../index.css";

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
