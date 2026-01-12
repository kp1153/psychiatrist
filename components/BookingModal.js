 "use client"

import { useState } from 'react'
import { X } from 'lucide-react'

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    try {
      const scriptLoaded = await loadRazorpayScript()
      
      if (!scriptLoaded) {
        alert('Razorpay SDK लोड नहीं हो सका। कृपया फिर से प्रयास करें।')
        return
      }

      // Create order
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 500,
          name: formData.name,
          phone: formData.phone
        }),
      })

      const orderData = await orderResponse.json()

      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Order creation failed')
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'डॉ. आर.के. कुशवाहा',
        description: 'ऑनलाइन परामर्श शुल्क',
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // Verify payment
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                name: formData.name,
                phone: formData.phone
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyData.success) {
              // Send WhatsApp notification
              const message = `✅ नया परामर्श बुकिंग (Paid)%0a%0aनाम: ${formData.name}%0aफोन: ${formData.phone}%0aPayment ID: ${response.razorpay_payment_id}`
              const whatsappURL = `https://wa.me/918789482183?text=${message}`
              
              window.open(whatsappURL, '_blank')
              
              setFormData({ name: '', phone: '' })
              onClose()
              alert('✅ Payment सफल! डॉक्टर जल्द ही आपको समय देंगे।')
            } else {
              alert('❌ Payment verification failed')
            }
          } catch (error) {
            console.error('Verification error:', error)
            alert('❌ Payment verification में समस्या आई')
          }
        },
        prefill: {
          name: formData.name,
          contact: formData.phone,
        },
        theme: {
          color: '#0d9488'
        },
        modal: {
          ondismiss: function() {
            setLoading(false)
          }
        }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
      
    } catch (error) {
      console.error('Payment error:', error)
      alert('❌ Payment में समस्या आई। कृपया फिर से प्रयास करें।')
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      alert('कृपया सभी जानकारी भरें')
      return
    }

    if (formData.phone.length !== 10) {
      alert('कृपया सही 10 अंकों का नंबर डालें')
      return
    }

    setLoading(true)
    await handlePayment()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-2 text-teal-700">
          ऑनलाइन परामर्श बुक करें
        </h2>
        <p className="text-gray-600 mb-6">
          परामर्श शुल्क: ₹500 (WhatsApp Video Call)
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              आपका नाम <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="अपना नाम लिखें"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              WhatsApp नंबर <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              maxLength="10"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="10 अंकों का मोबाइल नंबर"
            />
          </div>

          <div className="bg-teal-50 p-4 rounded-lg">
            <p className="text-sm text-teal-800">
              ℹ️ Payment के बाद डॉक्टर 24 घंटे में आपको समय देंगे और इसी WhatsApp नंबर पर Video Call करेंगे।
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-400"
          >
            {loading ? 'प्रोसेसिंग...' : '₹500 Payment करें'}
          </button>
        </form>
      </div>
    </div>
  )
}