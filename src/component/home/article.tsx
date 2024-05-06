import { article } from '@/constant/article';
import { media } from '@/constant/media';
import Image from 'next/image'
import Link from 'next/link';
import Title from '../atom/text/title';

const Article = () => {
  return (
    <div>
      <Title icon="material-symbols-light:article-outline" placeholder="المقالات الجديدة"/>
      <div className="flex flex-col gap-12 pt-6" dir="rtl">
        {article.map((item, index) => (
          <Link href={`/article?index=${index}`} key={index}>
          <div key={index} className=" flex gap-4 items-center text-right">
            <Image
              src={item.image}
              alt={item.lineone}
              width={140}
              height={110}
            />
            <div className='flex flex-col gap-1'>
            <div className='flex gap-2 '>
            <p className="font-medium text-lg">{item.lineone}</p>
            <p className="font-medium  text-lg">{item.linetwo}</p>
            </div>
            <p className='text-sm'>{item.description}</p>
            <div className="flex gap-4">
              <p>
                {item.author}
                <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
                {item.date}
              </p>
            </div>

            </div>
            
            
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Article