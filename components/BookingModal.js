 "use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import PaymentQRModal from "./PaymentQRModal";

const BookingModal = ({ isOpen, onClose }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    issueDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = async (transactionId) => {
    setLoading(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          transactionId,
        }),
      });

      if (response.ok) {
        alert("अपॉइंटमेंट बुक हो गई! जल्द ही confirm होगी।");
        setFormData({
          patientName: "",
          patientEmail: "",
          patientPhone: "",
          issueDescription: "",
        });
        onClose();
      } else {
        alert("कुछ गड़बड़ हुई, फिर से try करें");
      }
    } catch (error) {
      console.error(error);
      alert("Error हुई");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">
            अपॉइंटमेंट बुक करें
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                नाम
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ईमेल
              </label>
              <input
                type="email"
                name="patientEmail"
                value={formData.patientEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                फोन नंबर
              </label>
              <input
                type="tel"
                name="patientPhone"
                value={formData.patientPhone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                समस्या बताएं
              </label>
              <textarea
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                रद्द करें
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50"
              >
                आगे बढ़ें (₹500)
              </button>
            </div>
          </form>
        </div>
      </div>

      <PaymentQRModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPaymentComplete={handlePaymentComplete}
      />
    </>
  );
};

export default BookingModal;