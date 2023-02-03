import { Button, Modal, Text } from "@nextui-org/react";

const ErrorModal = ({ visible, closeHandler }) => {
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text
                    id="modal-title"
                    size={"$4xl"}
                >
                    Oops! 😅
                </Text>
            </Modal.Header>

            <Modal.Body
            >
                <Text
                    size={18}
                    css={{
                        fontFamily: "$sans",
                    }}
                >
                    The&nbsp; 
                    <Text
                        span
                        weight="bold"
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                    >
                        CODE&nbsp; 
                    </Text>
                    you entered is incorrect. Please try again. If you think this is a mistake or we didn&apos;t send you a code, please contact me.
                </Text>
            </Modal.Body>
            <Modal.Footer
                css={{
                    justifyContent: "center",
                }}
            >
                <Button size="lg" auto flat color="error" onPress={closeHandler}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;