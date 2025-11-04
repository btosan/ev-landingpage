"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const models = [
  {
    name: "BYD Dolphin",
    description: "Compact hatchback, stylish and efficient.",
    specs: "Range: 405km | Charging: 1hr fast charge",
    price: "From ₦25m",
    image: "/assets/ev/models/byd-dolphin.jpg",
  },
  {
    name: "BYD Atto 3",
    description: "Modern SUV packed with smart tech and comfort.",
    specs: "Range: 480km | Interior: Intelligent touchscreen",
    price: "From ₦35m",
    image: "/assets/ev/models/byd-atto3.jpg",
  },
  {
    name: "BYD Seal",
    description: "Luxury performance sedan for executives.",
    specs: "Range: 520km | 0–100km/h: 3.8s",
    price: "From ₦45m",
    image: "/assets/ev/byd-seal.jpg",
  },
  {
    name: "BYD Tang",
    description: "Spacious 7-seater SUV built for families.",
    specs: "Range: 500km | AWD: Yes",
    price: "From ₦55m",
    image: "/assets/ev/models/byd-tang.jpg",
  },
];

export default function MeetBYDFamily() {
  return (
    <section
      id="models"
      className="relative bg-black text-gray-100 py-16 md:py-24 px-6 md:px-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-300 uppercase my-4"
        >
          Meet the BYD Family
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 text-base md:text-lg"
        >
          Choose your perfect BYD model — power, luxury, and sustainability
          built for Nigerian roads.
        </motion.p>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {models.map((model, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-yellow-500 transition-all"
          >
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                {model.name}
              </h3>
              <p className="text-gray-300 mb-2">{model.description}</p>
              <p className="text-gray-400 text-sm mb-4">{model.specs}</p>
              <p className="text-gray-200 font-semibold mb-6">
                {model.price}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition-all">
                  Book Test Drive
                </button>
                <button className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-black transition-all">
                  View Model
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
