"use client";

import { useState } from "react";

export default function AppointmentActions({ appointmentId, currentStatus }) {
  const [showTimeSlot, setShowTimeSlot] = useState(false);
  const [confirmedDateTime, setConfirmedDateTime] = useState("");
  const [loading, setLoading] = useState(false);

  const updateStatus = async (newStatus, dateTime = null) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/appointments/${appointmentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          status: newStatus,
          confirmedDateTime: dateTime 
        }),
      });

      if (res.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGiveTimeSlot = () => {
    if (!confirmedDateTime) {
      alert("कृपया समय चुनें");
      return;
    }
    updateStatus("slot_given", confirmedDateTime);
  };

  if (currentStatus === 'confirmed' || currentStatus === 'completed') {
    return null;
  }

  return (
    <div className="mt-4 border-t pt-4">
      {currentStatus === 'requested' && (
        <>
          {!showTimeSlot ? (
            <button
              onClick={() => setShowTimeSlot(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
            >
              टाइम स्लॉट दें
            </button>
          ) : (
            <div className="flex gap-2 items-end">
              <div>
                <label className="block text-sm mb-1">समय चुनें:</label>
                <input
                  type="datetime-local"
                  value={confirmedDateTime}
                  onChange={(e) => setConfirmedDateTime(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                />
              </div>
              <button
                onClick={handleGiveTimeSlot}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "..." : "भेजें"}
              </button>
              <button
                onClick={() => setShowTimeSlot(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          )}
          
          <button
            onClick={() => updateStatus("cancelled")}
            disabled={loading}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50 ml-2"
          >
            Reject
          </button>
        </>
      )}

      {currentStatus === 'slot_given' && (
        <button
          onClick={() => updateStatus("confirmed")}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          Confirm करें
        </button>
      )}
    </div>
  );
}