function Productitem({name,price,imageUrl}){
    return(
<>
<div className="productitem">
    <img className="product-img" src={imageUrl}/>
    <h1>{name}</h1>
    <h3>{price}</h3>
</div>
</>
)
}
export default Productitem