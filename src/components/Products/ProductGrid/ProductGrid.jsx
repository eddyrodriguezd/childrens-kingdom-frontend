import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = (products) => {
    products = [
        { id: 1, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", text: "Prueba", price: 50, 
        colors: ['red', 'blue', 'yellow', 'green', 'orange', 'purple'] },
        { id: 2, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", text: "Prueba", price: 50 },
        { id: 3, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", text: "Prueba", price: 50 },
        { id: 4, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", text: "Prueba", price: 50 }
    ];

    return (
        <Container style={{ margin: '4rem' }}>
            <Row>
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        text={item.text}
                        price={item.price}
                        colors={item.colors}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProductGrid;