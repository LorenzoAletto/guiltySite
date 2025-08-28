"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    src: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/Guilty-Gear-Strive---How-To-Stop-Sol-Badguy-Kind-Of.jpg",
    alt: "First slide",
    text: "Sol Badguy",
  },
  {
    id: 2,
    src: "https://www.siliconera.com/wp-content/uploads/2020/04/Guilty-Gear-Strive-Starter-Guide-Ky-Kiske-Sol-Badguy-Siliconera.jpg",
    alt: "Second slide",
    text: "Ky Kiske",
  },
  {
    id: 3,
    src: "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2020/01/maxresdefault-3.jpg",
    alt: "Third slide",
    text: "Faust",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}

      {/* Prev/Next buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 opacity-60 text-white rounded-sm p-3 hover:opacity-100 transition h-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"
        >
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 opacity-60 text-white rounded-sm p-3 hover:opacity-100 transition h-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
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
