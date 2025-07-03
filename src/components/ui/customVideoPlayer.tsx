'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CustomVideoPlayer() {
    const videoUrl = '/images/sua-renda-em-casa/video.mp4';
    const videoRef = useRef<HTMLVideoElement>(null);
    const [progress, setProgress] = useState(0);
    // const [isPaused, setIsPaused] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const current = video.currentTime;
            const total = video.duration;
            setProgress((current / total) * 100);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const handleUserInteraction = () => {
        if (hasInteracted) return;

        const video = videoRef.current;
        if (!video) return;

        video.muted = false;
        video.volume = 1.0;

        video
            .play()
            .then(() => {
                setHasInteracted(true);
            })
            .catch((err) => {
                console.error('Erro ao iniciar vídeo com som:', err);
            });
    };

    const togglePause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            // setIsPaused(false);
        } else {
            video.pause();
            // setIsPaused(true);
        }
    };

    return (
        <div
            className="relative w-full mx-auto"

            onClick={handleUserInteraction}
            style={{ cursor: hasInteracted ? 'default' : 'pointer', }}
        >
            {!hasInteracted && (
                <div className="absolute inset-0 z-10 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Image
                            src={`/images/sua-renda-em-casa/play.svg`}
                            width={361} height={513}
                            alt="Liberdade de Tempo"
                            // cody, centralize o play
                            className="absolute z-10 w-16 h-16 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            )}

            <video
                ref={videoRef}
                src={videoUrl}
                className="w-full rounded-lg mb-3"
                playsInline
                muted
                preload="auto"
                onContextMenu={(e) => e.preventDefault()}
                onClick={(e) => {
                    e.stopPropagation();
                    togglePause();
                }}
            />

            <div className="h-2 bg-gray-700 rounded mt-[-12px] mx-2">
                <div
                    className="h-2 bg-blue-500 rounded"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* {hasInteracted && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePause();
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    {isPaused ? 'Continuar' : 'Pausar'}
                </button>
            )} */}
        </div>
    );
}
