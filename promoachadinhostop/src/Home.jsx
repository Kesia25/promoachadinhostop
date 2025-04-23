
import React, { useState } from "react";
import "./index.css";

const lojas = [
  {
    nome: "Amazon",
    ofertas: [
      {
        titulo: "Echo Dot 5ª Geração",
        imagem: "https://m.media-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg",
        link: "https://www.amazon.com.br/dp/B09WZJZV8H?tag=seulink",
      },
      {
        titulo: "Fire TV Stick Full HD",
        imagem: "https://m.media-amazon.com/images/I/51Da2Z+FTKL._AC_SL1000_.jpg",
        link: "https://www.amazon.com.br/dp/B09RXVC1VY?tag=seulink",
      },
    ],
  },
  {
    nome: "Magalu",
    ofertas: [
      {
        titulo: "Smartphone Samsung Galaxy A14",
        imagem: "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-a14/magazineluiza/234234800/bf351a0fd7f99a15cfd3cb158fdb139d.jpg",
        link: "https://www.magazinevoce.com.br/magazine/seulink/p/smartphone-galaxy-a14",
      },
    ],
  },
];

export default function Home() {
  const [busca, setBusca] = useState("");

  const ofertasFiltradas = lojas.flatMap((loja) =>
    loja.ofertas.filter((oferta) =>
      oferta.titulo.toLowerCase().includes(busca.toLowerCase())
    )
  );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">As Melhores Ofertas da Internet</h1>

      <div className="mb-6">
        <input
          className="border p-2 rounded w-full"
          placeholder="Buscar ofertas..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ofertasFiltradas.map((oferta, index) => (
          <div key={index} className="rounded-xl shadow-md border overflow-hidden">
            <img src={oferta.imagem} alt={oferta.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{oferta.titulo}</h2>
              <a href={oferta.link} target="_blank" rel="noopener noreferrer" className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded">
                Ver Oferta
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
