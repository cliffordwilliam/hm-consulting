"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image
          src="/hero-bg.jpg"
          alt="..."
          width={1024}
          height={1024}
          priority
        />
        <Image src="/hero.webp" alt="..." width={1024} height={1024} priority />
        <Image
          src="/office-long-1.png"
          alt="..."
          width={1024}
          height={1024}
          priority
        />
        <Image
          src="/office-long-2.png"
          alt="..."
          width={1024}
          height={1024}
          priority
        />
      </Carousel>
    </div>
  );
}
