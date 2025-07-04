"use client"

import { useEffect, useState } from "react"

export default function UrgencyModal() {
    const [showModal, setShowModal] = useState(false)
    const [hasShown, setHasShown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (hasShown) return

            const scrolled = window.scrollY + window.innerHeight
            const totalHeight = document.body.scrollHeight

            const scrollPercent = (scrolled / totalHeight) * 100

            if (scrollPercent >= 80) {
                setShowModal(true)
                setHasShown(true)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [hasShown])

    if (!showModal) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-xl animate-scaleIn">
                <h2 className="text-2xl font-bold mb-4 text-red-600">⚠️ Últimas vagas disponíveis!</h2>
                <p className="mb-6 text-gray-800">
                    Restam apenas <strong>3 vagas</strong>! Estamos quase esgotados.<br />
                    Garanta agora sua chance antes que feche!
                </p>
                <a
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
                    href="https://pay.kiwify.com.br/sUqnazH?afid=93ETP2aM"
                >
                    Garantir minha vaga
                </a>
            </div>
        </div>
    )
}
