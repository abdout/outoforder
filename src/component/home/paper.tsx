import Link from "next/link";
import Title from "../atom/text/title";

const labels = [
  { lineOne: 'البيان', lineTwo: 'التأسيسي', link: '/paper' },
  { lineOne: 'المقدمات', lineTwo: 'والمقولات', link: '/path2' },
  { lineOne: 'السياسة', lineTwo: 'وبناء الدولة', link: '/path3' },
  { lineOne: 'التنمية والعدالة', lineTwo: ' الاجتماعية', link: '/path4' },
];
  
const Paper = () => {
  return (
    <div>
      <Title icon="system-uicons:paper" placeholder="أوراق الحركة"/>
      <div className="flex gap-8 pt-6" dir="rtl">
        {labels.map((label, index) => (
          <Link href={label.link} key={index} className="border-[1.5px] w-60 border-gray-500 p-8 justify-center items-center opacity-70 hover:opacity-100 hover:border-black hover:border-[1.5px] text-center">
            <p className="font-medium text-xl  leading-7">{label.lineOne}</p>
            <p className="font-medium  text-xl leading-7">{label.lineTwo}</p>
          </Link>
        ))}
      </div>
        <div className="flex gap-2 justify-center items-center pt-8">
          <span className="bg-black rounded-full w-4 h-4"></span>
          <span className="bg-gray-300 rounded-full w-4 h-4"></span>
          <span className="bg-gray-300 rounded-full w-4 h-4"></span>
          <span className="bg-gray-300 rounded-full w-4 h-4"></span>
          

        </div>
      </div>
    )
  }
  
  export default Paper