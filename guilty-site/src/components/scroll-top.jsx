import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle, { passive: true });
    toggle(); // set initial state
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <div>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 text-white transition-all duration-500 z-50 ease-in-out hover:brightness-110
                  ${visible ? "translate-y-0" : "translate-y-full pointer-events-none"}`}
      >
        <img className="w-[100px] h-auto transition duration-300 hover:brightness-125" src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/pagetop.png" alt="pagetop"></img>
      </button>
    </div>
  );
}