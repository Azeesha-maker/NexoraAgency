'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Final Year Project (FYP)',
  'PWA Development',
  'Website & App Modernization',
  'Maintenance & Support',
]

export default function DynamicContactForm() {
  // === LEFT: Contact Form State ===
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  // === RIGHT: Requirement Wizard State ===
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    file: null as File | null,
    message: '',
  })
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // === Handlers ===
  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact:', contact)
    console.log('Requirements:', formData)
    alert('Project request submitted! We’ll contact you within 2 hours.')
    // Reset
    setContact({ name: '', email: '', phone: '', company: '' })
    setFormData({ service: '', budget: '', file: null, message: '' })
    setStep(1)
    setDropdownOpen(false)
  }

  const getServiceMessage = () => {
    switch (formData.service) {
      case 'Web Development':
        return 'Pages, CMS, features, design references...'
      case 'Mobile App Development':
        return 'iOS/Android/Both, core screens, APIs...'
      case 'UI/UX Design':
        return 'Target users, style, Figma links...'
      case 'Final Year Project (FYP)':
        return 'Topic, tech stack, deadline...'
      case 'PWA Development':
        return 'Offline support, push, installable...'
      case 'Website & App Modernization':
        return 'Current issues, desired tech...'
      case 'Maintenance & Support':
        return 'Current system, SLA needs...'
      default:
        return 'Tell us everything about your project.'
    }
  }

  const isContactValid =
    contact.name && contact.email && contact.phone

  const isStepValid = () => {
    if (step === 1) return !!formData.service
    if (step === 2) return !!formData.budget
    if (step === 3) return !!formData.file
    return true
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s Build Your Project Together
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill in your details on the <span className="font-semibold text-primary">left</span> and project requirements on the <span className="font-semibold text-primary">right</span>.
          </p>
        </div>

        {/* Two-Column Layout */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl p-6 md:p-10"
        >
          {/* ================= LEFT: CONTACT ================= */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Icon icon="tabler:user" className="text-primary" />
              Your Contact Details
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone (with country code) *</label>
              <input
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="+92 300 1234567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Company (optional)</label>
              <input
                type="text"
                value={contact.company}
                onChange={(e) => setContact({ ...contact, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="ABC Corp"
              />
            </div>

            {/* Trust Badge */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl text-center text-sm text-gray-600">
              <Icon icon="tabler:shield-check" className="inline-block text-green-600 mr-1" />
              Your data is secure. We reply within <strong>2 hours</strong>.
            </div>
          </div>

          {/* ================= RIGHT: REQUIREMENTS WIZARD ================= */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Icon icon="tabler:briefcase" className="text-primary" />
                Project Requirements
              </h2>
              {/* Progress Bar */}
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-2 w-12 rounded-full transition-all ${
                      i <= step ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Service */}
            {step === 1 && (
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Project Type *
                </label>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="cursor-pointer w-full bg-gray-100 border border-gray-300 rounded-xl p-4 flex justify-between items-center shadow-sm hover:bg-gray-50 transition"
                >
                  <span className={`${formData.service ? 'text-gray-900' : 'text-gray-400'}`}>
                    {formData.service || '-- Select a Service --'}
                  </span>
                  <Icon
                    icon={dropdownOpen ? 'tabler:chevron-up' : 'tabler:chevron-down'}
                    width="24"
                  />
                </div>
                {dropdownOpen && (
                  <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-xl mt-1 max-h-60 overflow-auto shadow-lg">
                    {services.map((s) => (
                      <li
                        key={s}
                        className="px-4 py-3 hover:bg-primary hover:text-white cursor-pointer font-medium transition"
                        onClick={() => {
                          setFormData({ ...formData, service: s })
                          setDropdownOpen(false)
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Budget (USD) *
                </label>
                <input
                  type="number"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g. 5000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>
            )}

            {/* Step 3: File Upload */}
            {step === 3 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Upload Reference (PDF) *
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    e.target.files && setFormData({ ...formData, file: e.target.files[0] })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                />
                {formData.file && (
                  <p className="mt-2 text-sm text-gray-600 flex items-center gap-1">
                    <Icon icon="tabler:file-check" />
                    {formData.file.name}
                  </p>
                )}
              </div>
            )}

            {/* Step 4: Message */}
            {step === 4 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={getServiceMessage()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl h-32 resize-none focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition"
                >
                  Back
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="ml-auto px-6 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isContactValid}
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold text-lg hover:from-primary/90 hover:to-primary transition disabled:opacity-50"
                >
                  Submit Project Request
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Need help?{' '}
          <a href="https://wa.me/1234567890" className="text-primary font-semibold">
            Chat on WhatsApp
          </a>{' '}
          or email us at{' '}
          <a href="mailto:hello@youragency.com" className="text-primary">
            nexoraagency@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}