import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Books from "./layouts/books";
import Header from "./components/ui/header";
import Main from "./layouts/main";
import Login from "./layouts/login";
import SignUp from "./layouts/signUp";
import Gallery from "./layouts/gallery";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/books/:bookId?" component={Books} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
