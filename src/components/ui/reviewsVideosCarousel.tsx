"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"

const videoData = [
  { src: "/images/sua-renda-em-casa/depoimentos/1.mp4", title: "Alunos superando suas espectativas" },
  { src: "/images/sua-renda-em-casa/depoimentos/2.mp4", title: "Seja sua melhor versão, aprenda a fazer dinheiro com a internet" },
  { src: "/images/sua-renda-em-casa/depoimentos/3.mp4", title: "Aulas incriveis, alunos fazendo dinheiro de verdade" },
  { src: "/images/sua-renda-em-casa/depoimentos/4.mp4", title: "Seja você o seu próprio chefe," },
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false) // Áudio ativo desde o início
  const [progress, setProgress] = useState(0)
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Detectar se o carrossel está visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.6 })
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  // Evento de clique no vídeo (apenas para play/pause)
  const handleVideoClick = () => {
    const currentVideo = videoRefs.current[currentIndex]

    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause()
      } else {
        currentVideo.play().catch(() => { })
      }
    }
  }

  // Reproduzir/Pausar vídeos conforme visibilidade
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex]

    videoRefs.current.forEach((video, index) => {
      if (video) {
        // Configurar volume máximo e áudio ativo SEMPRE
        video.volume = 1.0
        video.muted = isMuted

        if (index === currentIndex && isVisible && isPlaying) {
          video.play().catch(() => { })
        } else {
          video.pause()
          if (index !== currentIndex) {
            video.currentTime = 0
          }
        }
      }
    })

    // Auto-play quando visível
    if (isVisible && currentVideo) {
      setIsPlaying(true)
    }
  }, [currentIndex, isVisible, isPlaying, isMuted])

  // Configurar vídeos quando carregam
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        // Configurar propriedades iniciais com áudio no máximo
        video.volume = 1.0
        video.muted = isMuted

        const handleLoadedData = () => {
          video.volume = 1.0
          video.muted = isMuted
        }

        const handleCanPlay = () => {
          video.volume = 1.0
          video.muted = isMuted
        }

        video.addEventListener("loadeddata", handleLoadedData)
        video.addEventListener("canplay", handleCanPlay)

        return () => {
          video.removeEventListener("loadeddata", handleLoadedData)
          video.removeEventListener("canplay", handleCanPlay)
        }
      }
    })
  }, [isMuted])

  // Atualizar progresso do vídeo
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex]

    const updateProgress = () => {
      if (currentVideo) {
        const progress = (currentVideo.currentTime / currentVideo.duration) * 100
        setProgress(progress)
      }
    }

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", updateProgress)
      return () => currentVideo.removeEventListener("timeupdate", updateProgress)
    }
  }, [currentIndex])

  const next = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % videoData.length)
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const prev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length)
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const currentVideo = videoRefs.current[currentIndex]
    if (currentVideo) {
      currentVideo.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center w-full py-12 px-4">
      {/* Container principal do vídeo */}
      <div className="relative group">
        {/* Vídeo principal */}
        <div className="relative w-[320px] sm:w-[360px] aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
          {/* Gradiente overlay para melhor contraste dos controles */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20 pointer-events-none" />

          {videoData.map((video, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el!)}
              src={video.src}
              className={`w-full h-full object-cover absolute transition-all duration-500 cursor-pointer ${index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                }`}
              playsInline
              muted={isMuted}
              controls={false} // Remove controles nativos
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onEnded={next}
              // onPlay={() => setIsPlaying(true)}
              // onPause={() => setIsPlaying(false)}
              // onClick={handleVideoClick} // Clique apenas para play/pause
              // onClick={() => { set }}

              onLoadedData={(e) => {
                const videoElement = e.target as HTMLVideoElement
                videoElement.volume = 1.0 // Volume máximo sempre
                videoElement.muted = isMuted
              }}
              onCanPlay={(e) => {
                const videoElement = e.target as HTMLVideoElement
                videoElement.volume = 1.0 // Volume máximo sempre
                videoElement.muted = isMuted
              }}
            />
          ))}

          {/* Controles do vídeo */}
          <div className="absolute bottom-4 left-4 right-4 z-30">
            {/* Barra de progresso */}
            <div className="w-full bg-white/20 rounded-full h-1 mb-3 backdrop-blur-sm">
              <div
                className="bg-white h-1 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controles */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>

              <div className="text-white/80 text-sm font-medium backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                {currentIndex + 1} / {videoData.length}
              </div>
            </div>
          </div>

          {/* Título do vídeo */}
          <div className="absolute top-4 left-4 right-4 z-30">
            <h3 className="text-white font-semibold text-lg drop-shadow-lg">{videoData[currentIndex].title}</h3>
          </div>
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prev}
          disabled={isTransitioning}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group-hover:opacity-100 opacity-70"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={next}
          disabled={isTransitioning}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group-hover:opacity-100 opacity-70"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicadores de slide */}
      <div className="flex items-center gap-2 mt-6">
        {videoData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>

      {/* Navegação por teclado - instruções */}
      <div className="mt-4 text-center text-gray-400 text-sm hidden">
        Use as setas ← → para navegar ou clique nos pontos abaixo
      </div>
    </div>
  )
}
