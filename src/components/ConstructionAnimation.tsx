import { useEffect, useRef, useState } from "react";

export function ConstructionAnimation({
  className = "h-auto w-full",
  preserveAspectRatio,
}: {
  className?: string;
  preserveAspectRatio?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          svgRef.current?.classList.toggle("paused", !entry.isIntersecting);
        });
      },
      { threshold: 0.05 },
    );
    io.observe(svgRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 760 520"
      className={className}
      preserveAspectRatio={preserveAspectRatio}
      role="img"
      aria-labelledby="animTitle animDesc"
    >
      <title id="animTitle">Construção de uma edificação do zero ao acabamento</title>
      <desc id="animDesc">
        Animação técnica em estilo blueprint mostrando terreno, fundação, pilares, estrutura,
        paredes, cobertura, janelas, acabamento e paisagismo.
      </desc>

      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b6fc0" stopOpacity=".30" />
          <stop offset="100%" stopColor="#04162b" stopOpacity=".05" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8e6ff" stopOpacity=".92" />
          <stop offset="100%" stopColor="#3a87b8" stopOpacity=".5" />
        </linearGradient>
        <pattern id="miniGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="760" height="520" fill="url(#skyGrad)" />
      <rect width="760" height="520" fill="url(#miniGrid)" opacity=".45" />

      {/* Technical guides */}
      <g stroke="rgba(150,205,255,.18)" strokeWidth="1" fill="none">
        <line x1="40" y1="85" x2="720" y2="85" className="dash-draw" />
        <line x1="90" y1="120" x2="90" y2="440" className="dash-draw" />
        <line x1="650" y1="120" x2="650" y2="440" className="dash-draw" />
        <circle cx="690" cy="135" r="34" opacity=".3" />
        <circle cx="690" cy="135" r="22" opacity=".2" />
      </g>

      {/* Crane */}
      <g stroke="rgba(180,220,255,.35)" strokeWidth="3" fill="none" strokeLinecap="round">
        <line x1="590" y1="92" x2="590" y2="350" />
        <line x1="480" y1="110" x2="704" y2="110" />
        <line x1="590" y1="92" x2="520" y2="110" strokeWidth="2" />
        <line x1="590" y1="92" x2="646" y2="110" strokeWidth="2" />
        <g className="crane-hook-anim">
          <line x1="525" y1="110" x2="525" y2="185" strokeWidth="1.5" />
          <path d="M517 185 h16 v14 h-16 z" />
        </g>
      </g>

      {/* Ground */}
      <g className="stage stage-ground">
        <path d="M70 418 H690" stroke="rgba(168,230,255,.45)" strokeWidth="2.5" fill="none" />
        <path d="M110 418 L640 418 L670 454 L90 454 Z" fill="rgba(120,180,240,.08)" />
        <path d="M110 439 H640" stroke="rgba(168,230,255,.15)" strokeWidth="1.5" />
      </g>

      {/* Foundation */}
      <g
        className="stage stage-foundation"
        fill="rgba(120,190,255,.18)"
        stroke="rgba(190,235,255,.35)"
      >
        <rect x="195" y="395" width="365" height="25" rx="3" />
        <rect x="220" y="370" width="315" height="25" rx="3" />
        <g stroke="rgba(255,196,102,.45)" strokeWidth="2">
          <line x1="235" y1="370" x2="235" y2="330" />
          <line x1="300" y1="370" x2="300" y2="330" />
          <line x1="430" y1="370" x2="430" y2="330" />
          <line x1="515" y1="370" x2="515" y2="330" />
        </g>
      </g>

      {/* Columns */}
      <g className="stage stage-columns" fill="rgba(150,210,255,.18)" stroke="rgba(200,240,255,.4)">
        <rect x="225" y="215" width="18" height="158" />
        <rect x="295" y="215" width="18" height="158" />
        <rect x="425" y="215" width="18" height="158" />
        <rect x="510" y="215" width="18" height="158" />
      </g>

      {/* Slabs */}
      <g className="stage stage-slabs" fill="rgba(150,210,255,.18)" stroke="rgba(200,240,255,.4)">
        <rect x="210" y="352" width="335" height="16" />
        <rect x="210" y="285" width="335" height="16" />
        <rect x="210" y="216" width="335" height="16" />
      </g>

      {/* Walls */}
      <g className="stage stage-walls">
        <g fill="rgba(130,190,245,.12)" stroke="rgba(190,235,255,.3)">
          <rect x="230" y="300" width="295" height="52" />
          <rect x="230" y="232" width="295" height="52" />
        </g>
      </g>

      {/* Roof */}
      <g className="stage stage-roof">
        <path
          d="M200 214 L375 150 L555 214 Z"
          fill="rgba(120,180,240,.12)"
          stroke="rgba(200,240,255,.4)"
          strokeWidth="2"
        />
        <path
          d="M234 206 L375 164 L519 206"
          fill="none"
          stroke="rgba(255,196,102,.4)"
          strokeWidth="1.5"
        />
      </g>

      {/* Finish */}
      <g className="stage stage-finish">
        <g fill="url(#glassGrad)" stroke="rgba(220,248,255,.4)">
          <rect x="244" y="316" width="62" height="36" />
          <rect x="335" y="316" width="62" height="36" />
          <rect x="426" y="316" width="62" height="36" />
          <rect x="244" y="248" width="62" height="36" />
          <rect x="335" y="248" width="62" height="36" />
          <rect x="426" y="248" width="62" height="36" />
        </g>
        <rect
          x="345"
          y="352"
          width="44"
          height="66"
          fill="rgba(255,196,102,.2)"
          stroke="rgba(255,214,150,.5)"
        />
      </g>

      {/* Landscape */}
      <g
        className="stage stage-landscape"
        fill="none"
        stroke="rgba(140,235,190,.4)"
        strokeWidth="2"
      >
        <path d="M150 418 q16 -32 32 0 q14 -26 28 0" />
        <path d="M566 418 q14 -30 28 0 q14 -24 26 0" />
      </g>

      <rect className="scan-line" x="86" y="120" width="570" height="3" rx="2" />
    </svg>
  );
}
