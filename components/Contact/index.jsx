import { Container, Link, Spacer, Text } from "@nextui-org/react"

const { default: ProfileImage } = require("./ProfileImage")

const Contact = ({ contactRef }) => {
    return (
        <div id={"contact"} ref={contactRef} style={{ scrollMarginTop: "170px" }}>
            <Container
                display="flex"
                justify="center"
                direction="column"
                alignContent="center"
                alignItems="center"
                css={{
                    height: "60vh",
                    width: "100%",
                }}
            >
                <Spacer y={2} />
                <ProfileImage />
                <Spacer y={2} />
                <Text
                    h2
                    b
                >
                    John Andrew Ing
                </Text>

                <Text
                    h4
                    span
                >
                    ✉️:john_andrew_ing@dlsu.edu.ph
                </Text>
                <Text
                    h4
                >
                    📱: +63 947 428 1504
                </Text>
            </Container>
        </div>
    )
}

export default Contact