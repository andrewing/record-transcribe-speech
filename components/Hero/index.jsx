import { useState } from "react";
import IntroText from "@/components/Hero/IntroText";
import { useRouter } from "next/router";
import ErrorModal from "./ErrorModal";
const { Spacer, Input, Container, Col, Button, Row, Loading, Modal } = require("@nextui-org/react")

const Hero = ({ recordRef }) => {
    const router = useRouter()

    const [code, setCode] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false);

    const closeHandler = () => {
        setVisible(false);
    };

    const handleClick = () => {
        setLoading(true)
        const isCodeValid = async () => {
            const res = await fetch(`/api/validateCode?code=${code}`)
            const data = await res.json()
            return data
        }

        isCodeValid().then((data) => {
            localStorage.setItem('code', code)
            if(data.success) {
                window.location.replace("/record")
            } else {
                setError(true)
                setVisible(true)
                setLoading(false)
            }
        })
    }

    return (
        <div id="record" ref={recordRef} style={{ scrollMarginTop: "160px" }}>
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
                        color={error ? "error" : "default"}
                        status={error ? "error" : "default"}
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
                        onPress={handleClick}
                        css={{
                            width: "100px",
                        }}
                    >
                        {
                            loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Submit'
                        }
                    </Button>

                </Container>
            </Container>
            <ErrorModal closeHandler={closeHandler} visible={visible} />
        </div>
    )
}

export default Hero;