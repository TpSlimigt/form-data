'use client'

import Image from 'next/image'
import Button from '@form-data/components/Button'
import SubmitForm from '@form-data/components/SubmitForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SubmitForm></SubmitForm>
    </main>
  )
}
