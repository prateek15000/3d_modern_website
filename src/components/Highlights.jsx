import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.from("#title", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".highlight-link", { opacity: 0, y: 20, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-full overflow-hidden py-24 px-6 md:px-12 bg-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end space-y-8 md:space-y-0">
        {/* Section Title */}
        <h1
          id="title"
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Get the highlights.
        </h1>

        {/* Watch Links */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          <a
            href="#"
            className="highlight-link flex items-center px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white hover:text-black hover:scale-105 transition transform duration-300 cursor-pointer"
          >
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2 w-5 h-5 object-contain" />
          </a>

          <a
            href="#"
            className="highlight-link flex items-center px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white hover:text-black hover:scale-105 transition transform duration-300 cursor-pointer"
          >
            Watch the event
            <img src={rightImg} alt="right" className="ml-2 w-5 h-5 object-contain" />
          </a>
        </div>
      </div>

      {/* Video Carousel */}
      <div className="mt-16">
        <VideoCarousel className="rounded-3xl shadow-2xl overflow-hidden border border-white/10" />
      </div>
    </section>
  );
};

export default Highlights;
