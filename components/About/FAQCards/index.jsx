import { Card, Grid, Text } from "@nextui-org/react"
import CustomCard from "./CustomCard"

const FAQCards = () => {

    const cards = [
        {
            question: "Who?",
            desc: ""
        },
        {
            question: "What?",
            desc: "My Thesis is on the development of a speech recognition system for Filipino and Bisaya children towards use in a healthcare chatbot."
        },
        {
            question: "How?",
            desc: "The speech recognizer will be trained on the already existing data from DLSU&#39;s ongoing research as well as the data that I will be collecting from you"
        },
        {
            question: "Why?",
            desc: " "
        },

    ]

    return (
        <Grid.Container
            gap={4}
            css={{
                maxWidth: "1000px",
                minWidth: "300px",
            }}
        >
            {cards.map((card, index) => {
                return (
                    <Grid xs={12} md={6} key={index}>
                        <CustomCard question={card.question} desc={card.desc}/>
                    </Grid>
                )
            })}


        </Grid.Container>
    )
}


export default FAQCards