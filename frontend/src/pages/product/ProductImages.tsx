import { useState } from "react";
import { imageURL } from "../../lib/utils";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ProductImages = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useGSAP(() => {
    // TODO: Hard coded things
    if (window.innerWidth < 800) return;
    ScrollTrigger.create({
      trigger: "#product-container",
      start: "top 100px",
      end: "bottom 600x",
      pin: "#product-left",
      pinSpacing: true,
      markers: false,
      scrub: true,
    });
  }, []);

  return (
    <div
      className="flex h-auto w-full flex-col-reverse gap-5 lg:h-[500px] lg:w-1/2 lg:flex-row"
      id="product-left"
    >
      <div className="scrollbar-none h-32 w-full overflow-y-auto lg:h-full lg:w-32">
        {images.map((image, index) => (
          <div
            className={clsx(
              "inline-block aspect-square h-32 w-auto cursor-pointer overflow-hidden rounded bg-base-200 transition first:mt-0 hover:opacity-100 lg:mt-3 lg:h-auto",
              {
                "opacity-60": index !== imageIndex,
              },
            )}
            key={index}
            onClick={() => setImageIndex(index)}
          >
            <img src={imageURL(image)} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded bg-base-200">
        <img
          src={imageURL(images[imageIndex] || "")}
          className="aspect-auto h-full w-full"
        />
      </div>
    </div>
  );
};

export default ProductImages;
