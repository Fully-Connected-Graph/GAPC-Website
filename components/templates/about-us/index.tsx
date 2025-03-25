"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-black w-screen -translate-x-[calc(50vw-28rem)] max-lg:-translate-x-4">
      <div
        className="h-[calc(100vh-5rem)] bg-swirl bg-no-repeat flex flex-col gap-8 justify-center items-center text-white"
        style={{ backgroundSize: "cover" }}
      >
        <Image
          src="/assets/logo.png"
          alt="About Us"
          className="w-80 object-contain max-sm:w-60"
        />
        <span className="text-white text-center block font-jbMono text-9xl max-sm:text-5xl backdrop-blur-sm">
          GAPC
          <span className="text-[#4686ff]"> 2025</span>
        </span>
        <span className="text-white text-center block font-jbMono text-lg backdrop-blur-sm">
          Made with
          <span className="text-red-500 mx-2">❤️</span>
          by
          <a
            href="https://www.svcover.nl/committees/programming_committee"
            className="underline decoration-dotted underline-offset-4 ml-2"
          >
            FCG
          </a>
        </span>
        <span className="text-white text-center block font-jbMono text-lg w-[600px] max-w-[calc(100vw-4rem)] backdrop-blur-sm">
          GAPC is a programming contest held in Groningen. Teams will have 4
          hours to solve algorithmic problems and compete for the grand prize.
        </span>
        <Button
          variant="outline"
          className="text-white text-3xl p-10 bg-blue-600 border-blue-600"
          onClick={() =>
            window.open("https://forms.gle/2Tkt3FKqA5Mbe6tr6", "_blank")
          }
        >
          Sign up now!
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
