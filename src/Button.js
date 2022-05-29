// import React from "react";
const handleClick = () => {
    alert("Foi clicado.");
};

const Button = () => {
    return (
        <div>
            <button type="button" onClick={handleClick}>Clique</button>
        </div>
    );
};

export default Button;