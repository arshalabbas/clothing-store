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
    ScrollTrigger.create({
      trigger: "#product-container",
      start: "top 100px",
      end: "bottom 600x",
      pin: "#product-left",
      pinSpacing: true,
      markers: true,
      scrub: true,
    });
  }, []);

  return (
    <div className="flex h-[500px] w-1/2 gap-5" id="product-left">
      <div className="scrollbar-none h-full w-32 overflow-y-auto">
        {images.map((image, index) => (
          <div
            className={clsx(
              "mt-3 aspect-square w-full cursor-pointer overflow-hidden rounded bg-base-200 transition first:mt-0 hover:opacity-100",
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
