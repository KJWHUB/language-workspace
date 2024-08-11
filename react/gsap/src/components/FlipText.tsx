import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function FlipText({ text, index, trigger }: { text: string; index: number; trigger: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  // 재 트리거 하고싶으면 어떻게 해야할까?

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        rotationY: 0,
      },
      {
        rotationY: 360,
        duration: 1,
        delay: 0.2 * index,
      }
    );
  }, [trigger]);

  return <span ref={ref}>{text}</span>;
}

export default FlipText;
