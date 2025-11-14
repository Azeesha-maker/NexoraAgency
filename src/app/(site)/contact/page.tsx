'use client'

import { useState, useEffect } from 'react'
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
  // === Contact State ===
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  // === Requirement Wizard State ===
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    file: null as File | null,
    message: '',
  })
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // === Modal State ===
  const [showModal, setShowModal] = useState(false)
  const [autoClose, setAutoClose] = useState<NodeJS.Timeout | null>(null)

  // === Handlers ===
  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact:', contact)
    console.log('Requirements:', formData)

    // Reset form
    setContact({ name: '', email: '', phone: '', company: '' })
    setFormData({ service: '', budget: '', file: null, message: '' })
    setStep(1)
    setDropdownOpen(false)

    // Show custom modal
    setShowModal(true)

    // Auto-close after 4 seconds
    const timer = setTimeout(() => {
      setShowModal(false)
    }, 4000)
    setAutoClose(timer)
  }

  const closeModal = () => {
    setShowModal(false)
    if (autoClose) clearTimeout(autoClose)
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

  const isContactValid = contact.name && contact.email && contact.phone
  const isStepValid = () => {
    if (step === 1) return !!formData.service
    if (step === 2) return !!formData.budget
    if (step === 3) return !!formData.file
    return true
  }

  return (
    <>
      <section className="bg-gradient-to-b from-[var(--color-gray-50)] to-white py-12 md:py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
 <h1 className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-gray-900)] mb-3">
  Let's Build Your Project Together
</h1>


            <p className="text-base sm:text-lg text-[var(--color-gray-600)] max-w-3xl mx-auto">
              Fill your <span className="font-semibold text-primary">contact</span> on the{' '}
              <span className="sm:hidden">top</span>
              <span className="hidden sm:inline">left</span> and{' '}
              <span className="font-semibold text-primary">requirements</span> on the{' '}
              <span className="sm:hidden">bottom</span>
              <span className="hidden sm:inline">right</span>.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 md:gap-10 lg:gap-12 bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 lg:p-10
                       grid-cols-1 md:grid-cols-2"
          >
            {/* LEFT / TOP: CONTACT */}
            <div className="space-y-5 sm:space-y-6 order-1 md:order-none">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-gray-800)] flex items-center gap-2">
                <Icon icon="tabler:user" className="text-primary w-6 h-6" />
                Your Contact Details
              </h2>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">Email *</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">Phone *</label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="+92 300 1234567"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">Company (optional)</label>
                <input
                  type="text"
                  value={contact.company}
                  onChange={(e) => setContact({ ...contact, company: e.target.value })}
                  className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="ABC Corp"
                />
              </div>

              <div className="mt-6 p-4 bg-[var(--color-gray-50)] rounded-xl text-center text-xs sm:text-sm text-[var(--color-gray-600)]">
                <Icon icon="tabler:shield-check" className="inline-block text-[var(--color-green-600)] mr-1 w-5 h-5" />
                Your data is secure. We reply within <strong>2 hours</strong>.
              </div>
            </div>

            {/* RIGHT / BOTTOM: REQUIREMENTS */}
            <div className="space-y-5 sm:space-y-6 order-2 md:order-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-gray-800)] flex items-center gap-2">
                  <Icon icon="tabler:briefcase" className="text-primary w-6 h-6" />
                  Project Requirements
                </h2>
                <div className="flex gap-1.5 justify-center sm:justify-end">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-10 sm:w-12 rounded-full transition-all duration-300 ${
                        i <= step ? 'bg-primary' : 'bg-[var(--color-gray-300)]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Service */}
              {step === 1 && (
                <div className="relative">
                  <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">
                    Project Type *
                  </label>
                  <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full bg-[var(--color-gray-100)] border border-[var(--color-gray-300)] rounded-xl p-4 flex justify-between items-center shadow-sm hover:bg-[var(--color-gray-50)] transition"
                  >
                    <span className={`text-base ${formData.service ? 'text-[var(--color-gray-900)]' : 'text-[var(--color-gray-400)]'}`}>
                      {formData.service || '-- Select a Service --'}
                    </span>
                    <Icon
                      icon={dropdownOpen ? 'tabler:chevron-up' : 'tabler:chevron-down'}
                      width="24"
                      height="24"
                    />
                  </div>
                  {dropdownOpen && (
                    <ul className="absolute z-20 w-full bg-white border border-[var(--color-gray-300)] rounded-xl mt-1 max-h-60 overflow-auto shadow-lg">
                      {services.map((s) => (
                        <li
                          key={s}
                          className="px-4 py-3 hover:bg-primary hover:text-white font-medium transition text-base"
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
                  <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">
                    Budget (USD) *
                  </label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. 5000"
                    className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
              )}

              {/* Step 3: File Upload */}
              {step === 3 && (
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">
                    Upload Reference (PDF) *
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      e.target.files && setFormData({ ...formData, file: e.target.files[0] })
                    }
                    className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl focus:ring-2 focus:ring-primary focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                  />
                  {formData.file && (
                    <p className="mt-2 text-sm text-[var(--color-gray-600)] flex items-center gap-1">
                      <Icon icon="tabler:file-check" className="w-5 h-5" />
                      {formData.file.name}
                    </p>
                  )}
                </div>
              )}

              {/* Step 4: Message */}
              {step === 4 && (
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-gray-700)] mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={getServiceMessage()}
                    className="w-full px-4 py-3 text-base border border-[var(--color-gray-300)] rounded-xl h-32 resize-none focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="order-2 sm:order-1 w-full sm:w-auto px-5 py-3 bg-[var(--color-gray-200)] text-[var(--color-gray-800)] rounded-xl font-semibold hover:bg-[var(--color-gray-300)] transition text-base"
                  >
                    Back
                  </button>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="order-1 sm:order-2 w-full px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isContactValid}
                    className="order-1 w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-bold text-base hover:from-primary/90 hover:to-primary transition disabled:opacity-50"
                  >
                    Submit Project Request
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-xs sm:text-sm text-[var(--color-gray-500)] mt-8 px-4">
            Need help?{' '}
            <a href="https://wa.me/1234567890" className="text-primary font-semibold">
              Chat on WhatsApp
            </a>{' '}
            or email us at{' '}
            <a href="mailto:hello@youragency.com" className="text-primary">
              hello@youragency.com
            </a>
          </p>
        </div>
      </section>

      {/* ================= CUSTOM SUCCESS MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full transform transition-all animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              {/* Animated Checkmark */}
              <div className="mx-auto w-20 h-20 mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-[var(--color-green-100)] animate-ping"></div>
                <div className="relative flex items-center justify-center w-full h-full rounded-full bg-[var(--color-green-500)] text-white">
                  <Icon icon="tabler:check" className="w-10 h-10" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-gray-900)] mb-2">Thank You!</h3>
              <p className="text-[var(--color-gray-600)] mb-6">
                Your project request has been submitted successfully. We’ll get back to you within <strong>2 hours</strong>.
              </p>

              <button
                onClick={closeModal}
                className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
              >
                Got it
              </button>

              <p className="text-xs text-[var(--color-gray-400)] mt-4">
                Closes automatically in 4s
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Optional: Add these animations to your global CSS or Tailwind config */}
    
    </>
  )
}