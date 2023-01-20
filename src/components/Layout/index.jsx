import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const index = ({children}) => {
  return (
    <section className='flex pt-5'>
        <Sidebar />
        <div className='pl-[100px]'>
            <Header />
            <main className=''>{children}</main>
        </div>
    </section>
  )
}

export default index