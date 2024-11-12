import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import hero1 from './Images/hero-img.png';
import phone1 from './Images/phone-01-removebg-preview.png';
import watch1 from './Images/watch-01-removebg-preview.png';
import wireless1 from './Images/wireless-01.png';
import './Corousel.css'
// import { SliderData } from './Product';

function Corousel() {
    return (
        <div id="carouselExample" className="carousel slide ">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <div>
                        <img src={hero1} className="d-block w-50 h-50" alt="..." />
                    </div>
                </div>
                <div className="carousel-item hero2">
                    <img src={phone1} className="d-block w-50 h-50" alt="..." />
                </div>
                <div className="carousel-item hero3">
                    <img src={wireless1} className="d-block w-50 h-50" alt="..." />
                </div>
                <div className="carousel-item hero4">
                    <img src={watch1} className="d-block w-50 h-50" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Corousel;
