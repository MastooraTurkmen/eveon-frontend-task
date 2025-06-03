"use client";

import { useUIStore } from "../store/useStore";

const RTLToggle = () => {
  const { isRTL, toggleRTL } = useUIStore();

  return (
    <button
      onClick={toggleRTL}
      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
    >
      {isRTL ? "Switch to LTR" : "تغيير إلى العربية"}
    </button>
  );
};

export default RTLToggle;
