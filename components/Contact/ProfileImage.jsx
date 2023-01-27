import { useState, } from 'react'
import { Card, useTheme } from "@nextui-org/react";
const ProfileImage = ({ }) => {
    const { isDark, theme } = useTheme()

    const [darkBoxShadowColors, setDarkBoxShadowColors] = useState([
        theme.colors.yellow300.value,
        theme.colors.cyan500.value,
        theme.colors.pink300.value,
        theme.colors.green300.value,
        theme.colors.purple300.value,
    ])

    return (
        <div
            style={{
                width: "clamp(200px, 15vw, 300px)",
                height: "clamp(200px, 15vw, 300px)",
            }}
        >
            <Card
                isHoverable
                css={{
                    width: "clamp(200px, 15vw, 300px)",
                    aspectRatio: 1,
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    boxShadow: `0 8px 30px rgba(256, 256, 256, 0.05)`,

                }}
            >

                <Card.Image
                    css={{
                        filter: `
                        grayscale(${isDark ? '80%' : '85%'})
                        drop-shadow(4px 0px 4px ${darkBoxShadowColors[3]}) 
                        drop-shadow(0px 4px 4px ${darkBoxShadowColors[4]}) 
                        `,
                    }}
                    src={"/andrew1.png"}
                    height="100%"
                    width="100%"
                    alt="andrew"
                />
            </Card>
        </div>
    )
}

export default ProfileImage;