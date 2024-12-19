import { useMutation, useQueryClient } from "@tanstack/react-query";
import Rating from "../../components/ui/Rating";
import { closeModal, openModal } from "../../lib/utils";
import { Review } from "../../types";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { deleteReview } from "../../lib/api/review.api";
import AlertDialog from "../../components/ui/AlertDialog";

interface Props {
  productId: string;
  hasReviewed?: boolean;
  userRating?: Review | null;
}

const UserReview = ({ productId, hasReviewed = false, userRating }: Props) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteReview,
  });

  const onDeleteReview = () => {
    deleteMutation.mutate(productId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["reviews"],
        });

        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
        closeModal(`${productId}-delete-review`);
      },
    });
  };

  return (
    <div>
      <div>
        {hasReviewed && userRating ? (
          <div>
            <div className="text-lg font-semibold text-primary">
              Your Review
            </div>
            <div className="mt-3 flex items-center gap-4">
              <Rating
                rating={userRating.rating}
                id={`user-rating-${productId}`}
                size="md"
              />
              <span className="text-lg font-semibold text-primary">
                {userRating.shortTitle}
              </span>
            </div>
            <div className="mt-2">{userRating.review}</div>
            <div className="mt-5 flex gap-4">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => openModal(`${productId}-open-form`)}
              >
                <FaRegEdit /> Edit
              </button>
              <button
                className="btn btn-error btn-sm"
                onClick={() => openModal(`${productId}-delete-review`)}
              >
                <FaRegTrashAlt />
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-end">
            <button
              className="btn btn-primary"
              onClick={() => openModal(`${productId}-open-form`)}
            >
              Post your review
            </button>
          </div>
        )}
      </div>
      <div className="divider" />
      <div>
        <div className="text-lg font-semibold text-primary">
          Look what others saying.
        </div>
      </div>
      <AlertDialog
        title="Delete comfirmation"
        id={`${productId}-delete-review`}
        successHandler={onDeleteReview}
        buttonTitle="Delete"
        isLoading={deleteMutation.isPending}
      >
        Are you sure you want to delete your review? This action cannot be
        undone.
      </AlertDialog>
    </div>
  );
};

export default UserReview;
