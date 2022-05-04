import { Row, Col } from 'react-bootstrap';
import OrderSummaryCard from '../../components/ShoppingCart/OrderSummaryCard/OrderSummaryCard';
import ShoppingCartGrid from '../../components/ShoppingCart/ShoppingCartGrid/ShoppingCartGrid';

import { getAllProductsByCategory } from '../../api/products/productsEndpoints';

const ShoppingCart = () => {
    const products = getAllProductsByCategory('food');

    return (
        <Row xs={1} lg={2}>
            <Col xs lg={8}>
                <ShoppingCartGrid products={products}/>
            </Col>
            <Col xs lg={4}>
                <OrderSummaryCard products={products}/>
            </Col>
        </Row>
    );
}

export default ShoppingCart;