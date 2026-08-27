'use client'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                placeholder="Tell us more..."
                className="w-full border border-gray-300 rounded px-3 py-2 h-32"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-bold"
            >
              Send Message
            </button>
          </form>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">support@sabusinessexchange.co.za</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600">+27 (0) 10 XXX XXXX</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-600">South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
