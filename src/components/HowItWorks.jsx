import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Chip animation
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: 'back.out(1.7)',
    });

    // Fade-in text animations
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-black text-white relative overflow-hidden">
      {/* Chip */}
      <div id="chip" className="flex justify-center mb-16">
        <img
          src={chipImg}
          alt="A17 Pro Chip"
          className="w-44 h-44 md:w-52 md:h-52 animate-bounce-slow"
        />
      </div>

      {/* Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 g_fadeIn">
          A17 Pro Chip <br /> A Monster Win for Gaming
        </h2>
        <p className="text-gray-300 text-lg md:text-xl g_fadeIn">
          It's here. The biggest redesign in the history of Apple GPUs. Power, efficiency, and
          immersive graphics in your hands.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full max-w-5xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
          <img
            src={frameImg}
            alt="Frame"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
          />
          <video
            playsInline
            muted
            autoPlay
            loop
            preload="none"
            ref={videoRef}
            className="w-full h-full object-cover rounded-3xl"
          >
            <source src={frameVideo} type="video/mp4" />
          </video>
        </div>
        <p className="text-center text-gray-400 mt-3 font-medium">Honkai: Star Rail</p>
      </div>

      {/* Text Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg g_fadeIn">
          <p className="text-gray-300 mb-2">
            A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
            <span className="text-white font-semibold">best graphic performance by far</span>.
          </p>
          <p className="text-gray-300">
            Mobile{' '}
            <span className="text-white font-semibold">
              games will look and feel immersive
            </span>
            , with incredibly detailed environments and characters.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center g_fadeIn">
          <p className="text-gray-300">New</p>
          <h3 className="text-3xl md:text-4xl font-bold text-white my-2">
            Pro-class GPU
          </h3>
          <p className="text-gray-300">with 6 cores</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
