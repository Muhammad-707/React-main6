

import ProductItem3 from "./productItem3"

import i1 from "../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (8).png"
import i2 from "../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (9).png"
import i3 from "../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (10).png"
import i4 from "../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (11).png"


const product = [
    {
        id:1,
        img: i1,
        price: "2 491 ₽/шт."
    },
    {
        id:2,
        img: i2,
        price: "3 150 ₽/шт."
    },
    {
        id:3,
        img: i3,
        price: "1 890 ₽/шт."
    },
    {
        id:4,
        img: i4,
        price: "4 250 ₽/шт."
    }
]



export default function ProductList3() {
  return (
    <div className="flex overflow-auto gap-5">
        {product.map((item) => (
            <ProductItem3 key={item.id} item={item}/>
        ))}
    </div>
  )
}
