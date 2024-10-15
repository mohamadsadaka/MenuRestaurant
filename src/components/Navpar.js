import { Row } from 'react-bootstrap';
import React ,{ useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navpar=({filterBySearch})=> {
    const [word,setWord] = useState("");
  const onSearch = () => {
   
    filterBySearch(word);
    setWord("");
  };
  return (
    <Row>
    <Navbar bg="dark" expand="lg"  variant="dark">
      <Container >
        <Navbar.Brand href="#">
            <div className='brand-color'>مطعم المحبة</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث عن المنتجات"
              className="mx-2"
              aria-label="Search"
              onChange={(e)=> setWord(e.target.value)}
              value={word}
            />
            <button onClick={()=> onSearch(word)} className='btn-search'>ابحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default Navpar;