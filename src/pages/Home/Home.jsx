import { useLocation } from 'react-router-dom';
import HomeCarousel from '../../components/Home/HomeCarousel/HomeCarousel';

const Home = ({setCartProducts}) => {
    const location = useLocation();
    const status =  location.state?.status;

    if(status == 'ORDER_CREATED') {
        setCartProducts([]); //Empty cart
    }

    return (
        <>
            {status=='ORDER_CREATED' && (
                <div className='alert alert-success text-center'>
                    Orden creada con éxito: Email de confirmación enviado.
                </div>
            )}
            <HomeCarousel />
        </>
    );
}

export default Home;