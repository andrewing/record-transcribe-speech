import { Navbar } from "@nextui-org/react"
import { useEffect } from "react"

const CustomNav = ({active}) => {
    return (
        <Navbar
            isBordered variant={"floating"}
            css={{
                zIndex: 1000,
            }}
        >
            <Navbar.Content hideIn="xs"
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Navbar.Link
                    as="a"
                    isActive={active==="record"}
                    href="#"    
                >
                    Record
                </Navbar.Link>
                <Navbar.Link
                    as="a"
                    isActive={active==="about"}
                    href="#about"
                >
                    About
                </Navbar.Link>
                <Navbar.Link
                    as="a"
                    isActive={active==="contact"}
                    href="#contact"
                >
                    Contact Us
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

export default CustomNav