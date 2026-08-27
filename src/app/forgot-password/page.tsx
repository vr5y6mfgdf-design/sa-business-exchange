'use client'

import { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // TODO: Implement password reset logic
    console.log('Reset email:', email)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-4">Reset Your Password</h1>
          <p className="text-center text-gray-600 mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-bold text-lg mb-4"
              >
                Send Reset Link
              </button>

              <p className="text-center text-gray-600 text-sm">
                Remember your password? <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-bold">Login here</a>
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-bold">Check your email!</p>
                <p className="text-sm">We've sent a password reset link to {email}</p>
              </div>
              <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-bold">Back to Login</a>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
