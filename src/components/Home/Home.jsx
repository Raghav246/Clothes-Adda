import React,{useState} from 'react'
export default function Home({product}) {
//   const ItemsperPage=5;
//   const[showitems,setshowitems]=useState(1);
//   const lastindex=showitems*ItemsperPage;
//   const firstindex=lastindex-ItemsperPage;
//   const newarr=product.splice(firstindex,lastindex);
//  function changepage(val){
//   setshowitems(val);
// }

  return (
    <>
   <div className="container">
        <div className="row">
          {
            product &&
            product.map((el) => {
              return (
                <>
                  <div className="col-md-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={el.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title"> {el.title}</h5>
                        <h5 className="card-title">${el.price}</h5>
                        <p className="card-text">{el.description}</p>
                        <button
                          className="btn btn-primary"
                          
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        </div>
        {/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{changepage(showitems-1)}}>Previous</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{changepage(1)}}>1</a></li>
    <li class="page-item"><a class="page-link" href="#"  onClick={()=>{changepage(2)}}>2</a></li>
    <li class="page-item"><a class="page-link" href="#"  onClick={()=>{changepage(3)}}>3</a></li>
    <li class="page-item"><a class="page-link" href="#"  onClick={()=>{changepage(showitems+1)}}>Next</a></li>
  </ul>
</nav> */}
    </>
  )
}
