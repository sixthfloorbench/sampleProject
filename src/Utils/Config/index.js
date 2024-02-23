import axios from "axios";
const token = "fakeExampleToken";

export default axios.create({
  baseURL:
    "https://script.google.com/macros/s/AKfycbzKJ42O3NhHP52Pfb91Q3p_04n-P_DiQbjCmTIWpChqTKrJErYadLFzVHSeAV4nuQ91", //   headers: {
  //     "Content-type": "application/json",
  //     // Authorization: `Bearer ${token}`,
  //   },
});
