import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const AudioPlayer = forwardRef(({ src, isLargeScreen }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Update the state of `isPlaying` whenever the audio's `paused` property changes
        const handlePauseChange = () => setIsPlaying(!ref.current.paused);
        ref.current.addEventListener('pause', handlePauseChange);
        ref.current.addEventListener('play', handlePauseChange);
        return () => {
            ref.current.removeEventListener('pause', handlePauseChange);
            ref.current.removeEventListener('play', handlePauseChange);
        };
    }, []);


    const handlePlay = () => {
        ref.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        ref.current.pause();
        setIsPlaying(false);
    };

    return (
        <div>
            <audio ref={ref} src={src} controls={isLargeScreen} />
            {
                isLargeScreen ? null : (
                    isPlaying ? (
                        <PauseButton handlePause={handlePause} />
                    ) : (
                        <PlayButton handlePlay={handlePlay} />
                    )
                )
            }
        </div>
    );
})

export default AudioPlayer;