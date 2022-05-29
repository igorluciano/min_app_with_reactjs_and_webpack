module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react",
            {
                // Permite criar componentes sem declarar: import React from "react";
                "runtime": "automatic"
            }
        ],
    ]
};