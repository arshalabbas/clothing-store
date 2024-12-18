export const imageURL = (path: string) =>
  `http://localhost:3000/uploads/${path}`;

export const reviewFormTrigger = (id: string) => {
  (
    document.getElementById(`review-form-${id}`) as HTMLDialogElement
  ).showModal();
};

export const closeReviewForm = (id: string) => {
  (document.getElementById(`review-form-${id}`) as HTMLDialogElement).close();
};
