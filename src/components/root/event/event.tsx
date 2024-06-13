import Title from "@/components/atom/title"


const Event = () => {
  return (
    <div>
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة"/>  
      <h5 className='pt-6'>المؤتمر العام الاول للحركة الوطنية</h5>
      <div className='flex gap-4 pt-2'>
        <p>14 ابريل 2024 - </p>
        <p>قاعة الصداقة</p>
    </div>
    <h5 className='pt-6'>بث مباشر حول المقاومة الشعبية</h5>
      <div className='flex gap-4 pt-2'>
        <p>14 ابريل 2024 - </p>
        <p> صفحة المقاومة الشعبية في الفيسبوك</p>
    </div>
    </div>
  )
}

export default Event