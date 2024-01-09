import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Books from "./layouts/books";
import Header from "./components/header";
import Main from "./layouts/main";
import Login from "./layouts/login";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/books/:bookId?" component={Books} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
