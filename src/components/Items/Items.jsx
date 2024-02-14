import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Items({ product,category, receiveData }) {
  const filteredProducts = product.filter((a)=>a.category === category)
  function sendProduct(i,j,k){
    receiveData({i,j,k})
  }

  return (
    <div className="container">
      <div className="row">

        {
          filteredProducts && filteredProducts.map((a) => {
            return (
              <>

                <div className='col'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={a.image} />
                    <Card.Body>
                      <Card.Title>${a.price}</Card.Title>
                      <Card.Text>
                        {a.title}
                      </Card.Text>
                      <Button onClick={()=>{sendProduct(a.image,a.price,a.title)}}variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>



              </>
            )
          })
        }
      </div>
    </div>
  )
}
export default Items;



