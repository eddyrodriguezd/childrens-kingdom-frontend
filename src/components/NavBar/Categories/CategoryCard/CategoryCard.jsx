import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ name, icon }) => {

	const navigate = useNavigate();
    const cardOnClick = () => {
        document.body.click();
        navigate('/products', { state: { category: {name} } });
    };

    return (
        <Card style={{ width: '10rem', marginLeft: '1rem', cursor: "pointer" }} onClick={cardOnClick}>
            <Card.Img style={{ height: '8rem', width: '8rem' }} variant="top" src={icon} alt={name} />
            <Card.Body>
                <Card.Subtitle style={{ textAlign: 'center' }} className="mb-2 description-muted">{name}</Card.Subtitle>
            </Card.Body>
        </Card >
    );
}

export default CategoryCard;