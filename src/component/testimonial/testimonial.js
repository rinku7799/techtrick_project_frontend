import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        stars: 5,
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature",
        author: "DANIEL MILLER",
        role: "HAPPY CUSTOMER"
    },
    {
        stars: 5,
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature",
        author: "JOHN DOE",
        role: "SATISFIED CLIENT"
    },
    {
        stars: 5,
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature",
        author: "JOHN DOE",
        role: "SATISFIED CLIENT"
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
        nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    };

    return (
        <div className="container testimonial" style={{marginTop:"100px"}}>
            <div className="text-center">
            <span className='primary-color'>TESTIMONIALS</span>
            <p className="fw-bolder fs-2">What Our Client Says</p>
            </div>
            <Slider {...settings} className="mt-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-center">
                        <div className="text-warning mb-3">
                            {[...Array(testimonial.stars)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <div className="testimonial-content-container w-75 mx-auto">
                            <p className="testimonial-content">{testimonial.content}</p>
                        </div>
                        <p className="fs-5 fw-semibold">{testimonial.author}</p>
                        <p className="primary-color">{testimonial.role}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
