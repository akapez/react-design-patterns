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

const ControlledModal = ({ isOpen, onRequestClose, children }) => {
    return (
        isOpen ? (<ModalBackground onClick={onRequestClose}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={onRequestClose}>Close Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>) : null

    );
};

export default ControlledModal;