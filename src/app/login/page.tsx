'use client'

import { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login data:', formData)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Login to Your Account</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div className="mb-4 text-right">
              <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-bold text-lg mb-4"
            >
              Login
            </button>

            <p className="text-center text-gray-600">
              Don't have an account? <a href="/register" className="text-indigo-600 hover:text-indigo-700 font-bold">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}
