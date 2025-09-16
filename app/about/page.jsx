"use client";

import Link from "next/link";

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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Start Page Title Area */}
      <div className="mt-[110px] w-full bg-white py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <Link href="#" className="font-medium hover:text-black">
                Byyizzy
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="#" className="font-medium hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#1c90f2]">About</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="relative h-64 overflow-hidden md:h-96">
          {/* blurred image */}
          <img
            src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
            alt="About Banner"
            className="h-full w-full object-cover blur-xs filter"
          />

          {/* dark overlay to dim the image a bit */}
          <div className="absolute inset-0 bg-black/25" />

          {/* centered highlighted text box */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-[] rounded-lg px-6 py-3 text-center" style={{}}>
              <h1 className="text-3xl font-bold text-white drop-shadow sm:text-4xl md:text-5xl">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Images */}
            <div className="relative grid gap-6 sm:grid-cols-2">
              {/* <img
                className="transform rounded-xl shadow-lg transition duration-500 hover:scale-105"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="About Image 1"
              />
              <img
                className="mt-12 transform rounded-xl shadow-lg transition duration-500 hover:scale-105 sm:mt-0"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="About Image 2"
              /> */}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8">
              <h2 className="text-center text-4xl font-bold lg:text-left">
                Empowering Each <span className="text-[#1c90f2]">Other to Succeed </span>
              </h2>
              <p className="text-center text-gray-600 lg:text-left">
                Every project we have undertaken has been a collaborative effort, where every person
                involved has left their mark. Together, we have not only constructed buildings but
                also built enduring connections that define our success story.
              </p>

              {/* Stats */}
              <div className="mt-6 flex justify-center gap-10 lg:justify-start">
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

              <button className="self-center rounded-lg bg-[#067afd] px-6 py-3 text-white shadow-lg transition-all duration-500 hover:bg-indigo-700 lg:self-start">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-[#edf6ff] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="py-5 text-center">
            <h2 className="mb-2 text-center text-3xl font-bold">
              Why Choose <span className="text-[#1c90f2]">Byyizzy</span>
            </h2>
            <p className="text-md text-gray-500">
              Discover the benefits that make Byyizzy stand out from the rest.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${section.color} shadow-md`}
                >
                  {section.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{section.title}</h3>
                <p className="text-gray-600">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2 lg:px-12">
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Our <span className="text-[#1c90f2]">Mission</span>{" "}
            </h2>
            <p className="text-gray-700">
              Our mission is to provide Izzy with a seamless and transparent shopping experience in
              the complex & fragmented Industrial and Hardware products sector.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Our <span className="text-[#1c90f2]"> Vision</span>
            </h2>
            <p className="text-gray-700">
              Our vision is to bring revolutionary change in the Industrial and Hardware supply
              chain to create more value, enhance profitability, and ensure sustainable operations
              for all stakeholders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
