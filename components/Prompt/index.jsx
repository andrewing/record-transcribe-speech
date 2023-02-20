import { Button, Container, Grid, Progress, Spacer, Text, Tooltip } from "@nextui-org/react"
import Image from "next/image"
import csvParser from "csv-parser"
import { useEffect, useState } from "react"

const Prompt = ({currQuestion, strCurrQuestion, strCurrPrompt}) => {


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
                {strCurrQuestion} &nbsp;
                <Tooltip
                    content="contextual information on what a nurse would need to know"
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
                &ldquo;{strCurrPrompt}&rdquo;&nbsp;
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
                Progress: {currQuestion + 1} / 372
            </Text>
        </Container>
    )
}

export default Prompt

