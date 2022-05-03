import { Row, Col } from 'react-bootstrap';
import ShoppingCartCard from '../ShoppingCartCard/ShoppingCartCard';

const ShoppingCartGrid = () => {
    const products = [
        { id: 1, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50, 
        quantity: 3},
        { id: 2, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50 },
        { id: 3, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50 },
        { id: 4, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50 }
    ];

    return (
        <Row xs={1} md={1}>
            {products.map((item) => (
                <Col>
                    <ShoppingCartCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        colors={item.colors} />
                </Col>
            ))}
        </Row>
    );
}

export default ShoppingCartGrid;