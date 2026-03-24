import { Link } from "react-router-dom";

function ProductCard({product}){

  return(

    <div className="card">

      <Link to={`/product/${product.code}`}>

        <img src={product.image_url} />

        <h3>{product.product_name}</h3>

        <p><b>Category:</b> {product.categories?.split(",")[0]}</p>

        <p>
          <b>Ingredients:</b>
          {product.ingredients_text?.slice(0,60)}...
        </p>

        <p>
          <b>Nutrition Grade:</b>
          {product.nutrition_grade_fr?.toUpperCase()}
        </p>

      </Link>

    </div>

  )

}

export default ProductCard