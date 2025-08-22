import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "top 85%",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1, duration: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1", duration: 1.2 },
      { scrub: 4 }
    );
    animateWithGsap(
      ".g_text",
      { y: 0, opacity: 1, ease: "power2.inOut", duration: 1.2 }
    );
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h1
          id="features_title"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white opacity-0 mb-20"
        >
          Explore the full story.
        </h1>

        {/* Hero Text */}
        <div className="text-center md:text-left mb-20 space-y-4">
          <h2 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
            iPhone.
          </h2>
          <h2 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Forged in titanium.
          </h2>
        </div>

        {/* Video Hero */}
        <div className="relative w-full h-[50vh] md:h-[70vh] mb-24 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
          <video
            ref={videoRef}
            id="exploreVideo"
            className="w-full h-full object-cover"
            playsInline
            muted
            preload="auto"
            autoPlay
          >
            <source src={exploreVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Feature Images */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-700 transform scale-90 g_grow opacity-0 transition duration-700">
            <img
              src={explore1Img}
              alt="Titanium iPhone"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-700 transform scale-90 g_grow opacity-0 transition duration-700">
            <img
              src={explore2Img}
              alt="Titanium iPhone 2"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Feature Text */}
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-gray-300 text-lg g_text opacity-0">
            iPhone 15 Pro is{" "}
            <span className="text-white font-semibold">
              the first iPhone to feature an aerospace-grade titanium design
            </span>
            , using the same alloy that spacecrafts use for missions to Mars.
          </p>
          <p className="text-gray-300 text-lg g_text opacity-0">
            Titanium has one of the best strength-to-weight ratios of any metal,
            making these our{" "}
            <span className="text-white font-semibold">
              lightest Pro models ever
            </span>
            . You'll notice the difference the moment you pick one up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

