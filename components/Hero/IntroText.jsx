import { Text } from "@nextui-org/react"

const IntroText = () => {
    return (
        <Text
            size={"$6xl"}
            weight="bold"
        >
            Hello, Voice Actress (or are you? 🤨). <br></br>
            Just to be sure, what&#39;s the&nbsp;
            <Text
                span
                size={"$6xl"}
                weight="bold"
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
            >
                CODE
            </Text>?
        </Text>
    )
}

export default IntroText