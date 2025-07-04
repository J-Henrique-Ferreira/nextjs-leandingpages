"use client"

import { useEffect, useState } from "react"

const TopBarTimer = () => {
    const [secondsLeft, setSecondsLeft] = useState(600) // 10 minutos

    useEffect(() => {
        if (secondsLeft <= 0) return

        const interval = setInterval(() => {
            setSecondsLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [secondsLeft])

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }

    if (secondsLeft <= 0) return null

    return (
        <div className="fixed top-0 left-0 w-full bg-black text-white text-center py-2 z-50 shadow-lg">
            ⏳ Oferta expira em: <span className="font-mono text-lg">{formatTime(secondsLeft)}</span>
        </div>
    )
}

export default TopBarTimer
