import '../styles/Burger.css'

import React, { useState } from "react";

const Burger:React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(!open)} className={"burger-wrapper " + (open ? "open" : "")}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default Burger;