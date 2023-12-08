const Tabs = ({ children, buttons, ButtonsContainer = 'menu' }) => {
    // const ButtonContainer = buttonsContainer

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
};

export default Tabs;