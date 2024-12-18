export const imageURL = (path: string) =>
  `http://localhost:3000/uploads/${path}`;

export const openModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement).showModal();
};

export const closeModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement).close();
};

export const formatDate = (date: Date | string) => {
  const currentDate = typeof date === "string" ? new Date(date) : date;

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  // Convert to 12-hour format
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Adjust hours for 12-hour format, keeping 12 as 12 instead of 0
  const formattedHours = hours.toString().padStart(2, "0");

  const formattedDate = `${day}-${month}-${year} ${formattedHours}:${minutes}:${seconds} ${period}`;

  return formattedDate;
};
