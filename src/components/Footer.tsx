import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">Contact</h3>
          <p>Lagos, Nigeria</p>
          <p>+234 801 234 5678</p>
          <p>info@evehicles.com.ng</p>
        </div>

        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#pricing" className="hover:text-yellow-500">Pricing</a></li>
            <li><a href="#faq" className="hover:text-yellow-500">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><Youtube size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Join our EV community for updates & offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-zinc-900 px-3 py-2 rounded-l-xl w-full focus:outline-none"
            />
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-xl font-semibold hover:bg-yellow-400">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} eVehicles Nigeria — Authorized BYD Distributor.
      </div>
    </footer>
  );
}
