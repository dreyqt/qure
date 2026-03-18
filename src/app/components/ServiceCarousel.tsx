import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { services } from '../data/services';

interface ArrowProps {
  onClick?: () => void;
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
    >
      <ChevronLeft className="w-6 h-6 text-gray-700" />
    </button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
    >
      <ChevronRight className="w-6 h-6 text-gray-700" />
    </button>
  );
}

export function ServiceCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Eco-<span className="text-green-600">Friendly</span> Pest Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer the most effective pest management solutions available while staying true to our commitment to
            being environmentally conscious.
          </p>
        </div>

        <div className="relative px-12">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <Link 
                      to={`/services/${service.slug}`}
                      className="text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/services"
            className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}