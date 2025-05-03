import React from "react";
import ZNavbar from "../components/znavbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MousePointer2, PackagePlus, Send } from "lucide-react";

function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, autoplay: true })
  );

  const carouselImage = [
    {
      src: "/p1.jpg",
      alt: "Image 1",
    },
    {
      src: "/p2.jpg",
      alt: "Image 2",
    },
    {
      src: "/p3.jpg",
      alt: "Image 3",
    },
  ];

  return (
    <div>
      <ZNavbar />
      <section
        id="home"
        className="relative flex flex-col items-start justify-center min-h-screen overflow-hidden"
      >
        <div className="absolute -z-10 w-full h-full bg-black opacity-40"></div>
        <Carousel
          className={"absolute w-full h-full -z-20"}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {carouselImage.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="px-4 md:px-40 mb-10">
          <h1 className="text-6xl font-bold text-gray-100 mb-4">
            West Nusa Tenggara Rice Husk
          </h1>
          <p className="text-2xl italic px-2 bg-zprimary text-black inline-block ">
            Natural. Sustainable. Ready for Export.
          </p>
          <p className="text-white text-lg mt-4 max-w-2xl">
            We are a leading exporter of rice husk, specializing in high-quality
            rice husk sourced directly from West Nusa Tenggara, Indonesia.
            Processed with clean standards and ready for international markets.
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <button className="flex gap-2 bg-zprimary px-4 py-2 mt-4 border-2 border-zprimary hover:bg-transparent hover:text-white transition duration-300 group">
              <PackagePlus className="group-hover:translate-x-1 transition duration-300" />
              <p className="group-hover:translate-x-1 transition duration-300">
                Request Quotation
              </p>
            </button>
            <button className="flex gap-2 bg-zprimary px-4 py-2 mt-4 border-2 border-zprimary hover:bg-transparent hover:text-white transition duration-300 group">
              <Send className="group-hover:translate-x-1 transition duration-300" />
              <p className="group-hover:translate-x-1 transition duration-300">
                Contact Us
              </p>
            </button>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-start bg-gray-100">
        <div id="about" className="w-0 h-0 absolute -top-36" />
        <div className="py-16 px-40 bg-zprimary w-full text-center">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="text-lg text-justify mt-4">
            West Nusa Tenggara Rice Husk is a community-rooted enterprise
            committed to turning agricultural byproducts into globally
            competitive commodities. Based in the heart of West Sumbawa Regency,
            Indonesia, our mission is to transform rice husk—often considered
            waste—into a sustainable, value-added product that meets the demands
            of international industries.
          </p>
          <p className="text-lg text-justify mt-2">
            Our operations are founded on three core principles: quality,
            sustainability, and partnership. We work closely with local farmers
            to source rice husk that is clean, dry, and naturally produced.
            Every batch is processed with high hygiene standards and packaged
            professionally to meet international expectations.
          </p>
          <p className="text-lg text-justify mt-2">
            We believe that Indonesia’s agricultural resources, when managed
            with care and innovation, hold immense potential to shine in the
            global market. By leveraging local knowledge, empowering rural
            communities, and embracing environmentally responsible practices, we
            strive not only to grow our business—but to contribute to a more
            sustainable future.
          </p>
          <p className="text-lg text-justify mt-2">
            Whether you’re a buyer seeking a reliable supply of rice husk or a
            partner committed to eco-friendly sourcing, we are ready to serve as
            your trusted, long-term collaborator.
          </p>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-start bg-gray-100 min-h-screen">
        <div id="product" className="w-0 h-0 absolute -top-16" />
        <div className="py-20 px-40 w-full text-center">
          <p className="text-4xl font-semibold">Our Products</p>
          <p className="text-lg text-justify mt-4 max-w-2xl mx-auto bg-zprimary text-black inline-block p-2 w-fit">
            Providing The Best Quality Products
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] mt-4">
            <div className="overflow-hidden rounded-xl shadow-md col-span-1 row-span-2">
              <img
                src={"/products/p2.jpg"}
                alt={"Product 1"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md col-span-2 row-span-1">
              <img
                src={"/products/p5.jpg"}
                alt={"Product 2"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md col-span-1 row-span-1">
              <img
                src={"/products/p3.jpg"}
                alt={"Product 3"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md col-span-3 row-span-2">
              <img
                src={"/products/p7.jpg"}
                alt={"Product 4"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md col-span-1 row-span-1">
              <img
                src={"/products/p6.jpg"}
                alt={"Product 5"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col items-start text-left mt-10">
            <p className="text-2xl font-semibold">
              Rice Husk – Genuine NTB Rice Husk
            </p>
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-start text-left">
                <p className="text-lg">
                  Rice husk from West Nusa Tenggara is known for its light
                  weight, cleanliness, and high utility across various
                  industries:
                </p>
                <ul className="flex flex-col list-disc list-inside mt-2 text-lg space-y-2">
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Biomass fuel
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Biofuel
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Organic growing medium
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Alternative livestock feed
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Eco-friendly industrial material
                  </ol>
                </ul>
              </div>
              <div className="flex flex-col items-start text-left">
                <p className="text-lg font-semibold">
                  Technical Specifications:
                </p>
                <ul className="flex flex-col list-disc list-inside mt-2 text-lg space-y-2">
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Moisture: &lt; 15%
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Color: Light brown to grayish
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Packaging: 20 kg & 50 kg (plastic sack or as requested)
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    MOQ: 1 ton
                  </ol>
                  <ol className="inline-flex items-center gap-2 bg-zprimary px-2 w-fit">
                    <MousePointer2 size={14} />
                    Customization: Custom packaging available for buyers
                  </ol>
                </ul>
              </div>
              <p className="text-lg font-semibold mt-4 col-span-2">
                Price (Estimate):
              </p>
              <div className="flex flex-col items-start text-left text-lg">
                <ol className="inline-flex items-center gap-2 font-semibold px-2 w-fit">
                  <MousePointer2 size={14} />
                  FOB Indonesia (port):
                </ol>
                <p className="ml-8">
                  <span className="font-semibold">USD 50 – 80 per ton</span>{" "}
                  (depending on quality & order volume)
                </p>
              </div>
              <div className="flex flex-col items-start text-left text-lg">
                <ol className="inline-flex items-center gap-2 px-2 w-fit">
                  <MousePointer2 size={14} />
                  <span className="font-semibold">Note:</span> Price excludes
                  international shipping (negotiable)
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
