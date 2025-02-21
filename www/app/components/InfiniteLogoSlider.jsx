'use client';

import { useEffect, useRef } from "react";

const logos = [
  { src: "/images/logos/counter-strike-2-logo.svg", alt: "Counter-Strike 2" },
  { src: "/images/logos/league-of-legends-logo.svg", alt: "League of Legends" },
  { src: "/images/logos/dota-2-logo.svg", alt: "Dota 2" },
  { src: "/images/logos/valorant-logo.svg", alt: "Valorant" },
  { src: "/images/logos/fifa-logo.svg", alt: "FIFA" },
  { src: "/images/logos/nba-logo.svg", alt: "NBA" },
  { src: "/images/logos/mlb-logo.svg", alt: "MLB" },
  { src: "/images/logos/ufc-logo.svg", alt: "UFC" },
];

export default function InfiniteLogoSlider() {
  const logoRef = useRef(null);

  useEffect(() => {
    const ul = logoRef.current;
    if (ul) {
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      ul.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logoRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}
