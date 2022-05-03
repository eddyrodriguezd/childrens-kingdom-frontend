import { Card, Form, Row, Col, Button } from 'react-bootstrap';

import img from '../../../assets/img_test.jpg';

const ShoppingCartCard = ({ title, image, description, price, quantity }) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs lg= {3}>
                        <Card.Img variant="top" src={img} style={{ height: '18rem' }} alt={title} />
                    </Col>

                    <Col xs lg={7}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Col>

                    <Col xs lg={1}>
                        <Form.Select aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                        </Form.Select>
                    </Col>

                    <Col xs lg={1}>
                        <p>S/. {price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg={1}>
                        <Button variant="success">Editar</Button>
                    </Col>
                    <Col xs lg={1}>
                        <Button variant="danger">Eliminar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ShoppingCartCard;