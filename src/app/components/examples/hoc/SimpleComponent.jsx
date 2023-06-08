import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const handleLogin = () => {
        onLogin();
    };

    const handleLogOut = () => {
        onLogOut();
    };

    return (
        <>
            {isAuth ? (
                <button onClick={handleLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={handleLogin}>Войти</button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
