import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="bg-black w-screen -translate-x-[calc(50vw-28rem)] max-lg:-translate-x-4">
      <div
        className="h-[calc(100vh-5rem)] bg-swirl bg-no-repeat flex flex-col gap-8 justify-center items-center text-white"
        style={{ backgroundSize: "cover" }}
      >
        <img
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
            href="#fcg"
            className="underline decoration-dotted underline-offset-4 ml-2"
          >
            FCG
          </a>
        </span>
        <span className="text-white text-center block font-jbMono text-lg w-[600px] max-w-[calc(100vw-4rem)] backdrop-blur-sm">
          GAPC is a programming contest held in Groningen. Teams will have 4
          hours to solve algorithmic problems and compete for the grand prize.
        </span>
        <Link href="#read-more">
          <Button variant="outline" className="text-black">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
