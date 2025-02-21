"use client";
import { useState, useEffect } from "react";

export default function TimeZoneDisplay() {
  const [timeInfo, setTimeInfo] = useState({
    indiaTime: "",
    visitorTime: "",
    difference: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const indiaTimeZone = "Asia/Kolkata"; // ✅ Correct IST Timezone
      const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // ✅ Auto-detect visitor's timezone

      // ✅ Get India Time & Visitor Time
      const indiaDate = new Date().toLocaleTimeString("en-IN", {
        timeZone: indiaTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const visitorDate = new Date().toLocaleTimeString("en-IN", {
        timeZone: visitorTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // ✅ Get UTC offsets in minutes
      const indiaOffsetMinutes = new Date().getTimezoneOffset() - new Date().toLocaleTimeString("en-US", { timeZone: indiaTimeZone }).split(" ")[0];
      const visitorOffsetMinutes = new Date().getTimezoneOffset();

      // ✅ Calculate time difference correctly
      const totalDiffMinutes = visitorOffsetMinutes - indiaOffsetMinutes;
      const diffHours = Math.floor(Math.abs(totalDiffMinutes) / 60);
      const diffMinutes = Math.abs(totalDiffMinutes) % 60;

      let differenceText = "(Same Timezone)";
      if (totalDiffMinutes !== 0) {
        const sign = totalDiffMinutes > 0 ? "+" : "-";
        differenceText = `${sign} ${diffHours}H ${diffMinutes > 0 ? `${diffMinutes}M` : ""} ${totalDiffMinutes > 0 ? "FORWARD" : "BEHIND"}`;
      }

      setTimeInfo({
        indiaTime: indiaDate,
        visitorTime: visitorDate,
        difference: differenceText,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // ✅ Updates every second

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="uppercase">{timeInfo.indiaTime}</div>
  );
}

{/* <p>your clock<strong>{timeInfo.visitorTime}</strong></p>
      <p className="text-sm text-gray-400">{timeInfo.difference}</p> */}