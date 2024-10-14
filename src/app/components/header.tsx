'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenu, setIsMenu] = useState(false)

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <svg className="h-8 w-auto sm:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-primary">Your Company</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2">
            <button
              type="button"
              className="bg-background rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMenu}
              aria-expanded={isMenu}
            >
              <span className="sr-only">{isMenu ? 'Close menu' : 'Open menu'}</span>
              {isMenu ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu (mobile and desktop) */}
      <div className={`${isMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:text-primary hover:bg-muted">
            Features
          </Link>
          <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:text-primary hover:bg-muted">
            Pricing
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:text-primary hover:bg-muted">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:text-primary hover:bg-muted">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
