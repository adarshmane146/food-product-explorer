import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByBarcode } from "../services/api";

function ProductDetail() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await getProductByBarcode(barcode);
    setProduct(data.product);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.product_name}</h2>

      <img src={product.image_url} width="250" />

      <h3>Ingredients</h3>
      <p>{product.ingredients_text}</p>

      <h3>Nutrition</h3>
      <p>Energy: {product.nutriments.energy}</p>
      <p>Fat: {product.nutriments.fat}</p>
      <p>Carbs: {product.nutriments.carbohydrates}</p>
      <p>Protein: {product.nutriments.proteins}</p>

      <h3>Labels</h3>
      <p>{product.labels}</p>
    </div>
  );
}

export default ProductDetail;