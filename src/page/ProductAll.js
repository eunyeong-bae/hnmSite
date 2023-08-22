import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [ productList, setProductList] = useState([]);

    const getProducts = async() => {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        let data = await response.json();
        // console. log(data)
        setProductList(data);
    };

    useEffect(() =>{
        getProducts();
    }, []);

  return (
    <div>
        <Container> {/* 아이템을 가운데로 모아주는 역할 */}
            <Row>
                { productList.map((menu,idx)=> <Col lg={3}><ProductCard item={menu}/></Col>)}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
