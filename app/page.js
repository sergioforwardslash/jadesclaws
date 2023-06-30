import Head from "next/head";
import ScrollingBanner from "@/components/ScrollingBanner";
import { STORE_CONTACT, STORE_LOCATION, STORE_NAME } from "@/constants/config";

const HomePage = () => {
  const bannerImages = [
    {
      url: "/images/handnails.jpg",
      welcomeText: "Welcome to our Nail Salon!",
      promoText: "Book an appointment with us",
      promoLink: "/appointments",
    },
    {
      url: "/images/handnails2.jpg",
      welcomeText: "Pamper yourself with our services",
      promoText: "Explore our services",
      promoLink: "/services",
    },
    {
      url: "/images/handnails3.jpg",
      welcomeText: "Experience the art of nail care",
      promoText: "Discover our nail art",
      promoLink: "/photos",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-5 bg-bgGray w-full">
      <Head>
        <title>Nail Salon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollingBanner images={bannerImages} />

      <div className="max-w-3xl px-4 py-8 mt-12 shadow-md rounded-lg">
        {/* About us section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            Welcome to {STORE_NAME}! We provide a wide range of services,
            including manicures, pedicures, nail extensions, nail art, and more.
            Our team of experienced professionals is dedicated to providing you
            with the best nail care experience in a relaxing and comfortable
            environment.
          </p>
        </div>

        {/* Location and contact information */}
        <div className="mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Location</h2>
            <ul className="mt-4 text-gray-600">
              <li>{STORE_LOCATION.address}</li>
              <li>{STORE_LOCATION.city}</li>
              <li>{STORE_LOCATION.state}</li>
              <li>{STORE_LOCATION.zip}</li>
            </ul>
          </div>
          <div className="flex justify-center mt-4">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53027.89725651058!2d-118.30968313117125!3d33.8318285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd351b95d10fc7%3A0xce4ed9b0c3fa92aa!2sNail%20Shop!5e0!3m2!1sen!2sus!4v1687216266175!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
          <p className="mt-4 text-gray-600">
            Phone: {STORE_CONTACT.phone}
            <br />
            Email: {STORE_CONTACT.email}
            <br />
            Instagram:{" "}
            <a href="https://www.instagram.com/nailssbylvurv/" className="hover:text-purple-400">
              @nailssbylvurv
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
