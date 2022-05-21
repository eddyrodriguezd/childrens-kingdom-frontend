import { Carousel, Card } from 'react-bootstrap';

import carouselFirstImg from '../../../assets/carousel/carousel_1.jpg';
import carouselSecondImg from '../../../assets/carousel/carousel_2.jpg';
import carouselThirdImg from '../../../assets/carousel/carousel_3.jpg';

import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselFirstImg}
                    alt="First slide"
                    style={{ height: '35rem' }}
                />
                <Carousel.Caption>
                    <h1 className='text-outlined'>¡Bienvenido a Children's Kingdom!</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselSecondImg}
                    alt="Second slide"
                    style={{ height: '35rem' }}
                />
                <Carousel.Caption>
                    <h1 className='text-outlined'>Aquí encontrarás todo lo que necesitas...</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselThirdImg}
                    alt="Third slide"
                    style={{ height: '35rem' }}
                />
                <Carousel.Caption>
                    <h1 className='text-outlined'>para los/as pequeños/as del hogar</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;