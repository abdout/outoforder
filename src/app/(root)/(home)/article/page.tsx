'use client';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import More from '@/component/article/more';
import { article } from '@/constant/article';
import React, { Suspense } from 'react';

const ArticlePage = () => {
  const searchParams = useSearchParams()

  const index = searchParams.get('index')

  if (index === null) {
    return <p>Index not found</p>
  }

  const item = article[parseInt(index)]
  const BodyComponent = React.lazy(() => import(`@/component/home/body${index}`));

  return (
    <div className='flex flex-col pt-6 pr-32' dir='rtl'>
      <div className='flex gap-2 text-4xl pb-2'>
        <h1 className='text-2xl'>{item.lineone}</h1>
        <h1 className='text-2xl'>{item.linetwo}</h1>
      </div>
      <p>{item.description}</p>
      <div className='flex gap-4 items-center py-6'>
        <div className='rounded-full overflow-hidden border w-12 h-12'>
          <Image
            src={item.authorImage}
            alt={item.lineone}
            width={45}
            height={45}
            objectFit="contain"
          />
        </div>
        <div className='flex flex-col'>
          <p>{item.author}</p>
          <p>{item.date}</p>
        </div>
      </div>
      <hr className="border-t border-gray-500 mb-5 w-[700px]" />
      <Image
        src={item.image}
        alt={item.lineone}
        width={700}
        height={330}
        objectFit="contain"
      />
      <div className='flex flex-col space-y-6 pt-8 ml-[9rem]'>
        <Suspense fallback={<div>Loading...</div>}>
          <BodyComponent />
        </Suspense>
        <More />
      </div>
    </div>
  )
}

export default ArticlePage