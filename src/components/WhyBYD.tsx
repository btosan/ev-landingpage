"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyBYDSection() {
  const benefits = [
    {
      icon: "⛽",
      title: "Save up to ₦180,000 Monthly",
      description: "No more petrol or oil changes — spend your savings on what matters most.",
    },
    {
      icon: "🔋",
      title: "Charge at Home or Solar",
      description: "Enjoy the freedom of charging anywhere — skip fuel queues and scarcity.",
    },
    {
      icon: "🌍",
      title: "Eco-Friendly Driving",
      description: "Zero emissions for cleaner air and a greener Nigeria.",
    },
    {
      icon: "🧭",
      title: "Built for Nigerian Roads",
      description: "Strong suspension and high ground clearance built for local terrains.",
    },
    {
      icon: "🧰",
      title: "Low Maintenance",
      description: "Fewer moving parts, less servicing — electric simplicity at its best.",
    },
  ];

  return (
    <section
      id="why-byd"
      className="relative bg-black text-gray-100 py-16 md:py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 uppercase mt-3 md:mt-12 mb-6">
            Why Nigerians Are Switching to BYD
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            Discover how BYD’s electric vehicles are transforming mobility across Nigeria —
            saving money, protecting the environment, and delivering performance you can trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="text-3xl md:text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === RIGHT SIDE: IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl border-t-8 border-b-8 border-yellow-500 overflow-hidden"
        >
          <Image
            src="/assets/why-byd.png"
            alt="BYD electric car driving through Lagos city"
            fill
            className="object-cover rounded-2xl opacity-90"
            priority
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-2xl" /> */}
        </motion.div>
      </div>
    </section>
  );
}
