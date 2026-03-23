"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { useState } from "react";
// import Typewriter from "typewriter-effect";

const AboutUs = () => {
  const newYear = true;

  // A consistent duration for all "new year" animations (in milliseconds)
  const animationDuration = 3000;

  return (
    // The translate properties are unchanged
    <div className="bg-black w-screen -translate-x-[calc(50vw-28rem)] max-lg:-translate-x-4">
      <div className="relative h-[calc(100vh-5rem)]">
        {/* Original background swirl (visible when newYear is false) */}
        <div
          className={`absolute inset-0 bg-swirl bg-no-repeat bg-cover transition-opacity ease-in-out ${
            newYear ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDuration: `${animationDuration}ms` }}
          aria-hidden="true"
        />
        {/* New background swirl (visible when newYear is true) */}
        <div
          className={`absolute inset-0 bg-swirl-new bg-no-repeat bg-cover transition-opacity ease-in-out ${
            newYear ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${animationDuration}ms` }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 text-white">
          {/* Logo container for smooth crossfade effect */}
          <div className="relative w-80 h-[100px] max-sm:w-60">
            {/* Original logo (visible when newYear is false) */}
            <Image
              src={"/assets/logo.png"}
              alt="GAPC 2025 Logo"
              fill
              priority
              className={`object-contain transition-opacity ease-in-out ${
                newYear ? "opacity-0" : "opacity-100"
              }`}
              style={{ transitionDuration: `${animationDuration}ms` }}
            />
            {/* New logo (visible when newYear is true) */}
            <Image
              src={"/assets/logo-new.png"}
              alt="GAPC 2026 Logo"
              fill
              priority
              className={`object-contain transition-opacity ease-in-out ${
                newYear ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDuration: `${animationDuration}ms` }}
            />
          </div>

          <span className="text-white text-center block font-jbMono text-9xl max-sm:text-5xl backdrop-blur-sm">
            <span>
              GAPC <span className="text-[var(--gapc-color-new)]">2026</span>
            </span>

            {false && (
              <>
                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .callFunction(({ elements: { cursor } }) => {
                        cursor.style.display = "inline-block";
                      })
                      .changeDelay(70)
                      .changeDeleteSpeed(70)
                      .typeString("GAPC ")
                      .typeString(
                        "<span class='text-[var(--gapc-color)]'>2025</span>",
                      )
                      .pauseFor(2000)
                      .deleteChars(4)
                      .typeString(
                        "<span class='text-[var(--gapc-color-new)]'>2026</span>",
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
                /> */}
              </>
            )}
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
            className={`text-white text-3xl p-10 transition-colors ease-in-out ${
              newYear
                ? "bg-[var(--gapc-color-new-dark)] border-[var(--gapc-color-new-dark)]"
                : "bg-[var(--gapc-color-dark)] border-[var(--gapc-color-dark)]"
            }`}
            style={{ transitionDuration: `${animationDuration}ms` }}
            onClick={() =>
              window.open("https://forms.gle/jqihByqDhu2njCc97", "_blank")
            }
          >
            Sign up!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
