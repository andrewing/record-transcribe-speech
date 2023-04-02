import { Button, Tooltip } from "@nextui-org/react"
import Image from "next/image"

const PlayButton = ({ handlePlay, disabled }) => {
    return (
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
    )
}

export default PlayButton