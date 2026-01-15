"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function BookingModal({ isOpen, onClose }) {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    patientName: "",
    patientPhone: "",
    preferredDate: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: formData.patientName,
          patientEmail: user?.emailAddresses[0]?.emailAddress || "",
          patientPhone: formData.patientPhone,
          preferredDate: formData.preferredDate,
          notes: formData.notes,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({ patientName: "", patientPhone: "", preferredDate: "", notes: "" });
          window.location.href = '/dashboard';
        }, 2000);
      }
    } catch (error) {
      console.error("Booking failed:", error);
      alert("कुछ गड़बड़ी हुई, फिर से कोशिश करें");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">अपॉइंटमेंट रिक्वेस्ट करें</h2>
        
        {success ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✓</div>
            <p className="text-green-600 text-xl font-semibold mb-2">रिक्वेस्ट सफलतापूर्वक भेज दी गई!</p>
            <p className="text-sm text-gray-600">डॉक्टर जल्द ही टाइम स्लॉट बताएंगे</p>
            <p className="text-sm text-gray-600 mt-2">आपको Dashboard पर redirect किया जा रहा है...</p>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-blue-800 font-semibold mb-1">⏰ समय: दोपहर 2:30 बजे से रात 8:00 बजे तक</p>
              <p className="text-xs text-blue-600">डॉक्टर आपकी पसंदीदा तारीख के अनुसार उपलब्ध समय बताएंगे</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="नाम"
                required
                value={formData.patientName}
                onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="tel"
                placeholder="फोन नंबर"
                required
                pattern="[0-9]{10}"
                value={formData.patientPhone}
                onChange={(e) => setFormData({...formData, patientPhone: e.target.value})}
                className="w-full px-4 py-2 border rounded-md"
              />
              <div>
                <label className="block text-sm mb-1 text-gray-700 font-semibold">पसंदीदा तारीख चुनें</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <textarea
                placeholder="अपनी समस्या विस्तार से बताएं"
                required
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-2 border rounded-md"
                rows="3"
              />
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 disabled:opacity-50 font-semibold"
                >
                  {loading ? "भेजा जा रहा है..." : "रिक्वेस्ट भेजें"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-300 py-2 rounded-md hover:bg-gray-400"
                >
                  बंद करें
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}