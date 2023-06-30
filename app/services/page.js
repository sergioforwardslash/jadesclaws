// pages/services.js

import Image from 'next/image';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';

const services = [
  {
    title: 'Acrylic Nails',
    description: 'Enhance your nails with our high-quality acrylic nail services. Our skilled technicians will create custom acrylic nail extensions that are durable, natural-looking, and perfectly suited to your style. Say hello to stunning nails!',
    image: '/images/acrylic-nail.png',
  },
  {
    title: 'Gel Nails',
    description: 'Get long-lasting, beautiful nails with our gel nail services. Our skilled technicians use high-quality gel products to create stunning and durable nail enhancements. Say goodbye to chipped polish!',
    image: '/images/gel-nails.png',
  },
  {
    title: 'Nail Art',
    description: 'Express your creativity with our unique and intricate nail art designs. From simple patterns to intricate hand-painted masterpieces, our talented nail artists can turn your nails into a canvas of art.',
    image: '/images/nail-art.png',
  },
  {
    title: 'Soak Off',
    description: 'If you need to remove your current gel or acrylic nails, our soak-off service is perfect for you. Our gentle and precise soak-off process ensures your nails are properly taken care of, leaving them ready for a fresh set.',
    image: '/images/soak-off.png',
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
