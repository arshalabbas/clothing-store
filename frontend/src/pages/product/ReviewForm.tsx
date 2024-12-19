import TextArea from "../../components/form/TextArea";
import TextInput from "../../components/form/TextInput";
import Rating from "../../components/ui/Rating";
import { closeModal, imageURL } from "../../lib/utils";
import { Controller, useForm } from "react-hook-form";
import { reviewSchema, ReviewSchema } from "../../lib/schemas/review.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserReview,
  postReview,
  updateReview,
} from "../../lib/api/review.api";
import Loading from "../../components/misc/Loading";
import { useEffect } from "react";

interface Props {
  image: string;
  title: string;
  productId: string;
  hasReviewed?: boolean;
  isLoaded: boolean;
}

const ReviewForm = ({
  image,
  title,
  productId,
  hasReviewed,
  isLoaded,
}: Props) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["reviews", "user", productId],
    queryFn: () => getUserReview(productId),
    enabled: isLoaded,
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReviewSchema>({
    defaultValues: {
      rating: 0,
      shortTitle: "",
      review: "",
    },
    resolver: zodResolver(reviewSchema),
  });

  const postReviewMutation = useMutation({
    mutationFn: postReview,
  });

  const updateReviewMutation = useMutation({
    mutationFn: updateReview,
  });

  const onSubmit = (values: ReviewSchema) => {
    const variables = { productId, ...values };
    const options = {
      onSuccess: () => {
        closeModal(`${productId}-open-form`);
        queryClient.invalidateQueries({
          queryKey: ["reviews"],
        });
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
      },
    };

    if (hasReviewed) {
      updateReviewMutation.mutate(variables, options);
    } else {
      postReviewMutation.mutate(variables, options);
    }
  };

  useEffect(() => {
    if (!data) return;
    setValue("rating", data.rating);
    setValue("shortTitle", data.shortTitle);
    setValue("review", data.review);
  }, [data, setValue, productId]);

  if (productId === null) return null;

  return (
    <dialog id={`${productId}-open-form`} className="modal">
      <div className="modal-box w-full max-w-5xl md:w-11/12">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Product Overview */}
          <div>
            <div className="flex w-[200px] flex-col gap-3 p-2">
              <img
                src={imageURL(image)}
                className="aspect-square w-full rounded object-cover"
              />
              <span className="text-lg font-medium text-primary">{title}</span>
            </div>
          </div>
          <div className="divider divider-vertical" />

          {/* Form */}
          <form
            className="flex w-full flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-lg font-bold">Write Review</h3>

            <label>Your rating</label>
            <Controller
              control={control}
              name="rating"
              render={({ field: { value, onChange } }) => (
                <>
                  <Rating
                    id={"user-select"}
                    rating={value}
                    onChange={onChange}
                    disabled={false}
                    size="md"
                  />
                  {errors.rating && (
                    <div className="text-red-500">{errors.rating.message}</div>
                  )}
                </>
              )}
            />
            <TextInput
              label="Short Title"
              placeholder="Worth buying"
              error={errors.shortTitle?.message}
              {...register("shortTitle")}
            />
            <TextArea
              label="Review"
              placeholder="Your review here"
              error={errors.review?.message}
              {...register("review")}
            />

            <div className="flex w-full justify-end gap-4">
              <button
                className="btn btn-outline btn-error"
                type="button"
                onClick={() => closeModal(`${productId}-open-form`)}
              >
                Discard
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  postReviewMutation.isPending || updateReviewMutation.isPending
                }
              >
                {(postReviewMutation.isPending ||
                  updateReviewMutation.isPending) && (
                  <span className="loading loading-spinner" />
                )}
                {hasReviewed ? "Update" : "Post"} Review
              </button>
            </div>
          </form>
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </dialog>
  );
};

export default ReviewForm;
