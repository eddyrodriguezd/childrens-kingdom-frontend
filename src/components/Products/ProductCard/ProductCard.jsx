import { Card, Button } from 'react-bootstrap';

import './ProductCard.css';

import img from '../../../assets/img_test.jpg';

const ProductCard = ({ title, image, text, price, colors }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">S/. {price}</Card.Subtitle>
                {text}
                <Card.Text>
                    {colors && colors.map((color) =>
                        <span className="dot" style={{ backgroundColor: color, margin: '0.2rem' }} />
                    )}
                </Card.Text>
                <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Body>
        </Card >
    );
}

export default ProductCard;