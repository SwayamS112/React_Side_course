// export default function Product()
import { useState } from 'react'
import Productitem from '../components/Productitem'

function Product(){

    let [hero,setHero] = useState([
{name:"Thor",age:213},
{name:"IronMan",age:45},
{name:"SpiderMan",age:20}
    ]);

    let [car,setCar] = useState([
        {carName:"scorss",price:"109990"},
        {carName:"santro",price:"209990"},
        {carName:"swift",price:"709990"},
    ]);
    
let [products,setProducts] = useState([
    {
        name:"Samsung S25",
        price:333333,
        imageUrl:"https://images.pexels.com/photos/30466740/pexels-photo-30466740/free-photo-of-elegant-smartphone-beside-potted-plants-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         },

         {
            name:"Samsung flip",
            price:444444,
            imageUrl:"https://images.pexels.com/photos/4716356/pexels-photo-4716356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
         },

         {
            name:"Samsung S7 Edge",
            price:233344,
             imageUrl:"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"   
         }
        ])

    return(
        <>
        <div className="products">

         {
//like in maping it returns 3 things element,index,array 
         hero.map((ele)=>{ //ele is just a variable ele means element
            return (
                <div>
                <h1>{ele.name}</h1>
                <p>{`age is ${ele.age}`}</p>
                </div>
            )
         })
         }

         {
            car.map((ele)=>{
                return(
                    <div>
                        <h1>{ele.carName}</h1>
                        <p>{`this is price ${ele.price}`}</p>
                    </div>
                )
            })
         }
        
           <Productitem name="Iphone 15" price={59999}/>
           <Productitem name="Samsung s23" price={49999}/>
           <Productitem name="Iphone 16 pro max" price={89999}/>
           <Productitem name ="Samsung s25 ultra" price={139999}/>
        {
            products.map((product)=>{
                return(
                    <div>
                        <Productitem name={product.name} price={product.price} imageUrl={product.imageUrl}/>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Product