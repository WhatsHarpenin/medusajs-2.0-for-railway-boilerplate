"use client"

import { useEffect, useState } from "react"

interface AnnouncementBarProps {
  message: string
}

export default function AnnouncementBarClient({
  message,
}: AnnouncementBarProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    setShouldAnimate(true)
  }, [])

  return (
    <div className="w-full bg-red-600 text-white py-2 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee {
          animation: marquee 30s linear infinite;
          white-space: nowrap;
          display: inline-block;
          padding-left: 100%;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex items-center">
        <div className={`text-sm font-semibold ${shouldAnimate ? "marquee" : ""}`}>
          {message}
        </div>
      </div>
    </div>
  )
}
