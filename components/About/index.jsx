import FAQCards from "./FAQCards"

const { Container, Text, Card, Grid, Spacer } = require("@nextui-org/react")

const About = ({ aboutRef }) => {
    return (
        <div id="about" ref={aboutRef} style={{ scrollMarginTop: "160px" }}>
            <Container
                display="flex"
                justify="center"
                direction="column"
                align="center"
                alignContent="center"
                alignItems="center"
                css={{
                    height: "100vh",
                    width: "100%",
                }}
            >
                <Text
                    h1
                    css={{
                        fontFamily: "$sans",
                    }}
                >
                    About The Project
                </Text>
                <div
                    style={{
                        maxWidth: "1000px",
                    }}
                >
                    <Text
                        h3
                        weight={"hairline"}
                    >
                        Hi! I&apos;m John Andrew Ing and I&apos;m a MS Computer Science student at the De Le Salle University.
                    </Text>
                </div>
                <Spacer y={2} />
                <FAQCards />
            </Container>
        </div>
    )
}

export default About