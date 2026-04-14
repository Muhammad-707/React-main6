
import i1 from "../assets/Group 42.png"

import { Phone, ShoppingCart } from "lucide-react";

export default function Header() {
    return (
        <header className="py-3">
            <div className="max-w-[1140px] mx-auto flex justify-between lg:px-0 px-3">
                <div className="flex gap-5 items-center">
                    <img className="lg:w-fit w-28 lg:ml-0 ml-2" src={i1} alt="" />
                    <p className="border border-[#707070] h-[20px] "></p>
                    <p className="text-[#707070]">От завода без посредников</p>
                </div>
                <div className="flex items-center gap-8">
                    <p className="text-[#0A61DE] text-[18px] font-normal lg:flex hidden">Доставка</p>
                    <p className="text-[#0A61DE] text-[18px] font-normal lg:flex hidden">Оплата</p>
                    <p className="text-[#0A61DE] text-[18px] font-normal lg:flex hidden">Контакты</p>
                    <div className="flex gap-2 items-center">
                        <Phone color="#0A61DE" size={18}/>
                        <p className="text-[25px] font-bold lg:flex hidden">8-800-550-01-09</p>
                    </div>
                    <div className=" lg:flex hidden">
                        <ShoppingCart color="#0A61DE" size={22}/>
                    </div>
                </div>
            </div>
        </header>
    );
}