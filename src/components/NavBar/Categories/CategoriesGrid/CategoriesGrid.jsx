import { Container, Row } from 'react-bootstrap';
import { getAllCategories } from '../../../../local/localData';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesGrid = () => {
    const categories = getAllCategories();

    return (
        <Container style={{ margin: '2rem'}}>
            <Row>
                {categories != null && categories.map((item) => (
                    <CategoryCard
                        key={item.id}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default CategoriesGrid;