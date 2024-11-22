import dynamic from 'next/dynamic'
import React from 'react'

const DynamicLandingPage = dynamic(() => import('../landing-page'), {
  ssr: false,
})

export default function Home() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <DynamicLandingPage />
    </React.Suspense>
  )
}

