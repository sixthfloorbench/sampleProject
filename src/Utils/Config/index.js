import axios from "axios";
const token = "fakeExampleToken";

export default axios.create({
    baseURL: "https://sheetdb.io/api/v1/01p5f4wfjl81g", //API in Server
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});
