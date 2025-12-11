// app/marij-ki-jabani/page.jsx
"use client";

import { useState } from "react";

export default function MarijKiJabaniPage() {
  const [formData, setFormData] = useState({
    name: "",
    problem: "",
    recovery: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/marij-jabani", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          problem: "",
          recovery: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#006680] mb-4">
            मरीजों की जबानी
          </h1>
          <p className="text-gray-700 text-lg">
            अपना अनुभव साझा करें। आपकी कहानी दूसरों को प्रेरणा दे सकती है।
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* नाम */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              आपका नाम <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006680] text-lg"
              placeholder="जैसे: राज कुमार"
            />
          </div>

          {/* समस्या क्या थी */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              आपकी समस्या क्या थी? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006680] text-lg"
              placeholder="अपनी समस्या के बारे में विस्तार से बताएं..."
            />
          </div>

          {/* उपचार के बाद कैसा महसूस हुआ */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              उपचार के बाद कैसा महसूस हुआ?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="recovery"
              value={formData.recovery}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006680] text-lg"
              placeholder="उपचार के बाद आपको कैसा लगा, क्या बदलाव आया..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#006680] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#005266] transition disabled:bg-gray-400 text-lg"
          >
            {isSubmitting ? "सबमिट हो रहा है..." : "अपना अनुभव साझा करें"}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-6 bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
              <p className="font-semibold text-lg">धन्यवाद!</p>
              <p>आपका अनुभव सफलतापूर्वक सबमिट हो गया है।</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
              <p className="font-semibold text-lg">कुछ गड़बड़ी हुई।</p>
              <p>कृपया दोबारा कोशिश करें।</p>
            </div>
          )}
        </form>

        {/* Privacy Note */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            आपकी प्राइवेसी हमारे लिए महत्वपूर्ण है। केवल आपका नाम प्रदर्शित
            होगा।
          </p>
        </div>
      </div>
    </div>
  );
}
