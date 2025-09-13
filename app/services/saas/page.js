import { Mail, MapPin } from "lucide-react";
import { CheckCircle } from "lucide-react";

import { Cog, Workflow, BarChart3 } from "lucide-react";
import {
  ClipboardList,
  FileText,
  ShoppingCart,
  Package,
  FileSpreadsheet,
  Receipt,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function SaaSService() {
  return (
    <div className="bg-[#edf6ff]">
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
            <li className="font-semibold text-[#1c90f2]">SASS</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <img
          src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
          alt="About Banner"
          className="h-full w-full object-cover blur-xs filter"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="px-4 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            sass
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16">
        {/* Section 1: Partner Management */}

        <section className="m-0 flex flex-col items-center gap-5 py-5 lg:flex-row">
          {/* Image */}
          <div className="text-center lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fimg01.jpg?alt=media&token=4e9163fa-8026-4fe3-9cae-9a670ecf30d8"
              alt="Partner Management"
              className="mx-auto w-full max-w-md"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
              Partner <span className="text-[#1c90f2]">Management</span>
            </h2>

            <ul className="space-y-4">
              {[
                "Seamless Registration and Onboarding: Easy access to new suppliers from your corporate website with workflow based approval.",
                "Effective Qualification: Option to allocate approval of new vendors to specific users for effective qualification.",
                "Efficient Categorization: Categorize your suppliers in multiple product categories using unique tagging based classification.",
                "Supplier Verification: View all supplier details in one place with option for industry expert verification.",
                "Real-Time Updates: Suppliers can update their details and documents to avoid costly mistakes.",
                "Vendor Performance Management: Multi-person rating system to see dynamic ratings of your suppliers.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 p-1 text-gray-700">
                  <div className="flex-shrink-0 p-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Source-to-Pay */}
        <section className="m-0 flex flex-col items-center gap-5 py-5 lg:flex-row-reverse">
          {/* Left Image */}
          <div className="text-center lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2Fabout2.svg?alt=media&token=d76eed87-d222-4a14-bc63-489abf58e6c8"
              alt="Source-to-Pay"
              className="mx-auto w-3/4"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
              Source to <span className="text-[#1c90f2]">Pay</span>
            </h2>
            {/* Steps */}
            {[
              {
                text: "Extremely Simple: Step-by-step process with auto-save functionality for all RFx, RFI vs RFQ and e-auction participation screen.",
                icon: CheckCircle,
              },
              {
                text: "Purchase Requisitions: Create value by negotiating multi-round RFQ, e-bidding, e-auction tools and counter offers.",
                icon: FileText,
              },
              {
                text: "Purchase Order Workflow: A purchase order is generated once the purchase requisition is approved.",
                icon: ShoppingCart,
              },
              {
                text: "Invoicing: Automated invoice processing with reconciliation matching purchase orders to invoices.",
                icon: FileSpreadsheet,
              },
              {
                text: "Payment: Once approved, payment is made according to credit terms.",
                icon: CreditCard,
              },
              {
                text: "Improve Negotiation Performance: Multi-person rating system for dynamic supplier ratings.",
                icon: TrendingUp,
              },
            ].map(({ text, icon: Icon }, i) => (
              <div key={i} className="flex items-start gap-3 p-1 text-gray-700">
                <div className="flex-shrink-0 p-1">
                  <Icon className="h-5 w-5 text-green-500" />
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3:   Procure to Pay */}

        <section className="m-0 flex flex-col items-center gap-5 py-5 lg:flex-row-reverse">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Image */}
              <div className="text-center lg:text-left">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2FprocuretoPay.jpg?alt=media&token=d68c483a-40dd-4b87-ac0f-baac26f8c156"
                  alt="Procure to Pay"
                  className="mx-auto lg:mx-0"
                />
              </div>

              {/* Right Content */}
              <div>
                {/* Heading */}
                <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                  Procure to <span className="text-[#1c90f2]">Pay</span>
                </h2>

                <p className="mb-8 text-gray-600">
                  A streamlined process from identifying needs to ensuring supplier payments —
                  enhancing transparency and efficiency across procurement.
                </p>

                {/* Steps */}
                <div className="mb-4">
                  <h4 className="mb-4 text-xl font-semibold text-gray-800">Key Steps</h4>
                  <ul className="space-y-3">
                    {[
                      {
                        text: "Need identified – The need for a product or service is recognized.",
                        icon: ClipboardList,
                      },
                      {
                        text: "Requisition management – Request created and approved.",
                        icon: FileText,
                      },
                      {
                        text: "Purchase Order issued – Sent to supplier after approval.",
                        icon: ShoppingCart,
                      },
                      {
                        text: "Goods receipt – Supplier delivers goods/services, receipt is created.",
                        icon: Package,
                      },
                      {
                        text: "Invoice received – Supplier submits invoice for processing.",
                        icon: FileSpreadsheet,
                      },
                      {
                        text: "Invoice processing – Matched with PO & docs, exceptions reviewed.",
                        icon: Receipt,
                      },
                      {
                        text: "Accounts Payable – Approved invoices are paid and recorded.",
                        icon: CreditCard,
                      },
                    ].map(({ text, icon: Icon }, i) => (
                      <li key={i} className="flex items-start gap-3 p-1 text-gray-700">
                        <Icon className="mt-1 mr-3 h-5 w-5 text-green-500" />
                        <span className="flex items-start gap-3 p-1 text-gray-700">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  {/* <h4 className="mb-4 text-xl font-semibold text-gray-800"> </h4> */}
                  <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                    Major<span className="text-[#1c90f2]">Benefits</span>
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Automated procure-to-pay solution",
                      "Transparent and traceable P2P process",
                      "Improved collaboration between procurement and AP",
                      "Optimized supplier engagement and satisfaction",
                      "Measurable goals and performance tracking",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mt-1 mr-3 h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Payment Automation */}
        <section className="m-0 flex flex-col items-center gap-5 py-5 lg:flex-row">
          {/* Left Content */}
          <div className="space-y-6 lg:w-1/2">
            {/* Heading */}
            {/* <h2 className="text-3xl font-semibold text-[#1c90f2]"> </h2> */}
            <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
              Payment<span className="text-[#1c90f2]">Automation</span>
            </h2>
            {/* Features */}
            {[
              "Get an unbeatable invoice match rate – even when the PO was generated in another system or figures don’t line up perfectly",
              "Authorize payments up to 30x faster, saving labor and earning early payment discounts",
              "Capture every invoice with 100% accuracy using SmartPDF technology",
              "Stay compliant with automated tax code handling and tax calculations",
              "Pull data directly into a centralized dashboard to get 100% spend visibility without lifting a finger",
            ].map((item, i) => (
              <p key={i} className="flex items-start gap-3 p-1 text-gray-700">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                {item}
              </p>
            ))}

            {/* Major Benefits */}
            <div className="mt-6">
              {/* <h3 className="mb-3 text-xl font-medium text-[#1c90f2]">Major Benefits</h3> */}
              <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-2xl">
                Major<span className="text-[#1c90f2]">Benefits</span>
              </h2>
              {[
                "Automated matching for PO-based spend",
                "Automated matching for non-PO-based spend",
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-3 p-1 text-gray-700">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="text-center lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2FpaymentAutomation.jpg?alt=media&token=0a4d5a90-c8ee-47aa-88de-4def3167575d"
              alt="Payment Automation"
              className="mx-auto w-3/4"
            />
          </div>
        </section>

        {/* Section 5: Analytics */}
        <section className="flex flex-col items-center gap-5 py-5 lg:flex-row">
          {/* Left Image */}
          <div className="text-center lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2FourSource%2FpaymentAutomation.jpg?alt=media&token=0a4d5a90-c8ee-47aa-88de-4def3167575d"
              alt="Analytics"
              className="mx-auto w-3/4"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:w-1/2">
            {/* Title */}
            <h2 className="text-3xl font-semibold text-[#1c90f2]">Analytics</h2>

            {/* Features */}
            {[
              "Get a holistic view of realised and committed spend in one place (both direct and indirect spending)",
              "Increase automation efficiency by identifying bottlenecks throughout the AP and P2P process",
              "Gain visibility into spend by organisation, category, supplier, cost center, GL accounts, or by managed vs unmanaged spend",
              "Optimise cash flow by generating predictions on upcoming payments and spend commitments",
            ].map((item, i) => (
              <p key={i} className="flex items-start gap-3 p-1 text-gray-700">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                {item}
              </p>
            ))}

            {/* Major Benefits */}
            <div className="mt-6">
              <h3 className="mb-3 text-xl font-medium text-[#1c90f2]">Major Benefits</h3>
              {[
                "Holistic Spend Analysis",
                "KPIs and Benchmarking",
                "Predictive Analytics",
                "Supplier Quality and Performance",
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-3 p-1 text-gray-700">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Service Cards */}
        <section className="mb-1 py-5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Efficient Sourcing",
                  desc: "Streamline your supplier discovery process",
                  icon: <Cog className="h-8 w-8" />,
                },
                {
                  title: "Automated Workflows",
                  desc: "Reduce manual efforts with automation",
                  icon: <Workflow className="h-8 w-8" />,
                },
                {
                  title: "Analytics Dashboard",
                  desc: "Visualize your spend and supplier performance",
                  icon: <BarChart3 className="h-8 w-8" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-[#1c90f2]">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h5 className="mb-3 text-center text-xl font-semibold text-gray-800">
                    {item.title}
                  </h5>

                  {/* Description */}
                  <p className="text-center leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
      </div>
    </div>
  );
}
