import React from 'react'
import Detail from '@/components/Detail/Detail'
const DetailPage = async ({searchParams}) => {
  return (
    <div className='desktop:h-screen w-full'>
      <Detail />
    </div>
  )
}

export default DetailPage