import React, { useEffect, useRef, useState } from 'react';

export default function Crosshair() {
  const hRef    = useRef<HTMLDivElement>(null);
  const vRef    = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: -999, y: -999 });

  useEffect(() => {
    let animId = 0;
    let lx = -999, ly = -999;

    const onMove = (e: MouseEvent) => {
      lx = e.clientX;
      ly = e.clientY;
    };

    const tick = () => {
      if (hRef.current)    hRef.current.style.transform    = `translateY(${ly}px)`;
      if (vRef.current)    vRef.current.style.transform    = `translateX(${lx}px)`;
      if (coordRef.current) {
        coordRef.current.style.left = `${lx + 14}px`;
        coordRef.current.style.top  = `${ly + 8}px`;
      }
      setCoords({ x: lx, y: ly });
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={hRef}    className="crosshair-h" />
      <div ref={vRef}    className="crosshair-v" />
      <div className="crosshair-dot" style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }} />
      <div ref={coordRef} className="crosshair-coords">
        x: {coords.x}<br />
        y: {coords.y}
      </div>
    </>
  );
}
