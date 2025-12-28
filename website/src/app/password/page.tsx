'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PasswordPage() {
  const passwordRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const password = passwordRef.current?.value || ''
    
    if (!password) {
      setError('Please enter a password')
      return
    }
    
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        setError('Incorrect password')
      }
    } catch {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-surface-base flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Image 
            src="/butterpath_logo.png" 
            alt="ButterPath"
            width={200}
            height={48}
            className="h-12 w-auto mx-auto mb-8"
          />
          <h1 className="font-display text-2xl text-ink-primary mb-2">
            Investor Preview
          </h1>
          <p className="text-ink-secondary text-base">
            This site is password protected.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-surface-sunken border border-stroke-subtle rounded-lg text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-butter transition-colors"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Enter'}
          </button>
        </form>

        <p className="text-center text-ink-muted text-sm mt-8">
          Need access?{' '}
          <a 
            href="mailto:muratcan@butterpath.com" 
            className="text-butter-dark hover:text-accent-hover transition-colors"
          >
            Contact Muratcan
          </a>
        </p>
      </div>
    </main>
  )
}
