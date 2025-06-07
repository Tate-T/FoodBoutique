export const getFilteredProducts = async (keyword, category, id , sort) => {
  try {
    return await fetch(
      `https://food-boutique.b.goit.study/api/products?keyword=${keyword}${sort}&category=${category}&page=${id}&limit=9`
    ).then((response) => response.json());
  } catch (e) {
    return e;
  }
};
