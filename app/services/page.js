// pages/services.js

import Image from 'next/image';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';

const services = [
  {
    title: 'Manicure',
    description: 'Our expert nail technicians provide professional manicure services to keep your nails healthy and stylish. Whether you prefer a classic manicure or something more creative, we have got you covered.',
    image: '/images/manicure.png',
  },
  {
    title: 'Pedicure',
    description: 'Treat your feet to a relaxing pedicure in our serene salon environment. Our pedicure services help rejuvenate your tired feet and leave them feeling refreshed. Choose from a variety of options to suit your needs.',
    image: '/images/pedicure.webp',
  },
  {
    title: 'Gel Nails',
    description: 'Get long-lasting, beautiful nails with our gel nail services. Our skilled technicians use high-quality gel products to create stunning and durable nail enhancements. Say goodbye to chipped polish!',
    image: '/images/gel-nails.jpg',
  },
  {
    title: 'Nail Art',
    description: 'Express your creativity with our unique and intricate nail art designs. From simple patterns to intricate hand-painted masterpieces, our talented nail artists can turn your nails into a canvas of art.',
    image: '/images/nailart.jpg',
  },
];

const Services = () => {
  return (
    <div className="py-10 bg-bgGray min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Fragment key={index}>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="mb-4">
                  <Image
                    src={service.image || <Skeleton />}
                    alt={service.title}
                    width={400}
                    height={300}
                    style={{ objectFit: "fill" }}
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">{service.title || <Skeleton />}</h2>
                <p className="text-gray-700">{service.description || <Skeleton count={6} />}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
