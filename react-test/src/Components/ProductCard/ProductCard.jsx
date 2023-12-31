import AddToCart from '../AddToCart';
import Rating from '../Rating';
import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddToCart'

function ProductCard({ product }) {
    return (
        <div className="ProductCard">
            <h3>{product.title}</h3>
            <p>{product.price.currency} {product.price.value}</p>
            <Rating rating={product.rating.value} maxRating={5} size={1} />
            <AddToCart 
                product={product}
            />
            <ReduxAddToCart
                product={product} 
            />
        </div>
    );
}

export default ProductCard;