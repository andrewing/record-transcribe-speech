import { Text } from "@nextui-org/react"

const IntroText = () => {
    return (
        // Add text that scales with the screen size

        <Text
            css={{
                fontSize: '$2xl',
                '@xs': {
                    fontSize: '$4xl',
                },
                '@sm': {
                    fontSize: '$4xl',
                },
                '@md': {
                    fontSize: '$6xl',
                },
                '@lg': {
                    fontSize: '$6xl',
                },
            }}
            weight="bold"
        >
            Hello, Voice Actress (or are you? 🤨). <br></br>
            Just to be sure, what&#39;s the&nbsp;
            <Text
                span
                weight="bold"
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    fontSize: '$2xl',

                    '@xs': {
                        fontSize: '$4xl',
                    },
                    '@sm': {
                        fontSize: '$4xl',
                    },
                    '@md': {
                        fontSize: '$6xl',
                    },
                    '@lg': {
                        fontSize: '$6xl',
                    },
                }}
            >
                CODE
            </Text>?
        </Text>
    )
}

export default IntroText