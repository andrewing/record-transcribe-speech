import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const AudioPlayer = forwardRef(({ src, isLargeScreen, loading, status }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (status === 'idle' || status === 'recording' || loading) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [status, loading])

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
                        <PauseButton
                            disabled={disabled}
                            handlePause={handlePause}
                        />
                    ) : (
                        <PlayButton
                            disabled={disabled}
                            handlePlay={handlePlay}
                        />
                    )
                )
            }
        </div>
    );
})

AudioPlayer.displayName = 'AudioPlayer';


export default AudioPlayer;