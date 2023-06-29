"use client";

import React, { useState } from "react";

const Appointments = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgGray">
      <h1 className="text-3xl text-black font-semibold mb-4">
        Book an Appointment
      </h1>
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg w-full max-w-lg">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/aXupujdS1YQhGEqERcuF"
          style={{width: '100%', border: 'none', overflow: 'hidden'}}
          id="msgsndr-calendar"
        ></iframe>
        <br />
        <script
          src="https://link.msgsndr.com/js/embed.js"
          type="text/javascript"
        ></script>
        
      </div>
    </div>
  );
};

export default Appointments;
