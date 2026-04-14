
import i1 from "../assets/Group 43.png"
import i2 from "../assets/Group 7.png"
import i4 from "../assets/Vector (14).png"
import i5 from "../assets/Vector (15).png"
import i6 from "../assets/Group 79 (1).png"
import i7 from "../assets/Group 80 (1).png"

export default function Footer() {
    return (
        <footer className="text-[#C7C7C7] bg-[#1E2126] py-12 lg:px-0 px-5">
            <div className="max-w-[1140px] mx-auto flex lg:flex-row flex-col justify-between lg:gap-0 gap-5">
                <div className="flex flex-col gap-10">
                    <img className="w-fit" src={i1} alt="" />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-white text-[25px] font-medium">8-800-550-01-09</h1>
                        <p>postav.irk@mail.ru</p>
                        <img className="w-fit" src={i2} alt="" />
                        <p className="text-[#707070]">© 2023 все права защищены</p>
                    </div>
                </div>
                <h1 className="border border-[#707070]"></h1>
                <div className="flex lg:flex-row flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-white text-[20px] font-medium">Информация</h1>
                        <div className="flex flex-col gap-7">
                            <p>Оплата</p>
                            <p>Доставка</p>
                            <p>Политика обработки персональных данных</p>
                            <p>Согласие на обработку персональных данных</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h1 className="text-white text-[20px] font-medium">Центральный офис и склад</h1>
                        <div className="flex flex-col gap-7">
                            <div className="flex items-center gap-2">
                                <img src={i4} alt="" />
                                <p>г. Иркутск ул. Ракитная стр 4 корп 11</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={i5} alt="" />
                                <p>8-800-550-01-09</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={i6} alt="" />
                                <p>Режим работы: Пн-Пт с 9:00 до 18:00, Сб с 9:00 до 14:00</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={i7} alt="" />
                                <p>Региональные склады</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
