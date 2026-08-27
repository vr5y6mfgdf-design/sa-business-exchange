'use client'

import { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    businessCode: '',
    companyName: '',
    email: '',
    registrationNumber: '',
    industry: '',
    province: '',
    city: '',
    contactFirstName: '',
    contactLastName: '',
    phone: '',
    description: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // TODO: Implement registration logic
    console.log('Registration data:', formData)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Register Your Business</h1>

          <form onSubmit={handleSubmit}>
            {/* Business Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Business Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Business Code*</label>
                  <input
                    type="text"
                    name="businessCode"
                    value={formData.businessCode}
                    onChange={handleChange}
                    placeholder="e.g., TECH001"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Registration Number</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Province</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Contact Person</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">First Name</label>
                  <input
                    type="text"
                    name="contactFirstName"
                    value={formData.contactFirstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Last Name</label>
                  <input
                    type="text"
                    name="contactLastName"
                    value={formData.contactLastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Account Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Password*</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Confirm Password*</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-bold text-lg"
            >
              Register Business
            </button>

            <p className="text-center mt-4 text-gray-600">
              Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-bold">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}
