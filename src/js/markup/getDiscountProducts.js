export const getDiscountProducts = async () => {
    try {
      return await fetch(
        `https://food-boutique.b.goit.study/api/products/discount`
      ).then((response) => response.json());
    } catch (e) {
      return e;
    }
  };