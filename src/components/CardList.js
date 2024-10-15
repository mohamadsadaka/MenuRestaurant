import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
const CardList = ({foods}) => {
    return (
      
      <Row>
        {foods.map((food) => (
          <Col sm={12} className='mb-3' key={food.id}>
            <Zoom lift>
            <Card className='d-flex flex-row' style={{backgroundColor:"#f8f8f8"}}>
              <Card.Img className='img-item' variant="top" src={food.img} style={{height:"200px",width:"252px"}} />
              <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                  <div className='item-title'>{food.title}</div>
                  <div className='item-price'> السعر:{food.price} $</div>
                </Card.Title>
                <Card.Text className='py-2'>
                  <div className='item-description'>{food.description}</div>
                </Card.Text>
              </Card.Body>
            </Card>
            </Zoom>
          </Col>
        ))}
      </Row>
     
    );
  }
  

export default CardList;