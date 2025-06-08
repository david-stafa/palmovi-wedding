import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";

const Particles = ({ content, count }: { content: string; count: number }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(count)].map((_, i) => (
        <Particle content={content} key={i} />
      ))}
    </div>
  );
};

const Particle = ({ content }: { content: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { width, height } =
      ref.current!.parentElement!.getBoundingClientRect();

    const dx = width / 2;
    const dy = height / 2;

    const anim = animate(ref.current!, {
      x: utils.random(-dx, dx, 2) + "px",
      y: utils.random(-dy, dy, 2) + "px",
      scale: [{ from: 0, to: 1 }, { to: 0 }],
      delay: utils.random(0, 1000),
      // loop: true,
    });

    return () => {
      anim.reset();
    };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2" ref={ref}>
      {content}
    </div>
  );
};

export { Particles };
