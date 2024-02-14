// import React, { useState } from "react";
// export default function Favourites({ favouriteItems }) {
//   const[favItems,setfavItems]=useState([favouriteItems]);
//   function remove(index){
//    let favitem=favItems.splice(index,1);
//     setfavItems(favitem);
//     }

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {favItems &&
//             favItems.map((a,i) => {
//               return (
//                 <>
//                   <div className="col-md-4">
//                     <div className="card" style={{ width: "18rem" }}>
//                       <img src={a.i} className="card-img-top" alt="..." />
//                       <div className="card-body">
//                         <h5 className="card-title"> {a.j}</h5>
//                         <h5 className="card-title">${a.k}</h5>
//                         <p className="card-text">{a.l}</p>
//                         <button class="btn btn-primary" onClick={()=>{remove(i)}}>Remove From Favourites</button>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// }
