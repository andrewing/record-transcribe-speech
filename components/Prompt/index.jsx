import { Button, Container, Grid, Progress, Spacer, Text, Tooltip } from "@nextui-org/react"
import Image from "next/image"
import csvParser from "csv-parser"
import { useEffect, useState } from "react"

const Prompt = ({ currQuestion, strCurrQuestion, strCurrPrompt }) => {

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
                Q{currQuestion + 1}:&nbsp;
                <Text
                    span
                    showIn={"sm"}
                >
                    <Tooltip
                        content={`context: ${strCurrQuestion}`}
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
            </Text>

            <Text
                span
                h3
                css={{
                    fontFamily: "$sans",
                }}
                hideIn={"sm"}
            >
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

            <Text
                span
                h1
                css={{
                    fontSize: '$2xl',
                    fontFamily: "$sans",
                    '@xs': {
                        fontSize: '$3xl',
                    },
                    '@sm': {
                        fontSize: '$4xl',
                    },
                    '@md': {
                        fontSize: '$5xl',
                    },
                    '@lg': {
                        fontSize: '$5xl',
                    },
                }}
            >
                &ldquo;{strCurrPrompt}&rdquo;&nbsp;
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,  */}
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
                Progress: {currQuestion + 1} / 370 Questions
            </Text>
        </Container>
    )
}

export default Prompt

