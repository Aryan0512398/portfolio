import { Github, Instagram, Linkedin, MailIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <hr className="my-4 border-gray-700  w-full" />
          <footer className="mt-2 flex gap-8 text-2xl">
            <Link href="https://www.instagram.com/aryan_gupta0512/" aria-label="Instagram">
              <Instagram className="text-gray-400 hover:text-gray-300 transition duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aryan-gupta-b1407a2b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-gray-400 hover:text-gray-300 transition duration-300" />
            </Link>
            <Link href="mailto:aryangupta052015@gmail.com" aria-label="Email">
              <MailIcon className="text-gray-400 hover:text-gray-300 transition duration-300" />
            </Link>
            <Link
              href="https://github.com/Aryan0512398"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="text-gray-400 hover:text-gray-300 transition duration-300" />
            </Link>
          </footer>
    </>
  )
}

export default Footer
