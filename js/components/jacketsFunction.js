export const getExistingJacketsList = () => {
  const jackets = localStorage.getItem("jacketslist");

  if (!jackets) {
    return [];
  } else {
    return JSON.parse(jackets);
  }
};
