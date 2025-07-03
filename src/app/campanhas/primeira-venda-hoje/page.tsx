"use client"

import { CheckCircle, Play } from "lucide-react"
import { useState } from "react"

export default function PrimeiraVendaHoje() {
    const [showVideo, setShowVideo] = useState(false)

    const testimonialVideos = [
        { id: "Ij0A25KiQPE", title: "Depoimento 1" },
        { id: "CswifNdj6CM", title: "Depoimento 2" },
        { id: "0mTDGyTUa3A", title: "Depoimento 3" },
    ]

    const proofImages = [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-red-600 py-4">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-white font-bold text-lg md:text-2xl uppercase tracking-wide">
                            Aula liberada com sucesso! <CheckCircle className="inline-block w-6 h-6 ml-2" />
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section
                className="py-12 md:py-20 bg-cover bg-center bg-no-repeat relative"
                style={{
                    background: `url("https://formulaenriiquecendoonline.com/wp-content/uploads/2022/04/VBG-PRECO.jpg") no-repeat`
                }}
            >
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center text-white space-y-8">
                        <div className="space-y-4">
                            <p className="text-base md:text-lg font-medium leading-relaxed drop-shadow-lg">
                                Uma nova profissão que é possível gerar mais de{" "}
                                <span className="text-yellow-400 font-bold">5 mil reais por mês</span> sem ter faculdade ou experiência,
                                você só precisa de apenas um celular e internet!
                            </p>
                            <p className="text-yellow-400 font-bold text-base md:text-lg drop-shadow-lg">
                                AS GRANDES EMPRESAS NÃO QUEREM QUE VOCÊ DESCUBRA ESSE MÉTODO
                            </p>
                        </div>

                        {/* Video Player */}
                        <div className="relative max-w-3xl mx-auto">
                            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                                {!showVideo ? (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center cursor-pointer flex items-center justify-center group"
                                        style={{
                                            backgroundImage: "url('/placeholder.svg?height=400&width=600')",
                                        }}
                                        onClick={() => setShowVideo(true)}
                                    >
                                        <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors">
                                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse">
                                Quero começar agora mesmo!
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Veja o que aconteceu com as pessoas que tomaram a decisão de entrar para o FÓRMULA RENDA EXTRA:
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {testimonialVideos.map((video, index) => (
                            <div key={index} className="overflow-hidden shadow-lg rounded-lg bg-white">
                                <div className="p-0">
                                    <div className="aspect-video">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={video.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Proof Images Grid */}
                    <div className="mt-16 max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {proofImages.map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-lg bg-white shadow-lg">
                                    <img
                                        src={image || "/placeholder.svg"}
                                        alt={`Prova social ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <p className="text-sm md:text-base">© Copyright 2022 – Todos os direitos reservados.</p>
                    <p className="text-xs md:text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a
                        responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e
                        mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer
                        informação para terceiros. Jamais fazemos nenhum tipo de spam.
                    </p>
                </div>
            </footer>
        </div>
    )
}
