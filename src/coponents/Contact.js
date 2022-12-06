import React from "react";

function Contact() {
  return (
    <div className='bg-gray-700 text-white m-3 mt-3 rounded-md'>
    <section className="text-gray-400 bg-gray-900 body-font relative" id="contact">
    <div className="container mx-auto">
      <div className="container px-5 py-24 mx-auto flex justify-center items-center sm:flex-nowrap flex-wrap">
      <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-2">Contact</h1>
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
            </div>
        </div>
        <div className="w-full md:w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bangalore&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-full px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Sira Gate, Tumkur
              </p>
            </div>
            <div className="lg:w-full px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                mohammaditasmiya2001@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">9632275353</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
