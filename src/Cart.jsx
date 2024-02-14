import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';
function Cart({ cartItem}) {
    const[cartItems,setcartItems]=useState(cartItem);
    function remove(index){
        const cart=[...cartItems];
   cart.splice(index,1);
     setcartItems(cart);
}
    return (
        <>
        {
            (cartItems.length!=0)?(
            <>
            <div className="container">
          <div className="row">
                   {
                    cartItems && cartItems.map((a,i) => {
                        return (
                            <>
                      <div className='col-4'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={a.i} />
                                        <Card.Body>
                                            <Card.Title>${a.j}</Card.Title>
                                            <Card.Text>
                                                {a.k}
                                            </Card.Text>
                                            <button className='btn btn-primary' onClick={()=>{remove(i)}}>Remove From Cart</button>
                                        </Card.Body>
                                    </Card>
                                </div>
                              </>
                        )
                    })
                }
            </div>
        </div>
            </>
        ):(<p>No Items Found</p>)
        }
        
        </>
    )



}
export default Cart;