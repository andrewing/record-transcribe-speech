import { Spacer, Text } from "@nextui-org/react"
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"

const Divider = ({ text = "" }) => {
    const arr = `${text} `.repeat(54) + text
    const [pText, setPText] = useState(arr)
    const [isRight, setIsRight] = useState(true)

    return (
        // white line across the screen
        <div>
            <style>
                @import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300);
            </style>
            <hr
                style={{
                    borderTop: "4px solid #fff"
                }}
            />
            <Spacer y={0.25} />
            <div
                style={{
                    cursor: "pointer",
                }}
                onClick={() => {
                    setIsRight(!isRight)
                }}
            >

                <Marquee
                    gradient={false}
                    speed={100}
                    direction={isRight ? "right" : "left"}
                >
                    <Text
                        css={{
                            fontSize: "1.5rem",
                            fontFamily: "'Comfortaa', cursive",
                        }}
                    >
                        {pText}&nbsp;
                    </Text>
                </Marquee>
            </div>

            <Spacer y={0.25} />
            <hr
                style={{
                    borderTop: "4px solid #fff"
                }}
            />
        </div >


    )
}

export default Divider