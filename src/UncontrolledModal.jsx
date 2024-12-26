import { Fragment, useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

const UncontrolledModal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
            {isOpen && (<ModalBackground onClick={() => setIsOpen(false)}>
                <ModalBody onClick={e => e.stopPropagation()}>
                    <button onClick={() => setIsOpen(false)}>Close Modal</button>
                    {children}
                </ModalBody>
            </ModalBackground>)}
        </Fragment>
    );
};

export default UncontrolledModal;