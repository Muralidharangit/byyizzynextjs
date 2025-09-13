import Link from "next/link";

export default function serv2() {
  return (
    <section className="bg-[#1c90f2]">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:px-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="animate-fadeIn space-y-6 text-white">
          <h1 className="text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-4xl">
            Our Services1 content
          </h1>

          {/* Bullet Points */}
          <ul className="list-inside list-disc space-y-2 text-white">
            <li>Easy credit &amp; EMI Facility to B2C Customers</li>
            <li>Fastest Delivery of Industrial Products</li>
            <li>Optimized Inventory Model</li>
            <li>Improved Margins</li>
            <li>More Business Volume</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-6 sm:flex-row">
            <Link
              href="#services"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[#004aad] shadow-md transition hover:bg-gray-200"
            >
              Get Started
            </Link>
            <Link
              href="#learn"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#004aad]"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        {/* <div className="animate-fadeIn flex justify-center lg:justify-end">
                        <Image
                          src="https://i.pinimg.com/1200x/bc/7e/db/bc7edb885820ae38acd5c482d091d489.jpg"
                          alt="Banner Illustration"
                          fill
                          className="max-h-[400px] w-full max-w-md rounded-xl object-contain shadow-lg"
                        />
                      </div> */}
      </div>
    </section>
  );
}
