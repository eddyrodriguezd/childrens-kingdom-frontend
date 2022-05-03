import { Row, Col } from 'react-bootstrap';
import OrderSummaryCard from '../../components/ShoppingCart/OrderSummaryCard/OrderSummaryCard';
import ShoppingCartGrid from '../../components/ShoppingCart/ShoppingCartGrid/ShoppingCartGrid';

const ShoppingCart = () => {
    return (
        <Row xs={1} lg={2}>
            <Col xs lg={8}>
                <ShoppingCartGrid/>
            </Col>
            <Col xs lg={4}>
                <OrderSummaryCard/>
            </Col>
        </Row>
    );
}

export default ShoppingCart;