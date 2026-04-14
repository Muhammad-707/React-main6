

import i1 from "../assets/Group 73.png"
import i2 from "../assets/Group 85.png"
import i3 from "../assets/Group 86.png"
import i4 from "../assets/Group 87.png"
import i5 from "../assets/Group 88.png"


export default function ProductItem4(props) {
  const { item } = props;
  return (
    <div className="lg:w-[270px] w-[300px] flex-shrink-0 shadow shadow-[0_0_10px_lightgray]">
        <img src={item.img} alt="" />
        <div className="flex flex-col gap-3 justify-center text-center items-center p-[15px_20px]">
            <img src={i1} alt="" />
            <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
            <h1 className="text-[#1D6BDD] text-[30px] font-black">{item.price}</h1>
            <div className="flex items-center justify-between gap-2">
                <img src={i3} alt="" />
                <img src={i4} alt="" />
                <img src={i5} alt="" />
                <img src={i2} alt="" />
            </div>
        </div>
    </div>
  );
}