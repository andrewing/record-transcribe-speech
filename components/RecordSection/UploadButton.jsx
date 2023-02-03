import { Button, Loading, Tooltip } from "@nextui-org/react"
import Image from "next/image"
import { useEffect, useState } from "react"

const UploadButton = ({ status, handleSave, loading }) => {

    const [disabled, setDisabled] = useState(false)

    useEffect(()=>{
        if(status === 'idle' || status === 'recording' || loading){
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [status,loading])

    return (
        
            <Button
                disabled={disabled}
                color={"primary"}
                style={{
                    height: '60px',
                    width: '60px',
                }}
                shadow
                auto
                icon={
                    loading ? null : <Image
                        src="/uploadbutton.png"
                        alt="upload button"
                        width="30"
                        height="30"
                    />
                }
                onPress={handleSave}
            >
                {loading ? <Loading color="currentColor" size="sm" /> : null}
            </Button>
    )
}

export default UploadButton