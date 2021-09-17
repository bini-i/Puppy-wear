const CategoryAPI = (() => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const getCategory = () => new Promise((resolve, reject) => {
    fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => resolve(data.categories))
      .catch((error) => reject(error));
  });

  return getCategory;
})();

export default CategoryAPI;
