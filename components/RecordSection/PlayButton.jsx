import { Button, Tooltip } from "@nextui-org/react"
import Image from "next/image"

const PlayButton = ({ handlePlay }) => {
    return (
        <Tooltip
            content="play the recording"
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
                        src="/playbutton.png"
                        alt="play button"
                        width="30"
                        height="30"
                    />
                }
                onPress={handlePlay}
            >
            </Button>
        </Tooltip>
    )
}

export default PlayButton