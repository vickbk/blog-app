import React from "react";

interface TextCenterIf{
    textSize?: "big" | "small" | "large" | "extra-small" | "tiny" | "extra-large",
    children: React.ReactNode
}

export default function TextCenter({textSize = "big", children}: TextCenterIf) {
    return <div className={"col-12 text-center text-"+textSize}>{children}</div>;
}