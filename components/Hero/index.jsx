import { useState } from "react";
import IntroText from "@/components/Hero/IntroText";
const { Spacer, Input, Container, Col, Button, Row } = require("@nextui-org/react")

const Hero = ({recordRef}) => {
    const [code, setCode] = useState('')
    return (
        <div id="record" ref={recordRef} style={{scrollMarginTop: "160px"}}>
            <Container
                display="flex"
                justify="center"
                direction="column"
                align="center"
                alignContent="center"
                alignItems="center"
                css={{
                    height: "85vh",
                    width: "100%",
                }}
            >
                <IntroText />
                <Spacer y={2} />
                <Container
                    // left to right flex
                    display="flex"
                    justify="center"
                    gap={2}
                >
                    <Input
                        size="xl"
                        bordered
                        labelPlaceholder='Super Secret Code'
                        css={{
                            fontFamily: "$sans",
                        }}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        value={code}
                    />
                    <Spacer x={1} />
                    <Button
                        color="gradient"
                        size="lg"
                        auto
                        shadow
                    >
                        Submit
                    </Button>

                </Container>
            </Container>
        </div>
    )
}

export default Hero;