"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const AboutUs = () => {
  const [newYear, setNewYear] = useState(false);

  // A consistent duration for all "new year" animations (in milliseconds)
  const animationDuration = 3000;

  return (
    // The translate properties are unchanged
    <div className="bg-black w-screen -translate-x-[calc(50vw-28rem)] max-lg:-translate-x-4">
      <div className="relative h-[calc(100vh-5rem)]">
        <div
          className="absolute inset-0 bg-swirl-new bg-no-repeat bg-cover"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 text-white">
          <div className="relative w-80 h-[100px] max-sm:w-60">
            <Image
              src={"/assets/logo-new.png"}
              alt="GAPC 2027 Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="text-white text-center block font-jbMono text-9xl max-sm:text-5xl backdrop-blur-sm">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .callFunction(({ elements: { cursor } }) => {
                    cursor.style.display = "inline-block";
                  })
                  .changeDelay(70)
                  .changeDeleteSpeed(70)
                  .typeString("GAPC 202")
                  .typeString(
                    "<span class='text-[var(--gapc-color-new)]'>6</span>",
                  )
                  .pauseFor(2000)
                  .deleteChars(1)
                  .typeString(
                    "<span class='text-[var(--gapc-color-new)]'>7</span>",
                  )
                  .pauseFor(200)
                  .callFunction(({ elements: { cursor } }) => {
                    cursor.style.animation = "none";
                    cursor.style.transition = "opacity 2s ease-out";
                    cursor.style.opacity = "0";

                    setTimeout(() => {
                      cursor.style.display = "none";
                    }, 300);
                  })
                  .callFunction(() => {
                    setNewYear(true);
                  })
                  .start();
              }}
            />
          </span>

          {/* Footer text remains the same */}
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

          {/* Button with smoother color transition */}
          <Button
            variant="outline"
            className={`text-white text-3xl p-10 transition-colors ease-in-out cursor-default opacity-80 ${
              newYear
                ? "bg-[var(--gapc-color-new-dark)] border-[var(--gapc-color-new-dark)]"
                : "bg-[var(--gapc-color-dark)] border-[var(--gapc-color-dark)]"
            }`}
            style={{ transitionDuration: `${animationDuration}ms` }}
          >
            Sign-ups opening soon!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
