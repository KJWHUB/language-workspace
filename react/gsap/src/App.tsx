import "./App.css";

import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";

import gsap from "gsap";

import FlipText from "./components/FlipText";
import { useFlipTexts } from "./hooks/useFlipTexts";

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

  const [trigger, setTrigger] = useState(false);
  const { texts } = useFlipTexts("HELLO");

  return (
    <div ref={container} className="app">
      <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>

      <div className="box gradient-blue" ref={boxRef}>
        <p>{endX}</p>
      </div>

      <section className="flip-texts">
        <button onClick={() => setTrigger(!trigger)}>trigger</button>
        {texts.map((text, index) => (
          <FlipText key={index} text={text} index={index} trigger={trigger} />
        ))}
      </section>
    </div>
  );
}

export default App;
