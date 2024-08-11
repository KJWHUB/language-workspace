import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";

import gsap from "gsap";

import "./App.css";

const randomX = gsap.utils.random(-200, 200, 1, true);

function App() {
  const [endX, setEndX] = useState(0);

  const boxRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        x: endX,
        duration: 1,
      });
    },
    { dependencies: [endX], scope: container }
  );

  return (
    <div ref={container} className="app">
      <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>

      <div className="box gradient-blue" ref={boxRef}>
        <p>{endX}</p>
      </div>
    </div>
  );
}

export default App;
