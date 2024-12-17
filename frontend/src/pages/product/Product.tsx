import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../../lib/api/product.api";
import Loading from "../../components/misc/Loading";
import { useEffect, useState } from "react";
import { imageURL } from "../../lib/utils";
import clsx from "clsx";

const Product = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id!),
    enabled: id !== undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="dynamic-container min-h-screen pt-20">
      <section className="flex w-full gap-10">
        {/* Images */}
        <div className="flex h-[500px] gap-5">
          <div className="h-full w-32 overflow-y-auto">
            {data?.images.map((image, index) => (
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
                <img
                  src={imageURL(image)}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded bg-base-200">
            <img
              src={imageURL(data?.images[imageIndex] || "")}
              className="aspect-auto h-full w-full"
            />
          </div>
        </div>
        {/* Detailed */}
        <div className="h-full flex-1">
          <div>
            <h5 className="text-lg font-medium text-primary/70">
              {data?.category.title}
            </h5>
            <h2 className="text-2xl font-bold">{data?.title}</h2>
          </div>
          <div>
            <p className="mt-10 leading-[1.6] text-primary/80">
              {data?.description}
            </p>
          </div>
        </div>
      </section>
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Product;
