import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';

const ProgressBar: React.FC = () => {

    const divRef = useRef(null);
    useEffect(() => {
      const el = divRef.current;

      gsap.to(el, {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
      });
    }, [])

    return(
        <progress ref={divRef} max="100" value="0"></progress>
    )
}

export default ProgressBar;
