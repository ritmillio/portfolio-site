import React, { useRef, useEffect } from 'react'

const Articles: React.FC = () => {

    const refToComponent = useRef<HTMLHeadingElement>(null)
    const secondRefToComponent = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
      async function animate() {
          const sr = (await require("scrollreveal")).default({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 400,
            reset: true,
        })
        if (refToComponent.current) {
          sr.reveal(refToComponent.current, {})
        }
        if (secondRefToComponent.current) {
          sr.reveal(secondRefToComponent.current, {delay:700})
        }
      }
      animate()
    }, [])

    return (
          <div className="h-screen flex flex-col items-center justify-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] bg-[#f9f4ef] dark:bg-[#16161a] dark:text-white text-black">
            <div ref={refToComponent}>About</div>
            <div ref={secondRefToComponent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni ipsum, porro, asperiores quisquam laborum veniam laboriosam eos tempore distinctio, quae et. Consequuntur iusto esse, dicta quos molestiae quasi sed.
            </div>
          </div>
      )
  }
  
  export default Articles
  


//   import React, { useRef } from "react";

// const Child = React.forwardRef((props, ref) => {
//   const { ref1, ref2 } = ref.current;
//   console.log(ref1, ref2);

//   return (
//     <>
//       <p ref={ref1}>foo</p>
//       <p ref={ref2}>bar</p>
//     </>
//   );
// });

// export default function App() {
//   const ref1 = useRef();
//   const ref2 = useRef();
//   const ref = useRef({ ref1, ref2 });

//   return <Child ref={ref} />;
// }