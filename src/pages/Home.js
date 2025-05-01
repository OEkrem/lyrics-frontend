

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import LyricsFinder from '../components/LyricsFinder/LyricsFinder';

export default function Home() {

  return (
    <MainLayout>
      <div>
        <LyricsFinder/>
      </div>
    </MainLayout>
  )
}
