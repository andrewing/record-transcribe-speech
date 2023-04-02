import Prompt from "@/components/Prompt";
import RecordSection from "@/components/RecordSection";
import { Container, Spacer, Text } from "@nextui-org/react";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

const Record = ({ isLargeScreen }) => {
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

    const splitIgnoringQuotes = str => {
        let pattern = /("[^"]*")|('[^']*')|([^,]+)/g;
        let result = [];
        str.replace(pattern, function (match, doubleQuoted, singleQuoted, unquoted) {
            if (unquoted) {
                result.push(unquoted.trim());
            } else {
                result.push(match);
            }
        });
        return result;
    }

    const removeCommasFromEnd = str => {
        return str.replace(/,+$/, '');
    }

    useEffect(() => {
        if (data) {
            console.log(currQuestion, data.length)
            if (currQuestion >= data.length) {
                router.push('/thankyou')
            } else {
                // remove all commas at the end of the string
                let processedData = removeCommasFromEnd(data[currQuestion])
                processedData = splitIgnoringQuotes(processedData)
                // remove empty strings from array
                processedData = processedData.filter((item) => (item !== "" && item !== "\r"))
                let strCurrQuestion = processedData[0]
                let strCurrPrompt = processedData[currPrompt + 1]
                setStrCurrQuestion(strCurrQuestion)
                setStrCurrPrompt(strCurrPrompt)
            }
        }
    }, [data, currQuestion, currPrompt])

    const handleNextPrompt = () => {
        // split the data by comma except in quotation marks
        let processedData = removeCommasFromEnd(data[currQuestion])
        processedData = splitIgnoringQuotes(processedData)
        console.log("hello", processedData)

        // remove empty strings from array
        processedData = processedData.filter((item) => (item !== "" && item !== "\r"))
        if (currPrompt + 2 < processedData.length) {
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
                isLoading={isLoading}
                isLargeScreen={isLargeScreen}
            />
        </Container >
    )
}



export default Record;