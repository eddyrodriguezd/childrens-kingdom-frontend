import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap';

const OrderSummaryCard = ({productsPrice, deliveryPrice, showModal}) => {

    return (
        <Card style={{ margin: '1rem' }}>
            <Card.Body>
                <Card.Title>Resumen de tu orden</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col xs lg={8}>
                                Productos
                            </Col>
                            <Col xs lg={4}>
                                S/. {productsPrice.toFixed(2)}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col xs lg={8}>
                                Delivery
                            </Col>
                            <Col xs lg={4}>
                                S/. {deliveryPrice}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col xs lg={8} style={{ fontWeight: 'bold' }}>
                                Total
                            </Col>
                            <Col xs lg={4} style={{ fontWeight: 'bold' }}>
                                S/. {(productsPrice + deliveryPrice).toFixed(2)}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Button variant="dark" onClick={() => showModal(true)}>Pagar</Button>
        </Card >
    );
}

export default OrderSummaryCard;