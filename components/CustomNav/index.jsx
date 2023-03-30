import { Navbar, Spacer } from "@nextui-org/react"
import Image from "next/image"
import { useEffect } from "react"

const CustomNav = ({ active }) => {
    return (
        <Navbar
            isBordered variant={"floating"}
            css={{
                zIndex: 1000,
            }}
        >
            <Navbar.Content
                hideIn="xs"
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Navbar.Link
                    id="recordnav"
                    as="a"
                    isActive={active === "record"}
                    href="#"
                >
                    Record
                </Navbar.Link>
                <Navbar.Link
                    id="aboutnav"
                    as="a"
                    isActive={active === "about"}
                    href="#about"
                >
                    About
                </Navbar.Link>
                <Navbar.Link
                    id="contactnav"
                    as="a"
                    isActive={active === "contact"}
                    href="#contact"
                >
                    Contact
                </Navbar.Link>
                <Navbar.Link
                    id="tutorialnav"
                    as="a"
                    href="https://app.tango.us/app/workflow/Recording-Guide---2becfd04cd724662a0f0c0348eb1a635"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Tutorial <Spacer x={0.3} /><Image src="/newtabsymbol.png" width={12} height={12} />
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

export default CustomNav