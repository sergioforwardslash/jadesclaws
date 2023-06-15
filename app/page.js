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
    <div className="flex flex-col items-center justify-center min-h-screen pb-5 bg-bgGray">
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
          <h2 className="text-3xl font-bold text-gray-800">Location</h2>
          <ul className="mt-4 text-gray-600">
            <li>{STORE_LOCATION.address}</li>
            <li>{STORE_LOCATION.city}</li>
            <li>{STORE_LOCATION.state}</li>
            <li>{STORE_LOCATION.zip}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
          <p className="mt-4 text-gray-600">
            Phone: {STORE_CONTACT.phone}
            <br />
            Email: {STORE_CONTACT.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
