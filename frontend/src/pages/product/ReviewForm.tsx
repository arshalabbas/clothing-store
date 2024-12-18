import TextArea from "../../components/form/TextArea";
import TextInput from "../../components/form/TextInput";
import Rating from "../../components/ui/Rating";
import { closeReviewForm, imageURL } from "../../lib/utils";
import { Controller, useForm } from "react-hook-form";
import { reviewSchema, ReviewSchema } from "../../lib/schemas/review.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  image: string;
  title: string;
}

const ReviewForm = ({ image, title }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewSchema>({
    defaultValues: {
      rating: 0,
      shortTitle: "",
      review: "",
    },
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = (values: ReviewSchema) => {
    // TODO: Post and Update Review
    console.log(values);
  };

  return (
    <dialog id={"review-form"} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="flex gap-5">
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
                onClick={closeReviewForm}
              >
                Discard
              </button>

              <button type="submit" className="btn btn-primary">
                Post Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ReviewForm;
