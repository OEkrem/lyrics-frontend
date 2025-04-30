

import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold'>Welcome to Lyrics Finder</h1>
            <p className='mt-4 text-lg'>Find your favorite lyrics easily!</p>
        </div>
    </MainLayout>
  )
}
