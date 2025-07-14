import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Naruto Half Sleeve Tee", category: "Half Sleeves", price: 349, img: "https://i.imgur.com/9YQ3ZX1.png" },
  { id: 2, name: "Tanjiro Oversized Tee", category: "Oversized", price: 599, img: "https://i.imgur.com/1kX4daz.png" },
  { id: 3, name: "One Piece Off-Shoulder Tee", category: "Off-Shoulder", price: 499, img: "https://i.imgur.com/AqVytpl.png" },
  { id: 4, name: "Gojo Oversized Tee", category: "Oversized", price: 649, img: "https://i.imgur.com/LLcR7Up.png" },
  { id: 5, name: "Luffy Half Sleeve Tee", category: "Half Sleeves", price: 299, img: "https://i.imgur.com/FdCTfbx.png" },
  { id: 6, name: "Nezuko Off-Shoulder Tee", category: "Off-Shoulder", price: 459, img: "https://i.imgur.com/SUOnu8g.png" },
];

function App() {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? products : products.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold">OtakuFuel</h1>
        <p className="text-zinc-400 mt-2">T-Shirts from ₹249 to ₹649 — Unleash Your Inner Otaku</p>
        <div className="mt-4 space-x-2">
          {['All', 'Half Sleeves', 'Oversized', 'Off-Shoulder'].map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1 rounded-full border ${category === c ? 'bg-white text-black' : 'border-white'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12">
        {filtered.map(p => (
          <div key={p.id} className="bg-zinc-800 rounded-2xl overflow-hidden shadow-md">
            <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-zinc-400">₹{p.price}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center text-zinc-500 text-sm py-4 border-t border-zinc-700">
        © 2025 OtakuFuel. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
