import React from 'react'
import Title from '../atom/text/title'

const Event = () => {
  return (
    <div dir='rtl'>
      <Title icon="material-symbols-light:event-outline" placeholder="الاحداث القادمة"/>  
      <h3 className='pt-6'>المؤتمر العام الاول للحركة الوطنية</h3>
      <div className='flex gap-4 pt-4'>
        <h4>14 ابريل 2024 - </h4>
        <h4>قاعة الصداقة</h4>
    </div>
    <h3 className='pt-6'>بث مباشر حول المقاومة الشعبية</h3>
      <div className='flex gap-4 pt-4'>
        <h4>14 ابريل 2024 - </h4>
        <h4> صفحة المقاومة الشعبية في الفيسبوك</h4>
    </div>
    </div>
  )
}

export default Event