import clothesIcon from '../assets/categories/icons/clothes.png';
import foodIcon from '../assets/categories/icons/food.png';
import toysIcon from '../assets/categories/icons/toys.png';
import healthIcon from '../assets/categories/icons/health.png';
import artIcon from '../assets/categories/icons/art.png';

const getAllCategories = () => {
	return [
        {
            id: 1,
            name: 'Ropa',
            icon: clothesIcon
        },
        {
            id: 2,
            name: 'Alimentación',
            icon: foodIcon
        },
        {
            id: 3,
            name: 'Juguetes y juegos',
            icon: toysIcon
        },
        {
            id: 4,
            name: 'Salud e higiene',
            icon: healthIcon
        },
        {
            id: 5,
            name: 'Arte y creatividad',
            icon: artIcon
        }
    ];
};

export { getAllCategories };