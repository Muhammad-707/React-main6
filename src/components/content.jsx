
import Button from "./button"
import ProductList from "../productList"
import ProductList2 from "./productList2"
import ProductList3 from "./productList3"
import ProductList4 from "./productList4"

import i1 from "../assets/Group 61.png"
import i2 from "../assets/Group 64.png"
import i5 from "../assets/Vector (13).png"
import i6 from "../assets/йййй 1.png"
import i7 from "../assets/tour-1 1.png"
import i28 from "../assets/Rectangle 77.png"


export default function Content() {
    return (
        <>
            <div className="main1 bg-[#EDEDED] py-3">
                <div className="max-w-[1140px] mx-auto flex justify-between">
                    <button className="bg-[#167FFE] lg:relative lg:top-0 absolute top-40 lg:left-0 left-3 text-white text-[18px] font-normal h-[40px] flex items-center justify-center gap-5 p-[0_30px]"><img src={i1} alt="" /> Каталог</button>
                    <div className="lg:w-[800px] h-[40px] w-[320px] m-auto border border-gray-400 bg-white flex items-center justify-between">
                        <input className="font-normal pl-3 outline-none border-none w-200" type="text" placeholder="Поиск" />
                        <div>
                            <img className="lg:w-[40px] w-[114px]" src={i2} alt="" />
                        </div>
                    </div>
                    <div className="lg:flex hidden h-[40px] items-center gap-2">
                        <img className="h-[20px]" src={i5} alt="" />
                        <select>
                            <option>Иркутск</option>
                            <option>Иркутск</option>
                            <option>Иркутск</option>
                            <option>Иркутск</option>
                            <option>Иркутск</option>
                            <option>Иркутск</option>
                        </select>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${i7})` }} className="main2 bg-cover bg-center h-[730px] lg:h-[600px]">
                <div style={{ backgroundImage: `url(${i28})` }} className="bg-cover bg-center h-[730px]  lg:h-[600px] text-white">
                    <div className="max-w-[1140px] mx-auto flex lg:flex-row flex-col items-center lg:gap-0 gap-10 justify-between pt-28">
                        <div className="flex flex-col gap-5">
                            <h1 className="lg:text-[50px] text-[30px] font-normal">Новинка в России</h1>
                            <p className="lg:text-[30px] font-normal lg:p-[0_200px_0_0]">Север - теплоизоляция для сурового климата</p>
                            <div className="flex flex-col gap-5 lg:relative absolute lg:left-0 lg:top-0 top-[620px] ">
                                <h1 className="text-[40px] font-black">от 850 ₽ за 3м2</h1>
                                <Button>Подробнее</Button>
                            </div>
                        </div>
                        <div>
                            <img className="w-[850px]" src={i6} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="main3 max-w-[1140px] mx-auto my-20">
                <div className="lg:ml-0 lg:mr-0 ml-5 mr-5">
                    <div className="flex justify-between items-center">
                        <h1 className="lg:text-[50px] text-[25px] font-normal">Теплоизоляция</h1>
                            <Button>Смотреть все</Button>
                    </div>
                    <div className="my-10">
                        <ProductList />
                    </div>
                </div>
            </div>

            <hr className="max-w-[1140px] mx-auto" />

            <div className="main4 max-w-[1140px] mx-auto my-20">
                <div className="lg:ml-0 lg:mr-0 ml-5 mr-5">
                    <div className="flex justify-between items-center">
                        <h1 className="lg:text-[50px] text-[25px] font-normal">Строительные блоки</h1>
                        <Button>Смотреть все</Button>
                    </div>
                    <div className="my-10">
                        <ProductList2 />
                    </div>
                </div>
            </div>

            <hr className="max-w-[1140px] mx-auto" />

            <div className="main5 max-w-[1140px] mx-auto my-20">
                <div className="lg:ml-0 lg:mr-0 ml-5 mr-5">
                    <div className="flex justify-between items-center">
                        <h1 className="lg:text-[50px] text-[25px] font-normal">Листовые материалы</h1>
                        <Button>Смотреть все</Button>
                    </div>
                    <div className="my-10">
                        <ProductList3 />
                    </div>
                </div>
            </div>

            <hr className="max-w-[1140px] mx-auto" />


            <div className="main6 max-w-[1140px] mx-auto my-20">
                <div className="lg:ml-0 lg:mr-0 ml-5 mr-5">
                    <div className="flex justify-between items-center">
                        <h1 className="lg:text-[50px] text-[25px] font-normal">Кровля и водосток</h1>
                        <Button>Смотреть все</Button>
                    </div>
                    <div className="my-10">
                        <ProductList4 />
                    </div>
                </div>
            </div>

            <hr className="max-w-[1140px] mx-auto" />
        </>
    )
}
