import React from "react";

const Button = ({children,  onClick }) => {
    return (
        <button onClick={onClick}>{children}</button> //må hete onClick, prpen tar en funskjon som vil bli kalt når knappen er klikka på
    );
};

export default Button;