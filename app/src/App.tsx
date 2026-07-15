import { useEffect } from "react";
import "./App.css";
import CanvasViewport from "./components/canvas/canvas-viewport";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    const tabHandler = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", tabHandler);
    return () => {
      window.removeEventListener("keydown", tabHandler);
    };
  });

  // all the sections are within the viewport.
  return (
    <>
      <Analytics />
      <CanvasViewport />
    </>
  );
}

export default App;
