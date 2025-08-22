import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(
      "#hero-video",
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.8, ease: "power3.out", delay: 1 }
    );
    gsap.fromTo(
      "#cta",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 2 }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Hero Title */}
      <h1
        id="hero-title"
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white text-center mb-8 z-20"
      >
        iPhone 15 Pro
      </h1>

      {/* Video */}
      <div className="relative w-full md:w-10/12 lg:w-8/12 rounded-xl overflow-hidden shadow-2xl">
        <video
          id="hero-video"
          className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Subtle overlay to darken video for readability */}
        <div className="absolute inset-0 bg-black/40 rounded-xl pointer-events-none"></div>
      </div>

      {/* CTA */}
      <div
        id="cta"
        className="mt-10 flex flex-col items-center space-y-4 text-center z-20"
      >
        <a
          href="#highlights"
          className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Buy Now
        </a>
        <p className="text-gray-400 text-lg sm:text-xl">
          From $199/month or $999
        </p>
      </div>

      {/* Optional subtle floating shapes */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
