export const getExistingJacketsList = () => {
  const jackets = localStorage.getItem("cart");

  if (!jackets) {
    return [];
  } else {
    return JSON.parse(jackets);
  }
};
