import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className='max-w-2xl mb-6 bg-zinc-300 dark:bg-zinc-900 text-black dark:text-white rounded-xl shadow-lg px-6 py-8 text-center'>
      <h1 className='text-2xl md:text-3xl font-bold leading-tight'>Let&apos;s create Something meaningful-work that stand out</h1>
      <p className='text-gray-400 mt-2 text-sm md:text-base'>Freelance, full-time, or just vibing with an idea - I&apos;m all ears.</p>
      <div className="mt-4 text-sm md:text-base text-gray-300 flex justify-center items-center gap-2" >
        <span>👉</span>
        <Link href={"mailto:youremail.com"} className="hover:underline underline-offset-4 text-white font-medium">
          Email me
        </Link>
        <span>or</span>
        <Link
          href="https://twitter.com/dhruvtripathi77" // replace with actual DM link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 text-white font-medium"
        >          Connect on Twitter
        </Link>
      </div>
    </div>
  )
}

