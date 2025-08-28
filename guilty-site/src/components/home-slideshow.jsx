"use client";
import { useState } from "react";

const slides = [
  {
    id: 1,
    src: "https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/character_sol_visual@pc.webp",
    alt: "First slide",
    char_name: "Sol Badguy",
    char_desc: "Once a scientist named Frederick, Sol became the first “Gear” and now hides his past behind the facade of a gruff bounty hunter. Known for his fiery temper and raw strength, he wields the Fireseal sword to incinerate enemies up close. His relentless drive is fueled by a personal war against the very Gears he helped create."
  },
  {
    id: 2,
    src: "https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/character_kai_visual@pc.webp",
    alt: "Second slide",
    char_name: "Ky Kiske",
    char_desc: "A former Holy Order knight who rose to become the King of Illyria. Despite his youth, Ky is respected for his discipline, compassion, and unwavering sense of justice. Fighting with the Thunderseal sword, he channels powerful lightning magic to strike down his foes while striving to build a world of peace and order."
  },
  {
    id: 3,
    src: "https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/character_cos_visual@pc.webp",
    alt: "Third slide",
    char_name: "Happy Chaos",
    char_desc: "The self-proclaimed originator of magic and the embodiment of humanity’s duality. Once an ally of Asuka, he unleashed chaos on the world out of curiosity and amusement. With his dual pistols and endless supply of bullets, Happy Chaos thrives on unpredictability, blurring the line between genius and madness as he toys with his opponents."
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex w-full flex-shrink-0 h-[600px] items-center ms-0"
          >
            {/* Text section */}
            <div className="w-1/2 flex flex-col justify-center items-end pr-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 text-right">
                {slide.char_name}
              </h2>
              <h5 className="text-lg md:text-2xl text-white drop-shadow-lg text-right w-1/2">
                {slide.char_desc}
              </h5>
            </div>
            {/* Image section */}
            <div className="w-1/2 h-full flex items-center">
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-h-full max-w-full object-contain transform transition-all duration-700 ease-out"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 opacity-60 text-white rounded-sm p-3 hover:opacity-100 transition h-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 opacity-60 text-white rounded-sm p-3 hover:opacity-100 transition h-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-red-600" : "bg-red-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
