export const imageURL = (path: string) =>
  `http://localhost:3000/uploads/${path}`;

export const openModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement).showModal();
};

export const closeModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement).close();
};
