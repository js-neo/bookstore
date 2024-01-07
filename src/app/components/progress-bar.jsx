import React from "react";

const ProgressBar = () => {
    return (
        <div
            className="m-4 d-flex justify-content-center align-items-center"
            style={{ height: "calc(100vh - 120px)" }}
        >
            <div className="progress col-7">
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "100%" }}
                >
                    loading...
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
