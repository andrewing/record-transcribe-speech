import FAQCards from "./FAQCards"

const { Container, Text, Card, Grid, Spacer } = require("@nextui-org/react")

const About = ({ aboutRef }) => {
    return (
        <div id="about" ref={aboutRef} style={{ scrollMarginTop: "220px" }}>
            
            <Spacer y={3} />
            <Container
                display="flex"
                justify="center"
                direction="column"
                alignContent="center"
                alignItems="center"
                css={{
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
                        weight={"thin"}
                    >
                        Hi! I&apos;m John Andrew Ing and I&apos;m a MS Computer Science student at the De Le Salle University.
                    </Text>
                </div>
                <FAQCards />
            </Container>
            <Spacer y={5} />
        </div>
    )
}

export default About