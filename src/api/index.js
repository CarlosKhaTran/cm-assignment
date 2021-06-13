const getPremiumRecipeCardData = async () => {
  try {
    const response = await fetch(
      "https://60c10ba2b8d367001755666e.mockapi.io/recipe/1",
      {
        method: "GET"
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export default getPremiumRecipeCardData;
