"use client";

export default function AboutPage() {
  const sections = [
    {
      title: "Overview",
      text: "We are a B2B & B2C Integrated Marketplace provider for Standard and Customized MRO Spares, Consumables, and Hardware Products.",
      icon: <i className="ri-stack-line text-3xl text-white"></i>,
      color: "bg-gradient-to-tr from-blue-500 to-indigo-600",
    },
    {
      title: "Established",
      text: "Founded in 2018, we aim to revolutionize the fragmented Industrial and Hardware supply chain through Hyper-Local Stores and an E-commerce Platform powered by Proven Algorithms, AI, and Machine Learning.",
      icon: <i className="ri-calendar-check-line text-3xl text-white"></i>,
      color: "bg-gradient-to-tr from-green-400 to-teal-500",
    },
    {
      title: "Integration",
      text: "We integrate hardware stores, which face significant market competition, under our brand Byyizzy, leveraging our expertise and technology.",
      icon: <i className="ri-link text-3xl text-white"></i>,
      color: "bg-gradient-to-tr from-purple-500 to-pink-500",
    },
    {
      title: "Chain of Hardware Stores",
      text: "Own and franchise hardware chain model—integrating shops in the online marketplace for a seamless shopping experience (both online & in-store).",
      icon: <i className="ri-store-2-line text-3xl text-white"></i>,
      color: "bg-gradient-to-tr from-yellow-400 to-orange-500",
    },
    {
      title: "E2E Ordering Service",
      text: "We provide best-in-class end-to-end ordering services along with free e-sourcing tools.",
      icon: <i className="ri-checkbox-multiple-line text-3xl text-white"></i>,
      color: "bg-gradient-to-tr from-red-400 to-pink-500",
    },
  ];

  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="About Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid sm:grid-cols-2 gap-6 relative">
              <img
                className="rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Image 1"
              />
              <img
                className="rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-12 sm:mt-0"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="About Image 2"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-bold lg:text-left text-center">
                Empowering Each Other to Succeed
              </h2>
              <p className="text-gray-600 text-center lg:text-left">
                Every project we have undertaken has been a collaborative effort, where every
                person involved has left their mark. Together, we have not only constructed
                buildings but also built enduring connections that define our success story.
              </p>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-10 mt-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold">33+</h3>
                  <p className="text-gray-500">Years of Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold">125+</h3>
                  <p className="text-gray-500">Successful Projects</p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold">52+</h3>
                  <p className="text-gray-500">Happy Clients</p>
                </div>
              </div>

              <button className="self-center lg:self-start px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose <span className="text-blue-600">Byyizzy</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div
                  className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full ${section.color} shadow-md`}
                >
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide Izzy with a seamless and transparent shopping experience
              in the complex & fragmented Industrial and Hardware products sector.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              Our vision is to bring revolutionary change in the Industrial and Hardware supply
              chain to create more value, enhance profitability, and ensure sustainable operations
              for all stakeholders.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
