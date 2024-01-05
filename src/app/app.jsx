import React, { useEffect, useState } from "react";
import Books from "./components/books";
import Header from "./components/header";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";

const App = () => {
    const [currentLabel, setCurrentLabel] = useState("Main");

    const history = useHistory();

    useEffect(() => {
        history.push("/");
    }, []);
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
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/books/:bookId?" component={Books} />
                <Route exact path="/" component={Main} />
            </Switch>
        </>
    );
};

export default App;
