import { Card, Button } from 'react-bootstrap';

import './ProductCard.css';

const ProductCard = ({ id, title, image, description, price, colors, showConfirmModal }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 description-muted">S/. {price}</Card.Subtitle>
                {description}
                <Card.Text>
                    {colors && colors.map((color) =>
                        <span className="dot" style={{ backgroundColor: color, margin: '0.2rem' }} />
                    )}
                </Card.Text>
                <Button
                    variant="outline-dark"
                    onClick={() => showConfirmModal({id, title, image, description, price})}
                >
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card >
    );
}

export default ProductCard;