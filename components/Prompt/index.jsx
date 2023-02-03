import { Container, Spacer, Text, Tooltip } from "@nextui-org/react"
import Image from "next/image"

const Prompt = () => {
    return (
        <Container
            display="flex"
            justify="center"
            direction="column"
            align="center"
            css={{
                height: "55vh",
            }}
        >
            <Text span h2 css={{ fontFamily: "$sans" }}>
                Q: What is your name? &nbsp;
                <Tooltip 
                content="This is what a nurse or healthcare worker would ask"
                color="invert"
                offset={35}
                >
                    <Image
                        src={"/infobutton.png"}
                        alt="info button"
                        height={20}
                        width={20}
                        style={{
                            cursor: "pointer",
                        }}
                    />
                </Tooltip>
            </Text>

            <Text span h1 css={{ fontFamily: "$sans" }}>
                &ldquo;my name is hello hello&rdquo;&nbsp;
                <Tooltip 
                content="Read this when recording!"
                color="invert"
                offset={30}
                >
                    <Image
                        src="/infobutton.png"
                        alt="info button"
                        height={20}
                        width={20}
                        style={{
                            cursor: "pointer",
                        }}
                    />
                </Tooltip>
            </Text>
            <Spacer y={0.5} />
            <Text css={{ fontFamily: "$sans" }}>
                Progress: 0/510
            </Text>
        </Container>
    )
}

export default Prompt

