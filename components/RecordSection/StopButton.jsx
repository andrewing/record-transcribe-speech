import Image from "next/image"

const { Tooltip, Button } = require("@nextui-org/react")

const StopButton = ({ stopRecording,isLoading }) => {
    return (
        <Tooltip
            content="click me to stop recording"
            placement="bottom"
            hideArrow
            color="invert"
            offset={-30}
        >
            <Button
                onPress={stopRecording}
                style={{
                    width: '60px',
                    height: '60px',
                }}
                auto
                shadow
                color={"error"}
                disabled={isLoading}
                icon={
                    <Image
                        src="/stopbutton.png"
                        alt="stop button"
                        width="30"
                        height="30"
                    />
                }
            >
            </Button>
        </Tooltip>
    )
}

export default StopButton