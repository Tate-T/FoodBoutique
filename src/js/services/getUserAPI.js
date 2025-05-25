export const getUserAPI = async (id) => {
  try {
    const response = await fetch(
      `https://682dfb9c746f8ca4a47b717c.mockapi.io/foodboutique/users/${id}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error while triing to get user:", error);
    return null; 
  }
};