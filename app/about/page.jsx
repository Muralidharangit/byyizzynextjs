"use client";

export default function AboutPage() {
  const sections = [
    {
      title: "Overview",
      text: "We are a B2B & B2C Integrated Marketplace provider for Standard and Customized MRO Spares, Consumables, and Hardware Products.",
      icon: <i className="ri-stack-line text-4xl text-[#067afd]"></i>,
    },
    {
      title: "Established",
      text: "Founded in 2018, we aim to revolutionize the fragmented Industrial and Hardware supply chain through Hyper-Local Stores and an E-commerce Platform powered by Proven Algorithms, AI, and Machine Learning.",
      icon: <i className="ri-calendar-check-line text-4xl text-[#067afd]"></i>,
    },
    {
      title: "Integration",
      text: "We integrate hardware stores, which face significant market competition, under our brand Byyizzy, leveraging our expertise and technology.",
      icon: <i className="ri-link text-4xl text-[#067afd]"></i>,
    },
    {
      title: "Chain of Hardware Stores",
      text: "Own and franchise hardware chain model—integrating shops in the online marketplace for a seamless shopping experience (both online & in-store). We also optimize hardware store operations and B2B processes with best-in-class strategies, hyper-local stores (JIT / VMI approach), and strong local business engagement.",
      icon: <i className="ri-store-2-line text-4xl text-[#067afd]"></i>,
    },
    {
      title: "E2E Ordering Service",
      text: "We provide best-in-class end-to-end ordering services along with free e-sourcing tools.",
      icon: <i className="ri-checkbox-multiple-line text-4xl text-[#067afd]"></i>,
    },
  ];

  return (
    <main>
      {/* About Section */}
      <section className="relative mt-[80px] bg-blue-50 py-15">
        <div classname="bg-white py-5 w-full">
          <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center space-x-2">
              <li>
                <a href="#" className="font-medium hover:text-black">
                  Byyizzy
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="font-medium hover:text-black">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#067afd]">About us</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title Area */}

        <div className="relative h-64 w-full overflow-hidden md:h-96">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="About Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="px-4 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              About Us
            </h1>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pt-5 md:px-5 lg:px-5">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-12 lg:grid-cols-2">
            {/* Left Image Grid */}
            <div className="order-last grid w-full grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:order-first">
              <div className="flex items-start justify-start gap-2.5 pt-24 sm:justify-end lg:justify-center">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="ml-auto rounded-xl object-cover sm:ml-0"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>

            {/* Right Content */}
            <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
              <div className="flex w-full flex-col items-start justify-center gap-8">
                <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                  <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                    Every project we have undertaken has been a collaborative effort, where every
                    person involved has left their mark. Together, we have not only constructed
                    buildings but also built enduring connections that define our success story.
                  </p>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-5 sm:gap-10 lg:justify-start">
                  <div className="inline-flex flex-col items-start justify-start">
                    <h3 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                      33+
                    </h3>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                      125+
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                      52+
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg bg-[#067afd] px-3.5 py-2 shadow-md transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-1.5 text-sm leading-6 font-medium text-white">Read More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section two */}
      <section className="relative py-10 lg:py-15">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="mb-2 pt-[30px] text-center text-3xl font-bold text-gray-900 md:text-3xl">
              Welcome to <span className="text-[#067afd">Byyizzy.com</span>
              <br />
              Trusted and Value-Creating Marketplace Provider
            </h2>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 rounded-full bg-[#067afd]"></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <article
                key={index}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-4">{section.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">{section.title}</h3>
                <p className="leading-relaxed text-gray-600">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 lg:py-15">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="leading-relaxed text-gray-700">
                Our mission is to provide Izzy with a seamless and transparent shopping experience
                in the complex & fragmented Industrial and Hardware products sector.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="leading-relaxed text-gray-700">
                Our vision is to bring revolutionary change in the Industrial and Hardware supply
                chain to create more value, enhance profitability, and ensure sustainable operations
                for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
