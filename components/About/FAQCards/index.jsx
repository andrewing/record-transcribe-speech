import { Card, Grid, Text } from "@nextui-org/react"
import CustomCard from "./CustomCard"

const FAQCards = () => {

    const cards = [
        {
            question: "What?",
            desc: "My Thesis is on the development of a speech recognition system for Filipino and Bisaya children towards use in a healthcare chatbot. This is an extension to DLSU's ongoing healthcare chatbot project."
        },
        {
            question: "How?",
            desc: "The speech recognizer will be trained on the already existing data from DLSU's ongoing research as well as the data that I will be collecting from you"
        },
        {
            question: "Why?",
            desc: "Philippine public schools often have no efficient and systematic way of assessing the physical wellness of children. A speech recognition system can be used to assess the physical wellness of children in a more efficient and systematic way."
        },
        {
            question: "Why Female Adults?",
            desc: "Due to ethical considerations, female voice actresses' speech was used instead of children's speech. Since the frequency of children's voices is, on average, between 250-400 Hz, a suitable alternative for this is the adult female voice which is usually around 200 Hz"
        }

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