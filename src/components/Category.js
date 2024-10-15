import { Row, Col } from 'react-bootstrap';
import React from 'react';
import { Roll } from 'react-reveal';

const Category = ({ filterByCategory, allCategories }) => {
 

  return (

    <Row className='my-2 mb-5'>
      <Col sm={12} className='d-flex justify-content-center'>
      <Roll left>
        <div>
          {allCategories.length >=1 ? allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => filterByCategory(cat)}
              className='btn-category mx-2'
            >
              {cat}
            </button>
          )) : <h2>لا يوجد أصناف</h2>}
        </div>
        </Roll>
      </Col>
    </Row>
  );
}
export default Category;
