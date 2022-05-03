import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const ShoppingCartCard = ({ title, image, description, price, quantity }) => {
    return (
        <Card style={{margin: '1rem'}}>
            <Card.Body>
                <Row>
                    <Col xs lg= {3}>
                        <Card.Img variant="top" src={image} style={{ height: '8rem', padding: '2rem' }} alt={title} />
                    </Col>

                    <Col xs lg={6} className='align-self-center'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Col>

                    <Col xs lg={1} className='align-self-center'>
                        <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                        </Form.Select>
                    </Col>

                    <Col xs lg={2} className='align-self-center'>
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