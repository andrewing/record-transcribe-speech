import { Button, Loading, Tooltip } from "@nextui-org/react"
import Image from "next/image"
import { useEffect, useState } from "react"

const UploadButton = ({ status, handleSave, loading, isLargeScreen }) => {

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (status === 'idle' || status === 'recording' || loading) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [status, loading])

    return (
        <Tooltip
            content="submit the recording"
            placement="bottom"
            hideArrow
            color="invert"
            offset={-30}
        >
            <Button
                disabled={disabled}
                color={"primary"}
                style={{
                    height: '60px',
                    width: '60px',
                }}
                shadow
                auto
                icon={
                    loading ? null : <Image
                        src="/uploadbutton.png"
                        alt="upload button"
                        width="30"
                        height="30"
                    />
                }
                onPress={handleSave}
            >
                {loading ? <Loading color="currentColor" size="sm" /> : null}
            </Button>
        </Tooltip>
    )
}

export default UploadButton