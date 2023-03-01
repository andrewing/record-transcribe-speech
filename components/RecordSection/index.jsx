import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import audioToBase64 from "@/components/RecordSection/audioToBase64";
import RecordButton from "./RecordButton";
import StopButton from "./StopButton";
import UploadButton from "./UploadButton";

const { Container, Spacer, Tooltip, Button, Loading } = require("@nextui-org/react")
const ReactMediaRecorder = dynamic(
    () => import('react-media-recorder').then(mod => mod.ReactMediaRecorder),
    { ssr: false }
)

// const useReactMediaRecorder = dynamic(
//     () => import('react-media-recorder').then(mod => mod.useReactMediaRecorder),
//     { ssr: false }
// )

const RecordSection = ({
    id,
    handleNextPrompt,
    currQuestion,
    currPrompt,
    strCurrQuestion,
    strCurrPrompt,
    isLoading,
}) => {

    // const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
    const [loading, setLoading] = useState(false)
    const audioRef = useRef()

    const handleSave = async (mediaBlobUrl) => {
        setLoading(true)
        const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob())
        const b64 = await audioToBase64(audioBlob)
        try {
            await fetch('/api/record', {
                method: 'POST',
                body: JSON.stringify({
                    user: id,
                    recording: b64,
                    strCurrQuestion: strCurrQuestion,
                    strCurrPrompt: strCurrPrompt,
                    currQuestion: currQuestion,
                    currPrompt: currPrompt,
                }),
            });
        } catch (err) {
            console.log(err)
        }
        handleNextPrompt()
        //clear blob url
        audioRef.current.src = null

        setLoading(false)
    };


    return (
        <div
            style={{
                position: 'fixed',
                bottom: '90px',
                width: '600px',
                height: '60px',
                left: '50%',
                marginLeft: '-300px',
            }}
        >

            {/* <Container
                display="flex"
                direction="row"
                justify="center"
                align="center"
            >

                <Spacer x={1} />
                {
                    status !== 'recording' ?
                        <RecordButton startRecording={startRecording} />
                        :
                        <StopButton stopRecording={stopRecording} />
                }
                <Spacer x={1} />
                <audio src={mediaBlobUrl} controls />
                <Spacer x={1} />
                <UploadButton
                    status={status}
                    handleSave={() => { handleSave(mediaBlobUrl) }}
                    loading={loading}
                />

            </Container> */}

            <ReactMediaRecorder
                audio
                blobPropertyBag={{ type: 'audio/wav' }}
                render={({ status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl }) => (
                    <Container
                        display="flex"
                        direction="row"
                        justify="center"
                        align="center"
                    >
                        <Spacer x={1} />
                        {
                            status !== 'recording' ?
                                <RecordButton isLoading={loading} startRecording={startRecording} />
                                :
                                <StopButton isLoading={loading} stopRecording={stopRecording} />
                        }
                        <Spacer x={1} />
                        <audio src={status === "idle" ? null : mediaBlobUrl} controls ref={audioRef} />
                        <Spacer x={1} />
                        <UploadButton
                            status={status}
                            handleSave={() => {
                                handleSave(mediaBlobUrl)
                                clearBlobUrl()
                            }}
                            loading={loading}
                        />

                    </Container>
                )}
            >
            </ReactMediaRecorder>
        </div>
    )
}

export default RecordSection