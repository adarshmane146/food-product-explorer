const BASE_URL = "https://world.openfoodfacts.org";

export const fetchProductsByCategory = async (category, page = 1) => {
  const res = await fetch(`${BASE_URL}/category/${category}.json?page=${page}`);
  return res.json();
};

export const searchProductsByName = async (name) => {
  const res = await fetch(
    `${BASE_URL}/cgi/search.pl?search_terms=${name}&json=true`
  );
  return res.json();
};

export const getProductByBarcode = async (barcode) => {
  const res = await fetch(`${BASE_URL}/api/v0/product/${barcode}.json`);
  return res.json();
};