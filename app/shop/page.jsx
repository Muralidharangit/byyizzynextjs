"use client";
import { useState } from "react";
import EnquiryModal from "@/components/pop";
export default function MachineryShopPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Breadcrumbs */}
      <div classname="bg-white py-5 w-full">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600 ">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <a href="#" className="hover:text-black font-medium">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="hover:text-black font-medium">
                Shop
              </a>
            </li>
            <li>/</li>
            <li className="text-[#067afd] font-semibold">Machinery</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-[112px]">
        {/* Sidebar - Machinery Categories */}
        <aside className="bg-white rounded-2xl shadow p-6 sticky top-6 self-start">
          <h2 className="text-xl font-bold mb-6 text-black">Categories</h2>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center justify-between border-b border-gray-200 pb-2">
              <a href="#" className="hover:text-black block">
                Construction Machinery
              </a>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between border-b border-gray-200 pb-2">
              <a href="#" className="hover:text-black block">
                Agricultural Equipment
              </a>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between border-b border-gray-200 pb-2">
              <a href="#" className="hover:text-black block">
                Industrial Tools
              </a>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between border-b border-gray-200 pb-2">
              <a href="#" className="hover:text-black block">
                Mining Equipment
              </a>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between border-b border-gray-200 pb-2">
              <a href="#" className="hover:text-black block">
                Power Generators
              </a>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between">
              <a href="#" className="hover:text-black block">
                Other Machinery
              </a>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </li>
          </ul>

          {/* Filter Section */}
          <div className="mt-8">
            <h3 className="text-gray-700 font-semibold mb-3">Price Range</h3>
            <input
              type="range"
              min="100"
              max="5000"
              value="2500"
              className="w-full bg-[#067afd]"
            />
            <p className="text-sm text-gray-500 mt-2">Up to $2500</p>
          </div>
        </aside>

        {/* Products Section */}
        <section className="lg:col-span-3 space-y-12">
          {/* Products Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Excavator",
                  price: 3200,
                  img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                },
                {
                  name: "Tractor",
                  price: 2500,
                  img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                },
                {
                  name: "Drilling Machine",
                  price: 1800,
                  img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                },
                {
                  name: "Bulldozer",
                  price: 4200,
                  img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                },
                {
                  name: "Power Generator",
                  price: 1500,
                  img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                },
                {
                  name: "Forklift",
                  price: 2800,
                  img: "https://cdn.decornation.in/wp-content/uploads/2020/02/home-furniture-traditional-designer-sitting-coffee-table.png",
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        High quality machinery
                      </p>
                    </div>

                    {/* Price & Add Button */}
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold text-black">
                        ${product.price}
                      </span>

                      <div className="p-6">
                        {/* Button that triggers popup */}
                        {/* <button
                          onClick={() => setOpen(true)}
                          className="px-6 py-3 rounded-lg text-white font-medium 
                   bg-gradient-to-r from-[#067afd] to-[#004aad] hover:opacity-90 transition"
                        >
                          Get Quote
                        </button> */}

                        {/* Reusable Popup */}
                        <EnquiryModal
                          open={open}
                          onClose={() => setOpen(false)}
                        />
                      </div>

                      <button
                        className="relative flex items-center gap-2 px-5 py-2 rounded bg-[#067afd] text-white font-medium text-sm shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 overflow-hidden"
                        onClick={() => setOpen(true)}
                      >
                        <span className="relative z-10">Add Enquiry</span>
                        {/* <i className="ri-shopping-cart-2-line relative z-10"></i> */}
                        {/* Shine animation */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition duration-700"></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Prev Button */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition">
              <i className="ri-arrow-left-s-line"></i>
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                  page === 1
                    ? "bg-gradient-to-r from-[#067afd] to-blue-600 text-white shadow-lg"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
