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
                    style={{height: '35rem'}}
                />
                <Carousel.Caption>
                    <h3 className='text-outlined'>First slide label</h3>
                    <p className='text-outlined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselSecondImg}
                    alt="Second slide"
                    style={{height: '35rem'}}
                />
                <Carousel.Caption>
                    <h3 className='text-outlined'>Second slide label</h3>
                    <p className='text-outlined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselThirdImg}
                    alt="Third slide"
                    style={{height: '35rem'}}
                />
                <Carousel.Caption>
                    <h3 className='text-outlined'>Third slide label</h3>
                    <p className='text-outlined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;