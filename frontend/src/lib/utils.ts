export const imageURL = (path: string) =>
  `http://localhost:3000/uploads/${path}`;

export const reviewFormTrigger = () => {
  (document.getElementById("review-form") as HTMLDialogElement).showModal();
};

export const closeReviewForm = () => {
  (document.getElementById("review-form") as HTMLDialogElement).close();
};
