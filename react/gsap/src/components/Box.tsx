import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function Box({ children, endX }: { children: React.ReactNode; endX: number }) {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: endX,
      duration: 3,
    });
  }, [endX]);

  return (
    <div className="box" ref={boxRef}>
      {children}
    </div>
  );
}
