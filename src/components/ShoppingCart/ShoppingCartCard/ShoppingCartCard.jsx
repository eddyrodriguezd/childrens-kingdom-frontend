import { Card, Row, Col, Button, Form } from 'react-bootstrap';

const ShoppingCartCard = ({ id, title, image, description, price, quantity, onUpdatePrice }) => {
    console.log('title', title, 'qty', quantity);
    
    const onQtyChange = (e) => {
        onUpdatePrice(id, e.target.value);
    }

    return (
        <Card style={{margin: '1rem', padding: '1rem'}}>
            <Card.Body>
                <Row>
                    <Col xs lg= {2}>
                        <Card.Img variant="top" src={image} style={{ height: '9rem'}} alt={title} />
                    </Col>

                    <Col xs lg={5} className='align-self-center'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Col>

                    <Col xs lg={2} className='align-self-center'>
                        <Form.Select defaultValue={quantity} onChange={(e) => onQtyChange(e)}>
                            <option key='1' value="1">1</option>
                            <option key='2' value="2">2</option>
                            <option key='3' value="3">3</option>
                            <option key='4' value="4">4</option>
                            <option key='5' value="5">5</option>
                        </Form.Select>
                    </Col>

                    <Col xs lg={2} className='align-self-center'>
                        <p>S/. {price}</p>
                    </Col>

                    <Col xs lg={1} className='align-self-center'>
                        <Button variant="danger">Eliminar</Button>
                    </Col>
                </Row>
                <Row>
                    {/*
                    <Col xs lg={1}>
                        <Button variant="success">Editar</Button>
                    </Col>
                    */}

                </Row>
            </Card.Body>
        </Card>
    );
}

export default ShoppingCartCard;