import { Button, Tooltip } from "@nextui-org/react"
import Image from "next/image"

const PauseButton = ({ handlePause }) => {
    return (
        <Tooltip
            content="click me to pause"
            placement="bottom"
            hideArrow
            color="invert"
            offset={-30}
        >
            <Button
                color={"primary"}
                style={{
                    height: '60px',
                    width: '60px',
                }}
                shadow
                auto
                icon={
                    <Image
                        src="/pausebutton.png"
                        alt="pause button"
                        width="30"
                        height="30"
                    />
                }
                onPress={handlePause}
            >
            </Button>
        </Tooltip>
    )
}

export default PauseButton