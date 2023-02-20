import Prompt from "@/components/Prompt";
import RecordSection from "@/components/RecordSection";
import { Container, Spacer, Text } from "@nextui-org/react";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

const Record = ({}) => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('Voice Actress')
    const [id, setId] = useState('')

    const [data, setData] = useState(null)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [currPrompt, setCurrPrompt] = useState(0)
    const [strCurrQuestion, setStrCurrQuestion] = useState("")
    const [strCurrPrompt, setStrCurrPrompt] = useState("")

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
            setCurrQuestion(data.progressQuestion)
            setCurrPrompt(data.progressPrompt)
            setIsLoading(false)
        })

    }, [])


    
    
    useEffect(() => {
        const fetchCsv = async () => {
            const res = await fetch("/dataspeechrecord.csv")
            const text = await res.text()
            const lines = text.split("\n")
            setData(lines)
        }
        fetchCsv()
    }, [])

    useEffect(() => {
        if (data) {
            let processedData = data[currQuestion].split(",")
            // remove empty strings from array
            processedData = processedData.filter((item) => (item !== "" && item !== "\r"))
            let strCurrQuestion = processedData[0]
            let strCurrPrompt = processedData[currPrompt + 1]
            setStrCurrQuestion(strCurrQuestion)
            setStrCurrPrompt(strCurrPrompt)
        }
    }, [data, currQuestion, currPrompt])

    const handleNextPrompt = () => {
        if (currPrompt + 1 < data[currQuestion].split(",").length) {
            setCurrPrompt(currPrompt + 1)
        } else {
            setCurrPrompt(0)
            setCurrQuestion(currQuestion + 1)
        }
    }


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
            <Prompt
                currQuestion={currQuestion}
                strCurrQuestion={strCurrQuestion}
                strCurrPrompt={strCurrPrompt}
            />
            <RecordSection
                id={id}
                handleNextPrompt={handleNextPrompt}
                currQuestion={currQuestion}
                currPrompt={currPrompt}
                strCurrQuestion={strCurrQuestion}
                strCurrPrompt={strCurrPrompt}
            />
        </Container >
    )
}



export default Record;