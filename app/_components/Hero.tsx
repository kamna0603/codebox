import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <Image
        src={"/hero.gif"}
        alt={"hero"}
        width={1000}
        height={1000}
        className="w-full h-140 object-cover absolute inset-0"
      />
      {/* {h-full} */}

      <div className="absolute w-full flex flex-col items-center mt-25">
        <h2
          className="font-bold text-6xl font-game"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000,2px -2px 0 #000 ,-2px 2px 0 #000",
          }}
        >
          Start Your
        </h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-500"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000,2px -2px 0 #000 ,-2px 2px 0 #000",
          }}
        >
          Coding Adventure
        </h2>

        <h2
          className="mt-5 font-game text-3xl"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000,2px -2px 0 #000 ,-2px 2px 0 #000",
          }}
        >
          Beginner Friendly Coding Courses and Projects
        </h2>
        <Button className="font-game text-2xl p-5 mt-5" variant={"pixel"}>
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default Hero;
