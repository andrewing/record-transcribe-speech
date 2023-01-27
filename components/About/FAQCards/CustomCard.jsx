import { Card, Text } from "@nextui-org/react"

const CustomCard = ({ question, desc }) => {
    return (

        <Card
            isHoverable
            borderWeight="extrabold"
            variant="bordered"
            css={{
                borderColor: "gray",
                backgroundColor: "black",
                borderRadius: "20px",
            }}
        >
            
            <Card.Header>
                <Text
                    b
                    h3
                    weight={"black"}
                    style={{
                        margin: "0px 10px"
                    }}
                >
                    {question}
                </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <Text
                    h4
                    weight={"normal"}
                    style={{
                        margin: "0px 10px",
                        textAlign: "justify",
                    }}
                >
                    {desc}
                </Text>
            </Card.Body>
        </Card>
    )
}

export default CustomCard