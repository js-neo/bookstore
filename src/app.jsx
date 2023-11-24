import React from "react";
import Books from "./components/books";

const App = () => {
    return (
        <div className="vh-100 bg-dark">
            <Books />
            <p className="text-light btn">Test text</p>
        </div>
    );
};

export default App;
