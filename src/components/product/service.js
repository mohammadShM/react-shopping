import axios from "axios";

const apiAddress = "http://localhost:5000/products/";

export const productService = {
   getProducts: (q = "") => {
      return axios.get(apiAddress + q);
   },
   getProductById: (id) => {
      return axios.get(apiAddress + id);
   },
   addComment: (productId, comment) => {
      return axios.post(apiAddress + productId + "/comments", comment);
   },
   getComments: (productId) => {
      return axios.get(apiAddress + productId + "/comments");
   },
};

export const HELPER_ADDRESS_FOR_IMG = process.env.PUBLIC_URL;
