import { Button, Tooltip } from "@nextui-org/react"
import Image from "next/image"

const PauseButton = ({ handlePause, disabled }) => {
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
                    src="/pausebutton.png"
                    alt="pause button"
                    width="30"
                    height="30"
                />
            }
            onPress={handlePause}
        >
        </Button>
    )
}

export default PauseButton