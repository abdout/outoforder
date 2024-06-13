import { Button } from "../../ui/button";
import Link from "next/link";

const Hero = () => {
    return (
         <div className="flex flex-col justify-center space-y-4" style={{ height: 'calc(100vh - 80px)' }}>
            <p className="text-xl font-normal">المجتمع أولاً</p>
            <h1 className="text-4xl font-extrabold tracking-wide -mt-2">
                الحركة الوطنية للبناء والتنمية
            </h1>
            <p className=" w-[50rem] text-xl font-extralight tracking-wide leading-[30px] pb-6">
                هي حركة إصلاح اجتماعي وسياسي شامل، تقيم رؤاها وتستقي قيمها من هدي <strong className="font-semibold">الدين</strong><br />
                وكريم شيم السودانيين، وتقوم على إرث المسلمين في السودان خاصة، وإرث شعب السودان<br />
                عامة، وتجربة الأمة المسلمة والأحرار في العالم،
            </p>
            <Link href="/register">
            <Button size='lg' className="bg-yellow-400 text-black w-44 h-12 text-lg hover:bg-yellow-500">يدك معانا</Button>
            </Link>
        </div>

    )
}

export default Hero;