import { useState } from "react";
import { imageURL } from "../../lib/utils";
import clsx from "clsx";

const ProductImages = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex h-[500px] gap-5">
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
