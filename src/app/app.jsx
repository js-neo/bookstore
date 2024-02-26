import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Books from "./layouts/books";
import Header from "./components/common/header";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Gallery from "./layouts/gallery";
import AdminDashboard from "./layouts/adminDashboard";
import SignUp from "./layouts/signUp";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/admin-cabinet" component={AdminDashboard} />
                <Route path="/books/:bookId?" component={Books} />
                <Route exact path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default App;
