import React, { useState } from "react";
import Books from "./components/books";
import Header from "./components/header";

const App = () => {
    const [currentLabel, setCurrentLabel] = useState("Main");
    const handleChangeLabel = (label) => {
        setCurrentLabel(label);
    };
    return (
        <>
            <Header
                {...{
                    currentLabel,
                    onChangeLabel: handleChangeLabel
                }}
            />
            <Books />
        </>
    );
};

export default App;
