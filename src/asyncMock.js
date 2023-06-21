import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://backend-ecommerce-production-120d.up.railway.app/api/products"
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(
      `https://backend-ecommerce-production-120d.up.railway.app/api/products/${id}`
    );

    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const filterCategory = async (arr, categoriaId) => {
  const newArr = await arr.filter((item) => item.categoria_id === categoriaId);
  return newArr;
};
