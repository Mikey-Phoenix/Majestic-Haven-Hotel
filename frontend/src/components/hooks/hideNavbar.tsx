import { useEffect, useRef, useState } from "react";

// export function useHideOnScroll(threshold = 10, topOffset = 12) {
//   const [hidden, setHidden] = useState(false);
//   const lastY = useRef(0);
//   const ticking = useRef(false);

//   useEffect(() => {
//     lastY.current = window.scrollY;

//     const scrollingUp = useScrollUp();
//     console.log(scrollingUp)

//     const update = () => {
//       const y = Math.max(window.scrollY, 0);
//       const diff = y - lastY.current;
//       // console.log(y, diff, lastY.current)

//       if (y < lastY.current) {
//         // if( lastY.current - y >= 10) {
//           setHidden(true); 
//           // console.log(hidden, y, lastY.current);
//           // return hidden;
//         // } 
//       }

//       if (y < topOffset) {
//         setHidden(false);
//         lastY.current = y;
//       } else if (Math.abs(diff) >= threshold) {
//         setHidden(diff > 0); // hide on scroll down, show on scroll up
//         lastY.current = y;
//       }
//       ticking.current = false;
//     };

//     const onScroll = () => {
//       if (!ticking.current) {
//         ticking.current = true;
//         requestAnimationFrame(update);
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [threshold, topOffset]);

//   return hidden;
// }

export function useScrollUp(distance = 10) {
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let peakY = lastY; // lowest point reached before scrolling up

    const onScroll = () => {
      const y = window.scrollY;

      if (y > lastY) {
        // scrolling down: reset
        peakY = y;
        setScrollingUp(false);
      } else if (peakY - y >= distance) {
        // scrolled up at least `distance` px from the peak
        setScrollingUp(true);
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [distance]);

  return scrollingUp;
}