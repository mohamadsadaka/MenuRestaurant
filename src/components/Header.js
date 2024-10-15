import { Row,Col } from 'react-bootstrap';

function Header() {
  return (
    <Row>
<Col className='justify-content-center text-center'>
<div className='title'>قائمة الطعام </div>
<div className='justify-content-center d-flex'>
    <p className='nuderline'></p>
</div>
</Col>
    </Row>      
  );
}
export default Header;
