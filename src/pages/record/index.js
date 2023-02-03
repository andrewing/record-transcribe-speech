import Prompt from "@/components/Prompt";
import RecordSection from "@/components/RecordSection";
import { Container, Spacer, Text } from "@nextui-org/react";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

const Record = ({ }) => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('Voice Actress')
    const [id, setId] = useState('')

    useEffect(() => {
        const code = localStorage.getItem('code')

        const isCodeValid = async () => {
            const res = await fetch(`/api/validateCode?code=${code}`)
            const data = await res.json()
            return data
        }

        isCodeValid().then((data) => {
            console.log(data)
            data.success ? "" : router.push('/')
            setName(data.name)
            setId(data.id)
            setIsLoading(false)
            
        })

    }, [])


    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }



    return (
        <Container
            css={{
                height: '85vh',
            }}
        >
            <Spacer y={2} />
            <Text span h1>
                Hello,&nbsp;
                <Text
                    span
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%"
                    }}
                >
                    {name}
                </Text>
                !
            </Text>
            <Prompt />
            <RecordSection id={id} />
        </Container >
    )
}


export async function getStaticProps() {

    return {
        props: {
            data: 'hello'
        }
    };
}

export default Record;