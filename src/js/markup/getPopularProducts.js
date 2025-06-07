export const getPopularProducts = async () => {
  try {
    return await fetch(
      "https://food-boutique.b.goit.study/api/products/popular"
    ).then((response) => response.json());
  } catch (e) {
    return e;
  }
};
