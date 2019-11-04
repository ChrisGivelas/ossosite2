import React from "react";

function AuthWidget(props) {
    return (
        <div id="auth-widget">
            <p>{props.username ? `${props.username}` : `Login`}</p>
        </div>
    );
}

export default AuthWidget;
