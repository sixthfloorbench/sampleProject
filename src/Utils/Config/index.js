import axios from "axios";
const token = "fakeExampleToken";

export default axios.create({
  baseURL:
    "https://script.google.com/macros/s/AKfycbxSszAohnfYrpL1PsXoB_nr0ALAjCVjT7y-7F4b2nf_WWOHgCCXtBuBmY6ssaU1HIjE",
  headers: {
    "Content-type": "application/json",
    //     // Authorization: `Bearer ${token}`,
  },
});
