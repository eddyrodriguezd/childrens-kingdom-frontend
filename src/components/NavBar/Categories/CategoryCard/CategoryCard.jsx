import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const CategoryCard = ({ name, icon }) => {

    return (
        <Card style={{ width: '10rem', marginLeft: '1rem' }}>
            <Card.Img style={{height: '8rem', width: '8rem'}} variant="top" src={icon} alt={name} />
            <Card.Body>
                <Card.Subtitle style={{textAlign: 'center'}} className="mb-2 description-muted">{name}</Card.Subtitle>
            </Card.Body>
        </Card >
    );
}

export default CategoryCard;