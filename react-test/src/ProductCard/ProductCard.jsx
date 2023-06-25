import './ProductCard.css';

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </div>
    );
}

export default ProductCard;