// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return {
//     props : {
//       ninjas : data
//     }
//   }
// }


// const Articles = ({ ninja }) => {
//   return (
//     <div>
//       <h1>Hi all</h1>
//       {
//         ninjas.map(ninja => (
//           <div key={ninja.id}>
//             <a>
//               { ninja.name }
//             </a>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default Articles