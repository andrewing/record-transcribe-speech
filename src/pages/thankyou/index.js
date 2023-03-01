import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

const ThankYou = () => {
    return (
        <div>
            <Container
                display="flex"
                justify="center"
                direction="column"
                align="center"
                alignContent="center"
                alignItems="center"
                css={{
                    height: "90vh",
                    width: "33vw",
                }}
            >
                <Text h1>
                    🎉 Thank You! 🎉
                </Text>
                <Image
                    src="/thankyou.gif"
                    alt="Thank You"
                    width={500}
                    height={275}
                />
                <Text
                    h5
                >
                    You have saved my research. I am eternally grateful for your time and effort in helping me!
                </Text>
            </Container>
        </div>
    );
}

export default ThankYou;