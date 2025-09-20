import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  // Placeholder for car images
  // To add your own images, place them in the /public/images directory
  // and update the src attribute with the correct path
  // Example: { id: 1, src: '/images/your-car-image.jpg', alt: 'Your Car Name' }
  const carImages = [
    { id: 1, src: '/images/car1.png', alt: 'Vishwaracers Baja Car 1' },
    { id: 2, src: '/images/car2.png', alt: 'Vishwaracers Baja Car 2' },
    { id: 3, src: '/images/car3.png', alt: 'Vishwaracers Baja Car 3' },
    { id: 4, src: '/images/car4.png', alt: 'Vishwaracers Baja Car 4' },
    { id: 5, src: '/images/car5.png', alt: 'Vishwaracers Baja Car 5' },
    { id: 6, src: '/images/car6.png', alt: 'Vishwaracers Baja Car 6' },
  ];

  return (
    <div className="gallery-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Our Baja Collection</h2>
          </div>
        </div>
        <div className="row">
          {carImages.map((car) => (
            <div className="col-md-4 col-sm-6 mb-4" key={car.id}>
              <div className="card-wrapper">
                <div className="card">
                  <img src={car.src} className="card-img" alt={car.alt} />
                  <div className="card-body">
                    <h5 className="card-title">Baja Car Model {car.id}</h5>
                    <p className="card-text">Experience the thrill of off-road racing with our Baja vehicles.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;