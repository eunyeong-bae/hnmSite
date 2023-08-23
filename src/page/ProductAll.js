import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [ productList, setProductList] = useState([]);
    
    const [query, setQuery] = useSearchParams();

    const getProducts = async() => {
        let searchQuery = query.get('q') || "";

        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // console. log(data)
        setProductList(data);
    };

    useEffect(() =>{
        getProducts();
    }, [ query]);

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
