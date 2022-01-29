import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID QXYW4IfuIfTyGHnvbinIgDcS-BKMoE-zGZAXPFr_-pg",
  },
});
