import axios from "axios";

interface Location {
  District: string;
  State: string;
  Pincode: string;
}
export const getLocationByPin = (pin: string) => {
  return new Promise<Location>((resolve, reject) => {
    axios
      .get(`https://api.postalpincode.in/pincode/${pin}`)
      .then((response) => {
        if (response.data[0].Status !== "Success") {
          reject();
        }

        resolve(response.data[0].PostOffice[0]);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
