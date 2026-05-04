import "./App.css";
import CanvasViewport from "./components/canvas/canvas-viewport";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // all the sections are within the viewport.
  return (
    <>
      <Analytics />
      <CanvasViewport />
    </>
  );
}

export default App;
