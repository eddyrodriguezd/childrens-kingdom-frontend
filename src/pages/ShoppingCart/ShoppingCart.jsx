import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import OrderSummaryCard from '../../components/ShoppingCart/OrderSummaryCard/OrderSummaryCard';
import ShoppingCartGrid from '../../components/ShoppingCart/ShoppingCartGrid/ShoppingCartGrid';

import { getAllProductsByCategory } from '../../api/products/productsEndpoints';
import Payment from '../../components/Payment/Payment';

const ShoppingCart = () => {
    const products = getAllProductsByCategory('food');

    const [modalShow, setModalShow] = useState(false);

    console.log('modalShow:', modalShow);

    return (
        <>
            <Row xs={1} lg={2}>
                <Col xs lg={8}>
                    <ShoppingCartGrid products={products} />
                </Col>
                <Col xs lg={4}>
                    <OrderSummaryCard products={products} showModal={setModalShow} />
                </Col>
            </Row>
            <Payment
                products={products}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ShoppingCart;