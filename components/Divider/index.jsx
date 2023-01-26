import { Spacer, Text } from "@nextui-org/react"
import Marquee from "react-fast-marquee"

const Divider = ({ text = "" }) => {
    const arr = `${text} `.repeat(54) + text


    return (
        // white line across the screen
        <div>
            <hr
                style={{
                    borderTop: "4px solid #fff"
                }}
            />
            <Spacer y={0.5} />
            <Marquee gradient={false} speed={100}>
                <Text
                    css={{
                        fontSize: "1.5rem",
                        fontFamily: "$mono",
                    }}
                >
                    {arr}&nbsp;
                </Text>
            </Marquee>
            
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