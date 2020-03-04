import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div className="h-container">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        className="h-carousel-container"
      >
        <div>
          <img
            src="https://resources.rocketz.com.br/bnrs/119/bnr_image/location_1_bc2f516363b3293578f77511d0149e69.jpg"
            alt="pc-1"
            height={184}
          />
        </div>

        <div>
          <img
            src="https://resources.rocketz.com.br/bnrs/118/bnr_image/location_1_e912fb0fba9e3a9bab3a531a67e476e5.jpg"
            alt="pc-2"
            height={184}
          />
        </div>

        <div>
          <img
            src="https://resources.rocketz.com.br/bnrs/112/bnr_image/location_1_b33e953c4c1681a0645ac85541dd767a.jpg"
            alt="pc-3"
            height={184}
          />
        </div>
      </Carousel>

      {/* Listagem */}
    </div>
  );
}
