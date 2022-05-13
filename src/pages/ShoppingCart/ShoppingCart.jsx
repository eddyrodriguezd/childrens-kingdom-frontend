import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import OrderSummaryCard from '../../components/ShoppingCart/OrderSummaryCard/OrderSummaryCard';
import ShoppingCartGrid from '../../components/ShoppingCart/ShoppingCartGrid/ShoppingCartGrid';

import { getAllProductsByCategory } from '../../api/products/productsEndpoints';
import Payment from '../../components/Payment/Payment';

const ShoppingCart = ({ cartProducts }) => {

    const products = getAllProductsByCategory('food');

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Row xs={1} lg={2}>
                <Col xs lg={8}>
                    <ShoppingCartGrid products={cartProducts} />
                </Col>
                <Col xs lg={4}>
                    <OrderSummaryCard products={cartProducts} showModal={setModalShow} />
                </Col>
            </Row>
            <Payment
                products={cartProducts}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ShoppingCart;