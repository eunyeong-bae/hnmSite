import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col,Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };
  
  useEffect(() => {
    getProductDetail();
  }, []);
  
  const product = useSelector(state => state.product.productDetailList);

  return (
    <Container className='product-container'>
      <Row>
        <Col className='product-img'>
          <img width={200} src={product?.img} />
        </Col>
        <Col>
          <div style={{fontSize:'17px', marginBottom:'10px'}}>{product?.title}</div>
          <div style={{fontSize:'17px', marginBottom:'10px'}}>₩ {product?.price}</div>
          <div style={{fontSize:'14px', marginBottom:'15px'}}>{product?.choice ? 'Best Choice' : ''}</div>
          <div style={{marginBottom:'15px'}}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                { product && product['size']?.map(item => {
                  return <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button className='product-btn'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
