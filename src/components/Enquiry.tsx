"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    model: "",
    type: "test_drive",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name} from ${formData.city}. I'm interested in the BYD ${formData.model} — I'd like to ${
      formData.type === "test_drive" ? "book a test drive" : "request a quote"
    }.`;
    const url = `https://wa.me/2348012345678?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="enquiry" className="bg-zinc-950 text-gray-100 py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Get Started — <span className="text-yellow-500">Request a Quote or Test Drive</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-black border border-zinc-800 rounded-2xl p-8 space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500"
        >
          <option value="">Select BYD Model</option>
          <option value="Dolphin">BYD Dolphin</option>
          <option value="Atto 3">BYD Atto 3</option>
          <option value="Seal">BYD Seal</option>
          <option value="Tang">BYD Tang</option>
        </select>

        <div className="flex gap-5 justify-center mt-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="type"
              value="test_drive"
              checked={formData.type === "test_drive"}
              onChange={handleChange}
            />
            Book Test Drive
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="type"
              value="quote"
              checked={formData.type === "quote"}
              onChange={handleChange}
            />
            Request Quote
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition"
        >
          Submit & Chat on WhatsApp
        </button>
      </form>
    </section>
  );
}
