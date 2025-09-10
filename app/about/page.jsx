"use client";

export default function AboutPage() {
  const sections = [
    {
      title: "Overview",
      text: "We are a B2B & B2C Integrated Marketplace provider for Standard and Customized MRO Spares, Consumables, and Hardware Products.",
      icon: <i className="ri-stack-line text-[#067afd] text-4xl"></i>,
    },
    {
      title: "Established",
      text: "Founded in 2018, we aim to revolutionize the fragmented Industrial and Hardware supply chain through Hyper-Local Stores and an E-commerce Platform powered by Proven Algorithms, AI, and Machine Learning.",
      icon: <i className="ri-calendar-check-line text-[#067afd] text-4xl"></i>,
    },
    {
      title: "Integration",
      text: "We integrate hardware stores, which face significant market competition, under our brand Byyizzy, leveraging our expertise and technology.",
      icon: <i className="ri-link text-[#067afd] text-4xl"></i>,
    },
    {
      title: "Chain of Hardware Stores",
      text: "Own and franchise hardware chain model—integrating shops in the online marketplace for a seamless shopping experience (both online & in-store). We also optimize hardware store operations and B2B processes with best-in-class strategies, hyper-local stores (JIT / VMI approach), and strong local business engagement.",
      icon: <i className="ri-store-2-line text-[#067afd] text-4xl"></i>,
    },
    {
      title: "E2E Ordering Service",
      text: "We provide best-in-class end-to-end ordering services along with free e-sourcing tools.",
      icon: (
        <i className="ri-checkbox-multiple-line text-[#067afd] text-4xl"></i>
      ),
    },
  ];

  return (
    <main>
      {/* About Section */}
      <section className="py-15 relative mt-[80px]  bg-blue-50">
        <div classname="bg-white py-5 w-full">
          <nav className="container mx-auto px-6 py-4 text-sm text-gray-600 ">
            <ol className="flex flex-wrap items-center space-x-2">
              <li>
                <a href="#" className="hover:text-black font-medium">
                  Byyizzy
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="hover:text-black font-medium">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-[#067afd] font-semibold">About us</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title Area */}

        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="About Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
              About Us

            </h1>
          </div>
        </div>

        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto pt-5">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            {/* Left Image Grid */}
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>

            {/* Right Content */}
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Every project we have undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, we have not only constructed buildings but also
                    built enduring connections that define our success story.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      33+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-[#067afd] hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section two */}
      <section className="relative py-10 lg:py-15">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2 text-center pt-[30px]">
              Welcome to <span className="text-[#067afd">Byyizzy.com</span>
              <br />
              Trusted and Value-Creating Marketplace Provider
            </h2>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 bg-[#067afd] rounded-full"></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <article
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 lg:py-15">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide Izzy with a seamless and transparent
                shopping experience in the complex & fragmented Industrial and
                Hardware products sector.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to bring revolutionary change in the Industrial
                and Hardware supply chain to create more value, enhance
                profitability, and ensure sustainable operations for all
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
