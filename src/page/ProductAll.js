import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    const productList = useSelector(state => state.product.productList);
    
    const [query, setQuery] = useSearchParams();

    const dispatch = useDispatch();

    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        dispatch(productAction.getProducts(searchQuery));
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
