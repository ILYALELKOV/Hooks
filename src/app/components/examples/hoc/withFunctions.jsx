import React from "react";
import CardWrapper from "../../common/Card";

const WithFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <>
            <CardWrapper>
                <Component
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    {...props}
                />
            </CardWrapper>
        </>
    );
};

export default WithFunctions;
