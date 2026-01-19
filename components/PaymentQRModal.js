"use client";

import { useState } from "react";

const PaymentQRModal = ({ isOpen, onClose, onPaymentComplete }) => {
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = () => {
    if (!transactionId.trim()) {
      alert("कृपया Transaction ID भरें");
      return;
    }
    onPaymentComplete(transactionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">
          ₹500 भुगतान करें
        </h2>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <img
            src="/qr-code.jpg"
            alt="UPI QR Code"
            className="w-full max-w-sm mx-auto"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            इस QR Code को scan करें
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transaction ID / UTR Number
          </label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="जैसे: 123456789012"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            रद्द करें
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            पुष्टि करें
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentQRModal;