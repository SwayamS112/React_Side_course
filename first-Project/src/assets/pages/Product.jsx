// export default function Product()
import Productitem from '../../../components/Productitem'

function Product(){
    return(
        <>
        <div className="products">
           <Productitem name="Iphone 15" price={59999}/>
           <Productitem name="Samsung s23" price={49999}/>
           <Productitem name="Iphone 16 pro max" price={89999}/>
           <Productitem name ="Samsung s25 ultra" price={139999}/>
        </div>
        </>
    )
}
export default Product