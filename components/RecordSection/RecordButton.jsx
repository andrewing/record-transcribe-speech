import Image from "next/image"

const { Tooltip, Button } = require("@nextui-org/react")

const RecordButton = ({ startRecording }) => {
    return (
        <Tooltip
            content="click me to record!"
            placement="bottom"
            hideArrow
            color="invert"
            offset={-30}
        >
            <Button
                onPress={startRecording}
                style={{
                    width: '60px',
                    height: '60px',
                }}
                auto
                shadow
                color={"success"}
                icon={
                    <Image
                        src="/recordbutton.png"
                        alt="record button"
                        width="30"
                        height="30"

                    />
                }
            >
            </Button>
        </Tooltip>
    )
}

export default RecordButton