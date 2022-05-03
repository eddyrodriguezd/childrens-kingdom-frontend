import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from '../../../api/products/productsEndpoints';
import useAxios from '../../../hooks/useAxios';

const ProductGrid = (/*products*/) => {
    /*products = [
        { id: 1, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50, 
        colors: ['red', 'blue', 'yellow', 'green', 'orange', 'purple'] },
        { id: 2, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50 },
        { id: 3, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50 },
        { id: 4, title: "Botella con cañita de silicona", image: "../../../assets/img_test.jpg", description: "Prueba", price: 50 }
    ];*/
    const responseOptions = {
		successTrigger: null,
		successCode: 200,
		successMessage: 'Products successfully retrieved',
		errorMessage: "Couldn't retrieve products",
	};

    const products = useAxios('get', 'products', null, responseOptions);
    console.log(products);

    return (
        <Container style={{ margin: '4rem' }}>
            <Row>
                {products.data != null && products.data.map((item) => (
                    <ProductCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        colors={item.colors}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProductGrid;