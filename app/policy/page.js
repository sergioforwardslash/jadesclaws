import { STORE_CONTACT, STORE_LOCATION } from "@/constants/config";
import React from "react";

const Policy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgGray">
      <div className="max-w-4xl mx-auto px-4">
        {/* Urgent Announcement */}
        <div className="bg-red-500 text-white p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Urgent Announcement</h2>
          <p className="text-sm">
            I do not provide SOAK OFF service. Please remove your old gel polish
            before coming to your appointment. Thank you!
          </p>
          <p className="text-sm">
            No proporciono servicio de SOAK OFF. Por favor, quite su esmalte de
            gel antes de venir a su cita. ¡Gracias!
          </p>
        </div>

        {/* Costs */}
        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">Costs</h2>
          <p className="text-md mb-2">
            Our pricing is based on the services you choose. Here are our
            standard rates:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-1">Short/Med Acrylic Full Set w/Tips: $85</li>
            <li className="mb-1">Long Acrylic Full Set w/Tips: $115</li>
            <li className="mb-1">Dry Manicure (Rubber Base Polish w/Design Included): $40</li>
            <li className="mb-1">Acrylic Removal: $25</li>
            {/* Add more services and prices as needed */}
          </ul>
          <p className="text-sm mt-2">
            *These services come with any design of your choosing (as long as it fits within your 3hr appointment time)
          </p>
          <p className="text-sm mt-2">
            **$20 Deposits are non-refundable and will be applied to your total
          </p>
        </div>

        {/* Late Appointments */}
        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">Late Appointments</h2>
          <p className="text-md">
            We kindly request that you arrive on time for your appointment. If
            you are running late, please notify us as soon as possible. I give
            you 10 minutes before charging a $10 late fee. If you arrive more
            than 15 minutes late, we will cancel your appointment.
          </p>
        </div>

        {/* General Information */}
        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">General Information</h2>

          <p className="text-md">
            For any additional information or inquiries, please contact our
            salon at:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-1">Phone: {STORE_CONTACT.phone}</li>
            <li className="mb-1">Email: {STORE_CONTACT.email}</li>
            <li className="mb-1">
              Address: {STORE_LOCATION.address}, {STORE_LOCATION.city},{" "}
              {STORE_LOCATION.state}, {STORE_LOCATION.zip}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;
