import React from "react"
// ana compoment 

const Box = ({width = "100px", height = "100px", top = "0", left = "0", backgroundColor = "black", position = "absolute" , borderStyle = "solid", borderWidth="9px" , borderColor = "black"}) => {
    const styles = {
        width,
        height,
        top,
        left,
        position,
        backgroundColor,
        borderStyle,
        borderWidth,
        borderColor
    };

    return <div style={styles}></div>;
};

export default Box;