import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const ProductCreateEditCard = ({ title, image, description, price, showModal }) => {
    return (
        <Card style={{ margin: '1rem' }}>
            <Card.Body>
                <Row>
                    <Col xs lg={2}>
                        <Card.Img variant="top" src={image} style={{ height: '9rem', padding: '2rem' }} alt={title} />
                    </Col>

                    <Col xs lg={5} className='align-self-center'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Col>

                    <Col xs lg={2} className='align-self-center'>
                        <p>S/. {price}</p>
                    </Col>

                    <Col xs lg={1} className='align-self-center'>
                        <Button variant="secondary" onClick={() => showModal({title, image, description, price})}>Editar</Button>
                    </Col>

                    <Col xs lg={1} className='align-self-center'>
                        <Button variant="danger">Eliminar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

}

export default ProductCreateEditCard;