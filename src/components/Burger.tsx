import '../styles/Burger.css'

import React from 'react';

interface BurgerProps {
    sidebar: boolean;
    sendDataToParent: (state: boolean) => void;
}

const Burger:React.FunctionComponent<BurgerProps> = ({ sidebar, sendDataToParent }) => {

    return (
        <div onClick={() => sendDataToParent(!sidebar)} className={"burger-wrapper " + (!sidebar ? "exit" : "")}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default Burger;