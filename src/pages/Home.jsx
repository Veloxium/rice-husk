/* eslint-disable no-undef */
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
import {
  Mail,
  MapPin,
  MousePointer2,
  PackagePlus,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

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

function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, autoplay: true })
  );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!", {
        description: text,
        position: "top-right",
      });
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        serviceID,
        templateID,
        e.target, // Pass the HTML form element directly
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
          });
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message", {
            position: "top-right",
          });
        }
      );
    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
  };

  return (
    <div>
      <ZNavbar />
      <section
        id="home"
        className="relative flex flex-col items-start justify-center min-h-screen overflow-hidden"
      >
        <div className="absolute -z-10 w-full h-full bg-black opacity-60"></div>
        <Carousel
          className={"absolute w-full h-screen -z-20"}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {carouselImage.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-screen"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="px-4 md:px-40 mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            West Nusa Tenggara Rice Husk
          </h1>
          <p className="text-lg md:text-2xl italic px-2 bg-zprimary text-black inline-block ">
            Natural. Sustainable. Ready for Export.
          </p>
          <p className="text-white text-lg mt-4 max-w-2xl">
            We are a leading exporter of rice husk, specializing in high-quality
            rice husk sourced directly from West Nusa Tenggara, Indonesia.
            Processed with clean standards and ready for international markets.
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <a
              href="#contact"
              className="flex gap-2 w-fit rounded bg-zprimary px-4 py-2 mt-4 border-2 border-zprimary hover:bg-transparent hover:text-white transition duration-300 group"
            >
              <PackagePlus className="group-hover:translate-x-1 transition duration-300" />
              <p className="group-hover:translate-x-1 transition duration-300">
                Request Quotation
              </p>
            </a>
            <a
              href="#contact"
              className="flex gap-2 w-fit rounded bg-zprimary px-4 py-2 mt-4 border-2 border-zprimary hover:bg-transparent hover:text-white transition duration-300 group"
            >
              <Send className="group-hover:translate-x-1 transition duration-300" />
              <p className="group-hover:translate-x-1 transition duration-300">
                Contact Us
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-start bg-gray-100">
        <div id="about" className="w-0 h-0 absolute -top-36" />
        <div className="px-4 py-10 md:py-16 md:px-40 bg-zprimary w-full text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">About Us</h1>
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
        <div className="px-4 py-10 md:py-20 md:px-40 w-full text-center">
          <p className="text-4xl font-semibold">Our Products</p>
          <p className="text-justify max-w-2xl mx-auto bg-zprimary text-black inline-block px-2 mt-2 w-fit">
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
            <div className="overflow-hidden rounded-xl shadow-md col-span-2 md:col-span-1 row-span-1">
              <img
                src={"/products/p6.jpg"}
                alt={"Product 5"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start text-left mt-10">
            <p className="text-2xl font-semibold">
              Rice Husk – Genuine NTB Rice Husk
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
              <div className="flex flex-col text-left space-y-3">
                <p className="text-lg">
                  Rice husk from West Nusa Tenggara is known for its light
                  weight, cleanliness, and high utility across various
                  industries:
                </p>
                <ul className="space-y-2 space-x-2 text-lg">
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Biomass fuel
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Biofuel
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Organic growing medium
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Alternative livestock feed
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Eco-friendly industrial material
                  </li>
                </ul>
              </div>
              <div className="flex flex-col text-left space-y-3">
                <p className="text-lg font-semibold">
                  Technical Specifications:
                </p>
                <ul className="space-y-2 space-x-2 text-lg">
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Moisture: &lt; 15%
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Color: Light brown to grayish
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Packaging: 20 kg & 50 kg
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> MOQ: 1 ton
                  </li>
                  <li className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit">
                    <MousePointer2 size={14} /> Custom packaging available
                  </li>
                </ul>
              </div>
              <p className="text-lg font-semibold mt-4 md:mt-2 md:col-span-2">
                Price (Estimate):
              </p>
              <div className="flex flex-col text-left text-lg space-y-1">
                <div className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit font-semibold">
                  <MousePointer2 size={14} /> FOB Indonesia (port):
                </div>
                <p className="ml-8">
                  <span className="font-semibold">USD 50 – 80 per ton</span>{" "}
                  (depending on quality & order volume)
                </p>
              </div>

              <div className="flex flex-col text-left text-lg space-y-1">
                <div className="inline-flex items-center gap-2 bg-zprimary px-3 py-1 rounded w-fit font-semibold">
                  <MousePointer2 size={14} /> Note:
                </div>
                <p className="ml-8 font-semibold">
                  Price excludes international shipping (negotiable)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-start h-full">
        <div id="contact" className="w-0 h-0 absolute -top-16" />
        <div className="absolute -z-10 w-full h-full bg-black opacity-70"></div>
        <div className="absolute -z-20 w-full h-full">
          <img
            src={"/p4.jpg"}
            alt={"Image 1"}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="py-10 px-4 md:py-20 md:px-40 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 w-full text-center">
            <div className="flex flex-col items-start text-left">
              <p className="text-4xl font-semibold px-2 bg-zprimary text-black">
                Contact Us
              </p>
              <p className="text-lg font-semibold mt-4">
                Interested in working with us or requesting a price quote?
                Please reach out to us through the following contact:
              </p>
              <p className="flex items-center gap-2 text-2xl font-semibold mt-4">
                <MapPin />
                Address
              </p>
              <p className="text-lg font-semibold">
                Tapir Raya Street, RT 001 / RW 001, Mongal Hamlet, <br />
                Tapir Village, Seteluk District, <br />
                West Sumbawa Regency, West Nusa Tenggara, Indonesia – 84455
              </p>
              <p className="flex items-center gap-2 text-2xl font-semibold mt-4">
                <Phone />
                WhatsApp / Phone
              </p>
              <button
                onClick={() => copyToClipboard("+6281239030424")}
                className="relative group mt-1"
              >
                <div className="absolute bg-zprimary h-full w-1 group-hover:w-full -z-10 transition-all duration-300" />
                <p className="font-semibold py-1 px-2 text-lg group-hover:text-black transition-all duration-300">
                  (+62)812-3903-0424
                </p>
              </button>
              <p className="flex items-center gap-2 text-2xl font-semibold mt-4">
                <Mail />
                Email
              </p>
              <button
                onClick={() =>
                  copyToClipboard("westnusatenggararicehusksuppli@gmail.com")
                }
                className="relative group mt-1"
              >
                <div className="absolute bg-zprimary h-full w-1 group-hover:w-full -z-10 transition-all duration-300" />
                <p className="font-semibold flex break-all text-left py-1 px-2 text-lg group-hover:text-black transition-all duration-300">
                  westnusatenggararicehusksuppli@gmail.com
                </p>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                sendMessage(e);
              }}
              className="flex flex-col gap-4 text-left"
            >
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Insert your name"
                  className="mt-1 w-full border border-gray-300 rounded bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zprimary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Insert your email"
                  className="mt-1 w-full border border-gray-300 rounded bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zprimary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Insert your message"
                  rows={4}
                  className="mt-1 w-full border border-gray-300 rounded bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zprimary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex gap-2 w-full items-center justify-center rounded bg-zprimary px-4 py-2 mt-4 border-2 border-zprimary hover:bg-transparent hover:text-white transition duration-300 group"
              >
                <Send className="group-hover:translate-x-1 transition duration-300" />
                <p className="group-hover:translate-x-1 transition duration-300">
                  Send Message
                </p>
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-white grid grid-cols-1 md:grid-cols-2 px-4 py-10 md:px-40 md:py-20 gap-x-6 gap-y-4">
        <div className="flex flex-col justify-center items-center">
          <img src="/logo.jpg" alt="logo" className="w-60" />
          <p className="text-center md:text-lg mt-4 max-w-lg">
            High-quality rice husk sourced directly from West Nusa Tenggara,
            Indonesia. Processed with clean standards and ready for
            international markets.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-lg md:text-2xl">
            Let's Get In Touch
          </h3>
          <p className="text-center">
            Let’s collaborate to create solutions that meet your needs.
          </p>
        </div>
      </footer>
      <div className="py-6 bg-zprimary flex flex-col justify-center items-center">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} West Nusa Tenggara Rice Husk. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Home;
